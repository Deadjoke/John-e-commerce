'use server'
import getUserToken from "_/utils/utils";
import { ProductType } from "../_interfaces/products";

    export type WishlistResponseType = {
        status?:string,
        count:number,
        data:ProductType[]
    }
    
     export async function showAllWishlistItems():Promise<WishlistResponseType>{
        const token =  await getUserToken();
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist',{
            headers:{
                token:token as string,
            },
            cache:'force-cache',
            next:{tags:['getUserWishlist']}
        })
        const finalRes = await res.json();
        // console.log('finalwishlistpage',finalRes);
        const {count,data} = finalRes;
        return {count,data};
    }
