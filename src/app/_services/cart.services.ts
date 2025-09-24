'use server'
import getUserToken from "_/utils/utils";
import { CartResponseType, ItemType } from "../_types/item.type";


export async function GetUserCart():Promise<CartResponseType>{
    const token =  await getUserToken();
    const res =  await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
      headers:{
        token:token as string,
      },
      cache:'force-cache',
      next:{tags:['getUserCard']}
    });
    const final = await res.json();
    console.log('herofinal',final);
    const {numOfCartItems,cartId,data:{products,totalCartPrice}} = final;
    return {numOfCartItems,products,totalCartPrice,cartId};
}