'use client'
import { Button } from '_/components/ui/button'
import React, { useEffect, useState } from 'react'
import { addToWishlist } from './wishlist.action'
import { toast } from 'sonner'
import { showAllWishlistItems } from '_/app/wishlist/wishlist.servies'

export default function AddWishlistBtn({pid}:{pid:string}) {
    const [isAdded,setIsAdded] =  useState<boolean>(false);
    async function handleAddToWishList(){
        const res =  await addToWishlist(pid);
        console.log('amtheressss',res);
        
        if(res == null){
            toast.error("An error occurred",{position:'top-center'});
        }else {
            toast.success("Added to wishlist",{position:'top-center'});
        }
    }


// useEffect(() => {
//   async function checkIfInWishlist() {
//     const res = await showAllWishlistItems(); 
//     const wishlistIds = res.data; 
//   }
// }, []);
    
    
  return (
     <Button onClick={handleAddToWishList} variant="ghost" className='p-0 m-0 cursor-pointer text-2xl'><i className="fa-solid fa-heart"></i></Button>
  )
}
