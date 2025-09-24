'use client'
import { Button } from '_/components/ui/button'
import React, { useContext } from 'react'
import { removeItemFromCart } from '../_components/AddProductBtn/AddBtn.actions'
import { CartContext } from '../_components/MySessionProvider/CartContext'
import { toast } from 'sonner'

export default function RemoveItemBtn({id}:{id:string}) {
    const {updateCartCount} = useContext(CartContext)
    async function handleRemoveItem(){
        const updatedCount =   await removeItemFromCart(id);
      
      if (updatedCount == null) {
        toast.error("couldn't remove item",{position:'top-center'});
    }else{
        
        toast.success("Item Delted Successfully",{position:'top-center'});
        updateCartCount(updatedCount);
      }
    }
  return (<>
    <Button onClick={handleRemoveItem} variant={'destructive'} className='w-full my-2 cursor-pointer'>Remove</Button>
  </>
  )
}
