import React, { useState } from 'react'
import loginSignupImage from "../assets/User.gif"
import {BiShowAlt} from "react-icons/bi"
import {BiHide} from "react-icons/bi"
import { Link,useNavigate} from 'react-router-dom'
import { ImagetoBase64 } from '../utility/imagetoBase64'
import { toast } from 'react-hot-toast'

const Signup = () => {
    const navigate = useNavigate()
    const[showPassword,setShowPassword] = useState(false)
    const[showConfirmPassword,setShowConfirmPassword] = useState(false)
    const[data,setData] =useState({
      namaDepan:"",
      namaBelakang:"",
      email:"",
      password:"",
      konfirmasipassword:"",
      Image:"",
    });
    console.log(data)
    const handleShowPassword = () =>{
      setShowPassword(preve => !preve)
    }
    const handleshowConfirmPassword =() =>{
      setShowConfirmPassword(preve => !preve)
    }

    const handleOnChange = (e)=>{

        const {name,value}= e.target
        setData((preve)=>{
          return{
              ...preve,
              [name] : value
          }
        })
    }
    const handleUploadProfileImage =async(e)=>{
        const data = await ImagetoBase64(e.target.files[0])
        console.log(data)
        setData((preve)=>{
          return{
            ...preve,
             Image : data
          }
        })

    } 
    console.log(process.env.REACT_APP_SERVER_DOMIN)
    const handleSubmit =async(e)=>{
      e.preventDefault();
      const {namaDepan,email,password,konfirmasipassword} = data
      if (namaDepan&&email&&password&&konfirmasipassword){
        if(password === konfirmasipassword){

           
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
              method : "POST",
              headers : {
                "content-type" : "application/json"
              },
              body : JSON.stringify(data)
            })

            const dataRes = await fetchData.json()
            console.log(dataRes)

          //alert(dataRes.message);
          toast(dataRes.message);
          if(dataRes.alert){
            navigate("/login")
          }

        }
        else{
           alert("password gak sama")
        }
      }
      else{
        alert(" kolom wajib di isi")
      }
    }


  return (
  
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
           {/*<h1 className='text-center text-xl font-bold'>Daftar</h1>*/ }
           <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative cursor-pointer'>
                < img src={data.Image ?data.Image : loginSignupImage} className='w-full h-full'/>


              <label htmlFor="profileImage">
                <div className="absolute bottom-0 h-1/33 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
                   <p className="text-sm p-1 text-white">Upload</p>
                </div>
                <input type={"file"} id="profileImage" accept="image/*"className="hidden" onChange={handleUploadProfileImage}/>
              </label>
           </div>

           <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor='namaDepan'>Nama Depan</label>
                <input type={"text"}
                 id="namaDepan"
                 name='namaDepan'
                 className='mt-1 mb-2 w-full bg-slate-200 px-2 p-1 rounded focus-within:outline-blue-400'
                value={data.namaDepan}
                onChange={handleOnChange}
                />

                <label htmlFor='namaBelakang'>Nama Belakang</label>
                <input type={"text"}
                 id="namaBelakang"
                 name='namaBelakang' 
                 className='mt-1 mb-2 w-full bg-slate-200 px-2 p-1 rounded focus-within:outline-blue-400'
                value={data.namaBelakang}
                onChange={handleOnChange}
                />
                
                <label htmlFor='email'>Alamat Email</label>
                <input type={"email"} 
                id="email" 
                name='email' 
                className='mt-1 mb-2 w-full bg-slate-200 px-2 p-1 rounded focus-within:outline-blue-400'
                value={data.email}
                onChange={handleOnChange}
                />
              
                <label htmlFor='password'>Password</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 md-2 focus-within:outline focus-within:outline-blue-400'> 
                <input 
                 type={showPassword ? "text" : "password"}
                 id="password"
                 name='password'
                 className=' w-full bg-slate-200 border-none outline-none'
                 value={data.password}
                 onChange={handleOnChange}
                 />

                <span className='flex text-xl cursor-pointer'onClick={handleShowPassword}>{showPassword? <BiShowAlt/> : <BiHide/>}</span>
                </div>

                <label htmlFor='konfirmasipassword'>konfirmasi Password</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 md-2 focus-within:outline focus-within:outline-blue-400'> 
                <input type={showConfirmPassword? "text" : "password"} 
                  id="konfirmasipassword" 
                  name='konfirmasipassword' 
                  className=' w-full bg-slate-200 border-none outline-none'
                  value={data.konfirmasipassword}
                  onChange={handleOnChange}
                  />
                <span className='flex text-xl cursor-pointer'onClick={handleshowConfirmPassword}>{showPassword? <BiShowAlt/> : <BiHide/>}</span>
                </div>
                <button className="w-full max-w-[150px] m-auto bg-red-400 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full">Daftar</button>
           </form>
           <p className='text-left text-sm mt-2'>sudah pernah Daftar? <Link to={"/login"}className="text-red-500 underline">Login</Link> </p>
        </div>
    </div>
  )
}

export default Signup