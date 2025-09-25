'use client'
import { Button } from '_/components/ui/button'
import React from 'react'
import { removeFromWishlist } from '../_components/WishlistBtn/wishlist.action'
import { toast } from 'sonner';

export default function RemoveCartItem({id}:{id?:string}) {
   async function handleRemoveCartItem(){
    const res = await removeFromWishlist(id!);
    if(res === null){
        toast.error("An error occurred",{position:'top-center'});
    }else{
        toast.success("Removed from wishlist",{position:'top-center'});
    }
   }
  return (
    <Button onClick={handleRemoveCartItem} variant="destructive" className='cursor-pointer me-4'>Remove</Button>
  )
}
