'use client'
import { Button } from '_/components/ui/button'
import { Input } from '_/components/ui/input'
import { Label } from '_/components/ui/label'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { createCashOrder, createCheckoutSession } from './Order.action'
import { GetUserCart } from '_/app/_services/cart.services'
import { CartContext } from '_/app/_components/MySessionProvider/CartContext'
import { toast } from 'sonner'

export default function Payment() {
  const cityInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const detailsInput = useRef<HTMLInputElement>(null);
  const [cartUserId, setcartUserId] = useState<null|string>(null);

  const {updateCartCount} = useContext(CartContext);

  async function handleGettingUserCart(){
    const res =  await GetUserCart();
    setcartUserId(res.cartId as string);
  }
  useEffect(()=>{
    handleGettingUserCart();
  },[])

   async function makeCashOrder(){
    const address = {
        city:cityInput.current?.value as string,
        phone:phoneInput.current?.value as string,
        details:detailsInput.current?.value as string,
    }
    const isSuccessed = await createCashOrder(cartUserId as string,address);
    if (isSuccessed){
        updateCartCount(0);
        if(cityInput.current) cityInput.current.value = '';
        if(phoneInput.current) phoneInput.current.value = '';
        if(detailsInput.current) detailsInput.current.value = '';
        toast.success('Order Created Successfully, You will pay on delivery',{position:'top-center'});
    }
  }




   async function makeOnlineOrder(){
    const address = {
        city:cityInput.current?.value as string,
        phone:phoneInput.current?.value as string,
        details:detailsInput.current?.value as string,
    }
    const res =  await createCheckoutSession(cartUserId as string,address);
    if(res == false){
      toast.error('Error in creating session',{position:'top-center'});
    }else{
      window.open(res,'_self');
    }
   }





  return (
    <>
    <div className='w-1/2 mx-auto'>

        <div className="my-3">
          <Label>City</Label>
          <Input className='mt-3' ref={cityInput} />
        </div>

        <div className="my-3">
          <Label>Phone </Label>
          <Input className='mt-3' ref={phoneInput} type='tel'/>
        </div>

        <div className="my-3">
          <Label>Details</Label>
          <Input className='mt-3' ref={detailsInput} />
        </div>

        <Button onClick={makeCashOrder} className='cursor-pointer mt-3'>Make Cash Order</Button>
        <Button onClick={makeOnlineOrder} variant={'secondary'} className='cursor-pointer ms-3 mt-3'>Make Card Order</Button>
    </div>
    </>
  )
}
