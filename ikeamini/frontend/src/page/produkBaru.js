import React, { useState } from 'react'
import {LuUpload} from 'react-icons/lu'
import { ImagetoBase64 } from '../utility/imagetoBase64'
import toast from 'react-hot-toast'

const Produkbaru = () => {

  const [data,setData] = useState({
    name : " ",
    category : " ",
    image : " ",
    price : " ",
    description : " ",
  })

  const handleOnChange = (e)=>{
      const {name,value} = e.target

      setData((preve)=>{
          return{
            ...preve,
            [name] : value
          }
      })
  }

  const uploadImage = async(e) =>{
    const data = await ImagetoBase64(e.target.files[0])
    //console.log(data)

    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    console.log(data)

    const{name,image,category,price} = data

    if(name && image && category && price){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,{
        method : "POST",
        headers :{
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  
      const fetchRes = await fetchData.json()
  
      console.log(fetchRes)
      toast(fetchRes.message)

      setData(()=>{
        return{
         name : " ",
         category : " ",
         image : " ",
         price : " ",
         description : " ",
        }
      })
    }else{
      toast("masukan dan isi kolom ")
    }
    
   
  }
  return (
    <div className="p-4">
      <form className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white" onSubmit={handleSubmit}>
        <label htmlFor='name'>Nama</label>
        <input type={"text"} name="name" className='bg-slate-300 p-1 my-1' onChange={handleOnChange} value={data.name}/> 

        <label htmlFor='category'>Kategori</label>
        <select className='bg-slate-300 p-1 my-1' id='category'name='category' onChange={handleOnChange}value={data.category}>
          <option value={"other"}>Pilih Kategori</option>
          <option value={"perabotan"}>Perabotan</option>
          <option value={"ruangkerja"}>Ruang kerja</option>
          <option value={"teras"}>Teras</option>
          <option value={"dapur"}>Dapur</option>
          <option value={"laundry"}>laundry</option>
        </select>

        <label htmlFor='image'>Gambar
        <div className='h-40 w-full bg-slate-300 rounded flex items-center justify-center cursor-pointer'>
            {
              data.image ? <img src={data.image} className='h-full'/> :  data.image ? <img src={data.image} className='h-full'/> :<span className='text text-5xl'><LuUpload/></span>
            }
            <span className='text text-5xl'><LuUpload/></span>
          
            <input type={"file"}id="image" onChange={uploadImage} className="hidden"/>
        </div>
        </label>
        

        <label htmlFor='price' className='my-1'>Harga</label>
       <input type={"text"} className='bg-slate-300 p-1 my-1'name='price'onChange={handleOnChange}value={data.price} />  

       <label htmlFor='description'>Deskripsi</label>
       <textarea rows={2} value ={data.description}className='bg-slate-300 p-1 my-1 resize-none'name='description'onChange={handleOnChange}></textarea>

       <button className='bg-blue-300 hover:bg-blue-500 text-yellow-200 text-lg font-medium my-2 drop-shadow'>Simpan</button>
      </form>
    </div>
  )
}

export default Produkbaru