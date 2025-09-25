
import { CategoryType } from "../_interfaces/products";

export async function getAllCategories():Promise<CategoryType[]|null> {
 try {
   const res =  await fetch('https://ecommerce.routemisr.com/api/v1/categories',{cache:'force-cache',next:{revalidate:60*60*24}});
   const category = await res.json();
   return category.data;
 } catch (error) {
    console.log('error : ' ,error);
    return null;
 }
     
}
