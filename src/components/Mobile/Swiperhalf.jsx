import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules


const Swiperhalf = () => {
  return (
    <div className='container-fluid'>
    <div className='swiperhalf'>
       <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
      
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="./img/image2.png" class="d-block w-100" alt="..." />
<div className='fixedtitle'>
    salad
</div>
        </SwiperSlide>
        <SwiperSlide>
        <img src="./img/image2.png" class="d-block w-100" alt="..." />
<div className='fixedtitle'>
    salad
</div>
        </SwiperSlide>
        <SwiperSlide>
        <img src="./img/image2.png" class="d-block w-100" alt="..." />
<div className='fixedtitle'>
    salad
</div>
        </SwiperSlide>
        <SwiperSlide>
        <img src="./img/image2.png" class="d-block w-100" alt="..." />
<div className='fixedtitle'>
    salad
</div>
        </SwiperSlide>
    
      </Swiper>
    </div>
    </div>
  )
}

export default Swiperhalf


