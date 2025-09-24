import { ProductType } from "../_interfaces/products";
//All Product Function Logic Implementation
 export async function getAllProducts():Promise<ProductType[]|null>
    {
      try {
        //const cookie = await cookie();
        //console.log('token' , cookie.get('user-token')?.value)
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/products',{cache:"force-cache",next:{revalidate:60}});
        const Products = await res.json();
        return Products.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
//Product details Function Logic Implementation
export async function getSpecifiedProduct(id:string):Promise<ProductType|null>{
  try {
    const res =  await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`,{cache:'force-cache',next:{revalidate:60}});
    const finalres = await res.json();
    return finalres.data
  } catch (error) {
    return null;
  }
}

