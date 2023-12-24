import React, { useState } from 'react'
import ikea from '../assets/ikea.png'
import { Link } from 'react-router-dom'
import {FaUserAlt} from "react-icons/fa"
import {FaCartPlus} from "react-icons/fa"
import {FaRegHeart} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { logoutRedux } from '../redux/userSlice'
import { toast } from 'react-hot-toast'
const Header = () => {
    const[showMenu,setShowMenu] = useState(false);
    const userData = useSelector((state)=>state.user)
    console.log(userData.email)
    const dispatch =  useDispatch()

    const handleShowMenu = () => {
      setShowMenu(preve => !preve)
    }
    const handleLogout = () =>{
        dispatch(logoutRedux())
        toast("Log out success")
    }

   
   console.log(process.env.REACT_APP_ADMIN_EMAIL)
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">   
        {/*deskop*/} 

        <div className="flex items-center h-full justify-between">
          <Link>
          <div className="h-10">
                <img src={ikea} className="h-full"/>
              </div>
          </Link>

          <div className="flex items-center gap-5 md:gap-7">
              <nav className="flex gap-4 md:gap-6 text-base md:text-lg hidde md:flex">
                <Link to={""}>Beranda</Link>
                <Link to={"MENU/65840c4b44df613485d78690"}>Menu</Link>
                <Link to={"TENTANG"}>Tentang</Link>
                <Link to={"KONTAK"}>Kontak</Link>
              </nav>
              <div className="text-2xl text-slate-600 relative">
                   <Link to={"cart"}><FaCartPlus/> 
                    <div className="absolute -top-1 -right-1 text-white bg-red-400 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">0
                    </div>
                    </Link>
                    </div>
                  
              <div className="text-2x1 text-slate-600">
                    <Link to={"like"}><FaRegHeart/></Link>
              </div>
              
              <div className=" text-slate-600 " onClick={handleShowMenu}>
                <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md flex flex-col ">
                    {userData.Image ? <img src={userData.Image} className="h-full w-full"/> : <FaUserAlt /> }
                </div>
                {showMenu &&(
                  <div className="absolute right-2 bg-white py-3 px-2 shadow drop-shadow-sm flex flex-col min-w-[120px]text-center">
                    {
                      userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={"produkbaru"}className="whitespace-nowrap cursor-pointer px-2">Produk Baru</Link>
                    }

                   {
                    userData.Image ? <p className="cursor-pointer text-white px-2 bg-red-400"onClick={handleLogout}>Log out({userData.namaDepan})</p> : <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2">Login</Link>
                   }
                    
                    <nav className="text-base md:text-lg  md:flex-lg flex flex-col md:hidden">
                    <Link to={""}className='px-2 py-1'>Beranda</Link>
                    <Link to={"MENU/65840c4b44df613485d78690"}className='px-2 py-1'>Menu</Link>
                    <Link to={"TENTANG"}className='px-2 py-1'>Tentang</Link>
                    <Link to={"KONTAK"}className='px-2 py-1'>Kontak</Link>
                    </nav>



                  </div>
                )} 
              </div>
          </div>
        </div>

        {/*mobile*/} 
    </header>
  )
}

export default Header