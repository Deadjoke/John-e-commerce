import React from 'react'
import { getAllCategories } from '../_services/categories.services'

export default async function page() {

  const categories = await getAllCategories();

  
  return (
    <div className="wrapper">
        <h1 className='text-4xl text-center mt-5 text-emerald-500 font-semibold'>All Categories</h1>
      <div className="grid w-full md:w-3/4 mx-auto my-12 grid-cols-1 md:grid-cols-3 gap-5">
        {categories?.map( category =>
        <div key={category._id} className="dark:bg-white cursor-pointer hover:shadow-lg transition duration-500  my-10 p-5 hover:shadow-emerald-500 rounded-lg ">
          <img className=' w-full h-80' src={category.image} alt="" />
          <p className='text-emerald-400 text-3xl text-center mt-3'>{category.name}</p>
        </div>)}
      </div>
    </div>
  )
}



