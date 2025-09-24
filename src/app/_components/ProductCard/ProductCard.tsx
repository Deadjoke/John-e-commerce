import React from 'react'
import { ProductCardProps } from './ProductCard.types';
import Link from 'next/link';
import AddProductBtn from '../AddProductBtn/AddProductBtn';


export default function ProductCard({product}:ProductCardProps) {
  return (
  <div className="dark:bg-white hover:shadow-lg my-5 p-5 hover:shadow-emerald-500 rounded-lg  group text-black">
<Link href={`/ProductDetails/${product.id}`}>
      <img className=' w-full' src={product.imageCover} alt="" />
      {/* <div className="wrapper"></div> */}
      <p className='text-emerald-400 mb-2'>{product.category.name}</p>
      <h2 className=''>{product.title.split(' ',2).join(' ')}</h2>
      <div className='flex justify-between'>
       <div className="left">
        <p className='text-gray-800'>Price: {product.priceAfterDiscount?<>
        <span className='text-emerald-600'>
        {product.priceAfterDiscount} <span className='text-black'> instead of </span>
        </span>
        <span className='line-through'>  {product.price}</span>
          </> :<span>{product.price}</span>} EGP</p>
       </div>
       <div className="right">
        <i className="fa-solid fa-star text-yellow-400"></i>
        <span>{product.ratingsAverage}</span>
       </div>
      </div> 
</Link>
      <div className="md:opacity-0 md:transition md:duration-500 md:group-hover:opacity-100">
      <AddProductBtn pid={product.id} w={'w-full'}/>
      </div>
  </div>
  )
}
