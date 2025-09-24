import { getAllCategories } from '_/app/_services/categories.services'
import React from 'react'
import MySwiper, { swiperType } from '../MySwiper/MySwiper'

export default async function CatergoriesSlider() {
    
    const allCategories =  await getAllCategories()
   const imgArr: swiperType[] = allCategories ? allCategories.map(category => ({
      src: category.image,
      alt: category.name
    }))
: []

    return (
    <div>
        <MySwiper FromCat={true} imagesList={imgArr} slidesPerView={6}/>
    </div>
  )
}