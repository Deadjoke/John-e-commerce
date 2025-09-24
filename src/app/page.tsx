import React, { lazy, Suspense } from 'react'
import ProductCard from './_components/ProductCard/ProductCard';
import { getAllProducts } from './_services/product.services';
import MySwiper from './_components/MySwiper/MySwiper';
import HomeSlider from './_components/HomeSlider/HomeSlider';
// import CatergoriesSlider from './_components/CategoriesSlider/CatergoriesSlider';

const CatergoriesSlider = lazy(()=>{return import('./_components/CategoriesSlider/CatergoriesSlider')})

export default async function Home() {

  const AllProducts = await getAllProducts();
//  console.log(AllProducts);
 
  

  return (
<>
  <HomeSlider/>
  <Suspense fallback={<h1>Loading......</h1>}>
  <CatergoriesSlider/>
  </Suspense>
  <div className="grid w-full md:w-3/4 mx-auto my-4 grid-cols-1 md:grid-cols-4 gap-5">
    {AllProducts?.map( product =>
      <ProductCard key={product.id} product={product} />)}
  </div>

</>
  )
}
