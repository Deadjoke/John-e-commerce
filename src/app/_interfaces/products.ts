export type CategoryType ={
    _id: string,
    name:string,
    slug:string,
    image: string
}

export type ProductType = {
    id:string,
    title:string,
    category:CategoryType,
    imageCover:string,
    price:number,
    description:string,
    priceAfterDiscount?: number,
    brand:BrandType,
    sold:number,
    ratingsQuantity:number,
    ratingsAverage:string
  }

export type BrandType ={
      _id: string,
      name:string,
      slug:string,
      image:string
}