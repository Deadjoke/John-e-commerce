
import React from 'react'
import { Table,  TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow,} from '_/components/ui/table'
import { Button } from '_/components/ui/button'
import { Input } from '_/components/ui/input'
import { CartResponseType, ItemType } from '../_types/item.type'
import { GetUserCart } from '../_services/cart.services'
import RemoveItemBtn from './RemoveItemBtn'
import ChangeCountBtn from './ChangeCountBtn'
import RemoveAllCart from './RemoveAllCart'
import Link from 'next/link'





export default async function Cartpage() {

  async function HandleGetUserCart():Promise<CartResponseType>{
   const res = await GetUserCart();
   return res;
  }


  const {numOfCartItems,products,totalCartPrice} =  await HandleGetUserCart()
  // console.log("products", products.length);
  
  return (
    <>
      <div className="cart">
        <h1 className='text-center my-3 text-4xl text-red-500 font-bold'>User Cart</h1>
         
    {products.length == 0 ? <h2 className='w-1/2 mx-auto text-3xl my-10 text-sky-500 font-bold'>Cart is Empty</h2>:
        <div className="w-3/4 flex justify-around mx-auto p-3  border-2 my-5 ">
          <div className="totals">
            <h2>You will Pay : <span className='text-blue-700 font-semibold'> {totalCartPrice} </span> L.E</h2>
            <h3>Number of Items: {numOfCartItems} </h3>
          </div>
          <div className="btns">
            <Link href={'/cart/payment'}> <Button className='cursor-pointer me-2'>Pay</Button></Link>
             <RemoveAllCart/>
          </div>
        </div>
    
    }

        <div className="w-3/4 mx-auto">
        <Table>
          <TableHeader> 
            <TableRow>
              <TableHead className="w-1/2">Products</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Count</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {products.map((item:ItemType)=>         
              <TableRow key={item._id}>
              <TableCell className="font-medium">
                <div className="">

                  <img className='w-full  max-w-[300px] max-h-64' src={item.product.imageCover} alt={item.product.title} />
                  <h3>{item.product.title}</h3>

                </div>
              
              </TableCell>
              <TableCell className=''>{item.price} L.E</TableCell>
              <TableCell className=''>{item.count}</TableCell>
              <TableCell className="text-right">

                <div className="">
                  <div className="flex gap-1 justify-center w-full items-center">
                    <ChangeCountBtn id={item.product.id} isInc={true} newCount={item.count+1}/>
                    <Input readOnly value={item.count} className='w-8 h-8 '/>
                    <ChangeCountBtn id={item.product.id} newCount={item.count-1}/>
                  </div>
                  <RemoveItemBtn  id={item.product.id}/>
                </div>

              </TableCell>
            </TableRow>
         )}

          </TableBody>
        </Table>
        </div>
      </div>
    </>
  )
}
