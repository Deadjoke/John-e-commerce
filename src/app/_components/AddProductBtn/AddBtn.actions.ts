'use server'

import getUserToken from "_/utils/utils"
import { count } from "console";
import { revalidatePath, revalidateTag } from "next/cache";

export async function AddProductToCart(productId:string){
    const UserToken = await getUserToken();
    if (UserToken) {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
        method:'post',
        body:JSON.stringify({productId}),
        headers:{
            "Content-Type":"application/json",
            token:UserToken as string
        },
        
    });
    const finalRes = await res.json();
        // console.log("finalAddCart",finalRes);
        if (finalRes.status === "success") {
            // revalidatePath('/cart');
            revalidateTag('getUserCard');
            return finalRes.numOfCartItems;
        }else{
            return false;
        }
    }

}

export async function removeItemFromCart(id:string){
  const UserToken = await getUserToken();

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    method:"Delete",
    headers:{
        token: UserToken as string
    }
 })
 const final = await res.json();
//  console.log("removedfinalres",final);
 if (final.status === 'success') {
    revalidatePath('/cart');
    return final.numOfCartItems;
 }else{
    return null;
 }
 
}

export async function changeCount(id:string,count:number){
  const UserToken = await getUserToken();

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    method:"put",
    headers:{
        token: UserToken as string,
        "Content-Type":"application/json"
    },
    body:JSON.stringify({count})
 })
 const final = await res.json();
 console.log("Changefinalres",final);
 if (final.status === 'success') {
    revalidatePath('/cart');
    return final.numOfCartItems;
 }else{
    return null;
 }
 
}


export async function emptyUserCart(){
    const UserToken = await getUserToken();
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
        method:'delete',
        headers:{
            token:UserToken as string
        }
    })
    const final = await res.json();
    if (final.message === 'success') {
         revalidatePath('/cart');
        return true;
    }else{
        return false;
    }
    
}