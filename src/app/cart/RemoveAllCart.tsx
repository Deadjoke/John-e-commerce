'use client'
import { Button } from '_/components/ui/button'
import React, { useContext } from 'react'
import { emptyUserCart } from '../_components/AddProductBtn/AddBtn.actions'
import { toast } from 'sonner';
import { CartContext } from '../_components/MySessionProvider/CartContext';


export default function RemoveAllCart() {
    const {updateCartCount} = useContext(CartContext)
    async function handleEmptyCart(){
     const isDeleted =  await emptyUserCart();
        if (isDeleted === false) {
            toast.error("Cart is Empty",{position:'top-center'});
           
        }else{
            toast.success("Cart is Emptied",{position:'top-center'});
            updateCartCount(0);
        }
    }

  return (
    <Button onClick={handleEmptyCart} variant={'destructive'} className='cursor-pointer'>Remove All</Button>
  )
}
