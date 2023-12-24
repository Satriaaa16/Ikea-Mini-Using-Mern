import React from 'react'
import { Link } from 'react-router-dom';
import { addCartItem } from '../redux/productSlide';
import { useDispatch } from 'react-redux';

const CardFeature = ({image,name,price,category,loading,id}) => {
   const dispatch = useDispatch()

   const handleAddCartProduct = (e)=>{
         dispatch(addCartItem(id))
         
   }
  return (
   <div className='w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex-col'>
     {
        image ? <>
               <Link to={`Menu/${id}`}>
                <div className='h-28 flex flex-col justify-center items-center'>
                    <img src={image} className='h-14'/>
                 </div>
                <h3 className='font-semibold text-slate-600 capitalize text-lg my-4 whitespace-nowrap overflow-hidden'>
                 {name}</h3>
                <p className=' text-slate-500 font-medium'>{category}</p>
                <p className='font-bold'>
                <span className='text-yellow-500'>Rp</span>
                <span>{price}</span>
                </p>
                <button className="bg-blue-500 px-3 py-2 rounded-md w-full " onClick={ ()=>handleAddCartProduct}>Beli Barang</button>
                </Link>
                </>
                 :(

                    <div className='min-h-[150px] flex justify-center items-center'>
                         <p>{loading}</p>
                    </div>
                 )}
        
                </div>
                 
  );
}

export default CardFeature