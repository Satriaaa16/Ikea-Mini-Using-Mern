import React from 'react'
import { FaKitchenSet } from 'react-icons/fa6'
const FilterProduct = ({category,onClick}) => {
  return (
    <div onClick={onClick}>
    <div className='flex flex-col items-center'>
      <div className='text-3xl p-5 bg-yellow-500 rounded-full cursor-pointer'>
        <FaKitchenSet />
      </div>
      <p className='text-center font-medium my-1 capitalize'>{category}</p>
    </div>
  </div>

  )
}

export default FilterProduct