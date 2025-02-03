import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

// Import Images
import Image from 'next/image';
import carimage1 from '@/assets/images/carimage1.png';
import carimage2 from '@/assets/images/carimage2.png';
import carimage3 from '@/assets/images/carimage3.png';

export default function CareerPageCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto ">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="my-8 "
      >
    
        <SwiperSlide>
          <Image
            src={carimage1}
            alt="Car Image 1"
            className="rounded-lg "
            layout="responsive"
            width={300}
            height={200}
          />
        </SwiperSlide>

       
        <SwiperSlide>
          <Image
            src={carimage2}
            alt="Car Image 2"
            className="rounded-lg"
            layout="responsive"
            width={300}
            height={200}
          />
        </SwiperSlide>

        
        <SwiperSlide>
          <Image
            src={carimage3}
            alt="Car Image 3"
            className="rounded-lg"
            layout="responsive"
            width={300}
            height={200}
          />
        </SwiperSlide>

       
        <SwiperSlide>
          <Image
            src={carimage1}
            alt="Car Image 4"
            className="rounded-lg"
            layout="responsive"
            width={300}
            height={200}
          />
        </SwiperSlide>

        
        <SwiperSlide>
          <Image
            src={carimage2}
            alt="Car Image 5"
            className="rounded-lg"
            layout="responsive"
            width={300}
            height={200}
          />
        </SwiperSlide>

       
        <SwiperSlide>
          <Image
            src={carimage3}
            alt="Car Image 6"
            className="rounded-lg"
            layout="responsive"
            width={300}
            height={200}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}












// import React from 'react'
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel";
//   import Image from 'next/image'
//   import carimage1 from '@/assets/images/carimage1.png'
//   import carimage2 from '@/assets/images/carimage2.png'
//   import carimage3 from '@/assets/images/carimage3.png'

// const CareerPageCarousel = () => {
//   return (
//     <div>
//         <Carousel>
//         <CarouselContent>
//           <CarouselItem  className="md:basis-1/2 lg:basis-1/3 my-12">
//           <div className='flex gap-32 items-center justify-center '>
//             <div className='w-[300px] h-[300px] overflow-hidden '>
//               <Image
//                 src={carimage1}
//                 alt="First Carousel Image"
//                 className="object-cover  w-full h-full"
//                 />
//             </div>
//             <div className='w-[300px] h-[300px] overflow-hidden rounded-lg' >
//                 <Image
//                 src={carimage2}
//                 alt="First Carousel Image"
//                 className="object-cover  w-full h-full "
//                 />
//             </div>
//             <div className='w-[500px] h-[700px] overflow-hidden rounded-lg'>
//                 <Image
//                 src={carimage3}
//                 alt="First Carousel Image" 
//                 className="object-cover  w-full h-full"
//                 />
//             </div>
//             </div>
//           </CarouselItem>
//           {/* <CarouselItem> 
//             <Image
//                 src={carimage1}
//                 alt="First Carousel Image"
//                 width={300} 
//                 height={300} 
//                 className="object-cover rounded-md"
//             />
//             </CarouselItem>
//           <CarouselItem>
//             <Image
//                 src={carimage1}
//                 alt="First Carousel Image"
//                 width={300} 
//                 height={300} 
//                 className="object-cover rounded-md"
//             />
//           </CarouselItem> */}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   )
// }

// export default CareerPageCarousel