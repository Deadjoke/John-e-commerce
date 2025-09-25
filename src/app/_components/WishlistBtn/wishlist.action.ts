'use server'
import getUserToken from "_/utils/utils";
import { revalidatePath } from "next/cache";

export type WishlistResponseType = {
    status?:string,
    message?: string,
    data:string[]
}

 export async function addToWishlist(productId:string):Promise<WishlistResponseType|null>{
    const token =  await getUserToken();
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist',{
        method:'post',
        body:JSON.stringify({productId}),
        headers:{
            "Content-Type":"application/json",
            token:token as string,
        }
    })
    const finalRes = await res.json();
    // console.log('finalwishlist',finalRes);
    if (finalRes.status === 'success') {
        revalidatePath('/wishlist');
        return {data: finalRes.data};
    }else{
        return null;
    }
}

export async function removeFromWishlist(productId:string){
    const token =  await getUserToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
        method:'DELETE',
        headers:{
            token:token as string,
        }
    })
    const finalRes = await res.json();
    console.log('finalremovewishlist',finalRes);
    if (finalRes.status === 'success') {
        revalidatePath('/wishlist');
        return true;
    }else{
        return null;
    }
    

}