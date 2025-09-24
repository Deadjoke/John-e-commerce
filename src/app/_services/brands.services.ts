import { BrandType } from "../_interfaces/products";

export async function getAllBrands():Promise<BrandType[]|null> {
 try {
   const res =  await fetch('https://ecommerce.routemisr.com/api/v1/brands',{cache:'force-cache',next:{revalidate:60*60*24}});
   const Brands = await res.json();
   return Brands.data;
 } catch (error) {
    console.log('error : ' ,error);
    return null;
 }
     
}