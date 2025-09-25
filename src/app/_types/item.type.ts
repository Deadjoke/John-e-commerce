import { ProductType } from "../_interfaces/products"

export type ItemType ={
  count:number,
  _id:string,
  price:number,
  product:ProductType
}
export type CartResponseType = {
    cartId?:string,
    numOfCartItems:number,
    products:ItemType[],
    totalCartPrice:number,
}