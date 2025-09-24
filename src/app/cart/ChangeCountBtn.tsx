'use client'
import { Button } from '_/components/ui/button'
import React, { useContext } from 'react'
import { changeCount } from '../_components/AddProductBtn/AddBtn.actions'
import { toast } from 'sonner';
import { CartContext } from '../_components/MySessionProvider/CartContext';

export default function ChangeCountBtn({isInc = false,id,newCount}:{isInc?:boolean;id:string;newCount:number}) {
    const {updateCartCount} = useContext(CartContext)
    
    async function handleChangeCount(){
      const output =  await changeCount(id,newCount);
      if (output === null) {
        toast.error("Error occurred please Try again ",{position:'top-center'});
      }else{
        toast.success(`Product count is: ${newCount}`,{position:'top-center'});
        updateCartCount(output);
    }
    }
  return (
    <Button onClick={handleChangeCount} disabled={newCount == 0 } className='cursor-pointer'>{isInc?'+':'-'}</Button>
  )
}
