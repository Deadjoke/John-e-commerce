
'use server'
import getUserToken from "_/utils/utils"
import { revalidatePath } from "next/cache";
export type ShippingAddressType = {
    details:string,
    phone:string,
    city:string 
}
export async function createCashOrder(cartId:string,shippingAddress:ShippingAddressType) {
    const token = await getUserToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
        method:'POST',
        body:JSON.stringify({shippingAddress}),
        headers:{
            "Content-Type":"application/json",
            token:token as string,
        }
    })
   const final= await res.json();
//    console.log('cartCashOrder',final);
   if(final.status === 'success'){
    revalidatePath('/cart');
    return true;
   }else{
    return null;
   }
}


export async function createCheckoutSession(cartId:string,shippingAddress:ShippingAddressType) {
    const token = await getUserToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
        method:'POST',
        body:JSON.stringify({shippingAddress}),
        headers:{
            "Content-Type":"application/json",
            token:token as string,
        }
    })
   const final= await res.json();
   console.log('final create checkout',final);
   if(final.status === 'success'){
    // revalidatePath('/cart');
    return final.session.url;
   }else{
    return false;
   }
}