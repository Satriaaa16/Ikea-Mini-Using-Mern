const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app= express()
app.use(cors())
app.use(express.json({limit : "10mb"}))

const PORT = process.env.PORT || 8080

// koneksi mongo
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("connect to database"))
.catch((err)=>console.log(err))

//schema
const userSchema = mongoose.Schema({
    namaDepan: String,
    namaBelakang: String,
    email:{
        type : String,
        unique : true,
    },
    password:String,
    konfirmasipassword:String,
    Image:String,
})

// 
const userModel = mongoose.model("user",userSchema)


// api 
app.get("/", (req,res)=>{
    res.send("server is running")

})

//signup
app.post("/signup", async (req, res) => {
    try {
        console.log(req.body);
        const { email } = req.body;

        // Use async/await with findOne
        const existingUser = await userModel.findOne({ email: email });

        console.log(existingUser);

        if (existingUser) {
            res.send({ message: "Email is already registered",alert : false });
        } else {
            // Use new userModel() to create a new instance
            const data = new userModel(req.body);
            // Use async/await with save
            await data.save();
            res.send({ message: "Successfully signed up",alert: true });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});
//api login
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Use async/await with findOne
        const user = await userModel.findOne({ email: email });

        // Check if the user exists
        if (!user) {
            return res.send({ message: "Email not found, please sign up", alert: false });
        }

        // Verify the password (you might want to use a secure authentication method here)
        if (user.password !== password) {
            return res.send({ message: "Invalid password", alert: true });
        }

        // Successful login
        const dataSend = {
            _id: user._id,
            namaDepan: user.namaDepan,
            namaBelakang: user.namaBelakang,
            email: user.email,
            Image: user.Image, // Fix typo in property name
        };

        console.log(dataSend);
        res.send({ message: "Successfully logged in", alert: true, data: dataSend });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error", alert: true });
    }
});

//product section
const schemaProduct = mongoose.Schema({
    name : String,
    category : String,
    image : String,
    price : String,
    description : String,
});
const productModel = mongoose.model("product",schemaProduct)

///nyimpen product di data
//api 
app.post("/uploadProduct",async(req,res)=>{
    console.log(req.body)
    const data = productModel(req.body)
    const datasave = await data.save()
    res.send({message : "Upload Successfully"})
})

app.get("/product",async(req,res)=>{
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
})






// server listen
app.listen(PORT,()=>console.log("server is running at port:" + PORT))