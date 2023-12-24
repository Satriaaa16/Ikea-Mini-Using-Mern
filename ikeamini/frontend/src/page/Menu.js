import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Menu = () => {
  const {filterby}= useParams()
  const productData = useSelector(state => state.product.productList)
  
  
  const productDisplay = productData.filter(el => el._id === filterby)[0]
  console.log(productDisplay)
  
  
  return (
    <div>
      <div className='p-2 md:p-4 ' >
        <div className='w-full bg-white m-auto rounded md:flex'>
        <div className='max-w-lg bg-white overflow-hidden w-full '>
          <img src={productDisplay.image} alt="Product" className='hover:scale-105 cursor-pointer transition-all' />
        </div>
        <div className='flex flex-col gap-1'>
           <h3 className='font-semibold text-slate-600  capitalize text-2x md:text-4xl'>
                {productDisplay.name}</h3>
                <p className=' text-slate-500 font-medium md:text-2xl'>{productDisplay.category}</p>
                <p className=' font-bold'>
               <span className='text-yellow-500'>Rp</span>
               <span>{productDisplay.price}</span>
            </p>
            <div className='flex gap-3'>
                  <button className='bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-500 min-w-[100px] w-full'>Beli Barang</button>
                  <button className='bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-500 min-w-[100px] w-full'>Masukan keranjang</button>
                  <button className='bg-yellow-500 py-1 mt-2 rounded  hover:bg-yellow-500 min-w-[100px] w-full'>Masukan daftar suka</button>

            </div>
            <div>
              <p className='tex-slate-600 font-medium'>Description : </p>
              <p>{productDisplay.description}</p>
            </div>
        </div>
        </div>
       </div>
      </div>
    
  )
}

export default Menu