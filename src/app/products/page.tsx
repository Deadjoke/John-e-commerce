import Link from 'next/link';
import React from 'react'
import { getAllProducts } from '../_services/product.services';
import ProductCard from '../_components/ProductCard/ProductCard';

export default async function page() {
  const AllProducts = await getAllProducts();
return(
    <>
      <div className="grid w-3/4 mx-auto my-4 grid-cols-1 md:grid-cols-4 gap-5">
        {AllProducts?.map( product =>
          <ProductCard key={product.id} product={product} />)}
      </div>
    </>
)
}
