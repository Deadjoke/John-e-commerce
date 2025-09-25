import getUserToken from '_/utils/utils';
import { Table,  TableBody,TableCell,TableHead,TableHeader,TableRow,} from '_/components/ui/table'
import React from 'react'
import { showAllWishlistItems } from './wishlist.servies';
import RemoveCartItem from './RemoveCartItem';
import AddProductBtn from '../_components/AddProductBtn/AddProductBtn';


export default async function page() {
    async function handleGetWishlist(){
     const res = await showAllWishlistItems();
     return res;
    }
     
     const {count,data} =  await handleGetWishlist()

     
  return (
    <>
    <div className='w-3/4 mx-auto my-10'>
        <h1 className='text-3xl font-bold text-center my-5 text-red-500'>User Wishlist</h1>
        <h2 className='text-xl font-semibold text-center my-5 text-sky-500'>Number of Products in Wishlist is : {count}</h2>
    </div>
    <div className="w-3/4 mx-auto">
     <Table>
       <TableHeader>
         <TableRow>
           <TableHead className="w-[100px]">Product</TableHead>
           <TableHead>Price</TableHead>
           <TableHead>Category</TableHead>
           <TableHead className="text-right">Actions</TableHead>
         </TableRow>
       </TableHeader>
       <TableBody>
        {data.map(product=>
         <TableRow key={product.id}>
           <TableCell className="font-medium w-1/2">
                <div className="">

                  <img className='w-full  max-w-[300px] max-h-64' src={product.imageCover} alt={product.title} />
                  <h3>{product.title.split(' ',2).join(' ')}</h3>

                </div>
           </TableCell>
           <TableCell>
            {product.price} L.E
           </TableCell>
           <TableCell>{product.category.name}</TableCell>
           <TableCell className="text-right">
            <span className="me-2">
              <AddProductBtn pid={product.id} />
            </span>
              <RemoveCartItem id={product.id}/>
           </TableCell>
         </TableRow>
        )}
       </TableBody>
     </Table>
    
    </div>
    </>
  )
}
