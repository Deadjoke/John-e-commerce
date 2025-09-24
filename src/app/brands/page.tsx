import React from 'react'
import { getAllBrands } from '../_services/brands.services'

export default async function page() {
  
  const Brands = await getAllBrands();
  return (
    <div className="wrapper">
        <h1 className='text-4xl text-center mt-5 text-emerald-500 font-semibold'>All Brands</h1>
      <div className="grid w-full md:w-3/4 mx-auto my-12 grid-cols-1 md:grid-cols-4 gap-3">
        {Brands?.map( Brand =>
        <div key={Brand._id} className="dark:bg-white cursor-pointer hover:shadow-lg transition duration-500  my-10 p-3 hover:shadow-gray-500 rounded-lg ">
          <img className=' w-full h-48' src={Brand.image} alt="" />
          <p className='text-emerald-400 text-3xl text-center mt-3'>{Brand.name}</p>
        </div>)}
      </div>
    </div>
  )
}
