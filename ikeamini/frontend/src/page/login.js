import React,{ useState } from 'react';
import  userIcon from '../assets/User.gif'
import {BiShowAlt} from "react-icons/bi";
import {BiHide} from "react-icons/bi";
import { Link } from 'react-router-dom';
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../redux/userSlice';


const Login = () => {
    const[showPassword,setShowPassword] = useState(false)

    const[data,setData] =useState({
      email:"",
      password:"",
    });
    const navigate = useNavigate()
   
    const userData = useSelector(state => state)
    console.log(userData)

    const dispatch = useDispatch()




    const handleShowPassword = () =>{
      setShowPassword(preve => !preve)
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

    const handleSubmit = async(e)=>{
      e.preventDefault()
      const {email,password} = data
        if(password && email ){
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`,{
            method : "POST",
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })

          const dataRes = await fetchData.json()
          console.log(dataRes)
          
          toast(dataRes.message)

          if(dataRes.alert){
              dispatch(loginRedux(dataRes))
              setTimeout(() => {
                navigate("/")
              }, 1000);
          }

          console.log(userData)
        }
        else{
           alert("wajib diisi")
        }
      }
      

  return (
          <div className='p-3 md:p-4'>
          <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
            {/*<h1 className='text-center text-xl font-bold'>Daftar</h1>*/ }
            <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                  < img src={userIcon} className='w-full'/>
            </div>

            <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
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
                  <span className='flex text-xl cursor-pointer'onClick={handleShowPassword}>
                    {showPassword? <BiShowAlt/> : <BiHide/>}
                    </span>
                  </div>

                  <button className="w-full max-w-[150px] m-auto bg-red-400 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full">
                    Login
                  </button>
                 </form>
                <p className='text-left text-sm mt-2'>
                  belum punya akun? {" "}
                <Link to={"/signup"}className="text-red-500 underline">
                  Daftar
                </Link> 
                </p>
          </div>
      </div>
  )
}

export default Login