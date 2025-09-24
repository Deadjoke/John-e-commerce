'use client';
import { Button } from '_/components/ui/button';
import { cn } from '_/lib/utils';
import React, { useContext } from 'react';
import { AddProductToCart } from './AddBtn.actions';
import { toast } from 'sonner';
import { CartContext } from '../MySessionProvider/CartContext';


export default function AddProductBtn({w,pid}:{w:string,pid:string}) {
    const {updateCartCount} = useContext(CartContext);
    async function handleAddToCart(){
    const proCount =  await AddProductToCart(pid);
        if (proCount) {
            toast.success("Product Added Successfully",{position:'top-center'})
            updateCartCount(proCount)
        }else{
             toast.error("Error occurred while adding",{position:'top-center'})
        }

    }
  return (
    <Button onClick={handleAddToCart} className={cn(w, "bg-emerald-500 my-3 cursor-pointer")}>Add to Cart</Button>
  )
}
