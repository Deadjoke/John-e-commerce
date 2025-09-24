// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 

// Import Swiper styles
import 'swiper/css';
 export type swiperType = {
    src:string,
    alt:string
}
export default function MySwiper({imagesList,slidesPerView=1,spaceBetween = 10,FromCat=false}:
    {
        imagesList:swiperType[],
        spaceBetween?:number,
        slidesPerView?:number,
        FromCat?:boolean,
    }
) {
  return (
    <Swiper className='h-full'
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 2000, // 1 second
        disableOnInteraction: false, // keeps autoplaying even after user swipes
      }}
       breakpoints={{
       0: {         // mobile
        slidesPerView: 1,
        spaceBetween: 10,
       },
       640: {       // sm
        slidesPerView: 2,
        spaceBetween: 15,
       },
       1024: {      // lg
        slidesPerView: slidesPerView, // use your prop (6 for categories)
        spaceBetween: spaceBetween,
       },
  }}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      {imagesList.map(img =><SwiperSlide className='cursor-pointer' key={img.src}>
        <img className='w-full h-[400px]' src={img.src} alt={img.alt} />
        {FromCat && <h3 className='text-3xl'>{img.alt}</h3>}
      </SwiperSlide>)}
    </Swiper>
  );
};