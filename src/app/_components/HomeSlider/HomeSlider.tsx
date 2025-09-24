import React from 'react'
import MySwiper from '../MySwiper/MySwiper'
import Image from 'next/image'
import cokieImg from '@images/slider-image-3.jpeg'
import groceryImg from '@images/slider-image-1.jpeg'
import groceryImg2 from '@images/slider-2.jpeg'
import redvelvetImg from '@images/slider-image-2.jpeg'
import panner1 from '@images/grocery-banner.png'
import panner2 from '@images/grocery-banner-2.jpeg'

export default function HomeSlider() {
const staticImagesSlider=[
  {src:cokieImg.src,alt:'cookies'},
  {src:redvelvetImg.src,alt:'grocery'},
  {src:panner2.src,alt:'groceries'},
]
  return (
  <div className='w-full md:w-3/4 flex flex-wrap mx-auto my-5'>
    <div className="w-full md:w-3/4 ">
     <MySwiper imagesList={staticImagesSlider}/>
    </div>
    <div className="w-full flex md:block mx-auto md:w-1/4">
      <Image className='w-1/2 md:w-full h-[200px]' src={groceryImg2} alt="grocry" />
      <Image className='w-1/2 md:w-full h-[200px]' src={groceryImg} alt="vegie" />
    </div>
  </div>
  )
}
