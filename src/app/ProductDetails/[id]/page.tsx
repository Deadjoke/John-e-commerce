import AddProductBtn from '_/app/_components/AddProductBtn/AddProductBtn';
import { getSpecifiedProduct } from '_/app/_services/product.services';
import { Button } from '_/components/ui/button';
import { log } from 'console';
import React from 'react'
export type ProductDetailsProps ={
  params: Promise<{ id: string }>
} 
export default async function ProductDetails({params}:ProductDetailsProps) {
    const { id } = await params; // 👈 await here
    const product = await getSpecifiedProduct(id);
    if (!product) {
      return;
    }
  return (
    <div className='grid grid-cols-4 w-11/12 m-auto gap-4 items-center'>
      <div className="col-span-4 md:col-span-1">
        <img src={product?.imageCover} className='w-full ' alt={product?.title} />
      </div>
      <div className="col-span-4 w-full md:col-span-3 p-4 md:w-3/4 mx-auto">
        <p>Brand: {product?.brand.name}</p>
        <h1 className='text-3xl md:text-5xl font-bold'>{product?.title}</h1>
        <h3 className='text-sky-400 md:text-2xl my-2 md:my-4'>{product?.category.name}</h3>
        <p>{product?.description}</p>
        <div className="halfway flex justify-between my-3">
        <div className="left-side">
        <p className='text-gray-800  md:text-3xl'>Price: {product?.priceAfterDiscount?<>
              <span className='text-emerald-600'>
              {product.priceAfterDiscount} <span className='text-black'> instead of </span>
              </span>
              <span className='line-through'>  {product.price}</span>
        </> :<span>{product?.price}</span>} EGP
        </p>
        </div>
        <div className='rigt-side'>
          <p className=''>
            <i className="fa-solid fa-star text-yellow-400"></i>
            {product?.ratingsAverage}
          </p>
          <p>
          {product?.ratingsQuantity ? product?.ratingsQuantity: 0}  Reviews
          </p>
        </div>
        </div>
        <AddProductBtn pid={product?.id} w={'w-44'}/>

      </div>
    </div>
  )
}
