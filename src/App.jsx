import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowRoundForward } from 'react-icons/io';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

import { EffectCards, Navigation, Autoplay, Controller } from 'swiper/modules';
import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageSwiperRef = useRef(null);
  const contentSwiperRef = useRef(null);

  const handleImageSliderChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
    // Manually control the content slider
    if (contentSwiperRef.current && contentSwiperRef.current.slideTo) {
      contentSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };

  useEffect(() => {
    if (imageSwiperRef.current && imageSwiperRef.current.slideTo) {
      imageSwiperRef.current.slideTo(currentSlide);
    }
    if (contentSwiperRef.current && contentSwiperRef.current.slideTo) {
      contentSwiperRef.current.slideTo(currentSlide);
    }
  }, [currentSlide]);

  return (
    <section className=''>
      <div className='max-w-[1152px] mx-auto py-10 space-y-16 relative bg-white'>
        {/* slider heading */}
        <div className='text-center'>
          <h1 className='text-5xl font-bold max-w-[710px] mx-auto'>
            Project Spotlight Shaping the Future with Azure.
          </h1>
        </div>

        {/* sub-heading & heading slider container */}
        <div className='relative'>
          {/* content slider wrapper */}
          <Swiper
            slidesPerView={1}
            onSwiper={(swiper) => (contentSwiperRef.current = swiper)}
            initialSlide={currentSlide}
            controller={{ control: imageSwiperRef.current }}
          >
            {[1, 2, 3, 4].map((slide, index) => (
              <SwiperSlide
                key={index}
                className='min-w-full py-2'
              >
                {/* sub heading & heading */}
                <div className='max-w-[450px]'>
                  <p className='text-base font-medium open'>
                    Brand Design {slide}
                  </p>
                  <h2 className='text-5xl font-bold text-[#252E31]'>
                    Fashion B&E logo branding {slide}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* image slider wrapper */}
          <div className='relative w-[580px] mx-auto translate-y-[-100px]'>
            {/* navigation buttons */}
            <div className='flex justify-between items-center absolute top-[50%] left-0 z-[100] w-full'>
              <button className='nav-prev rotate-[-180deg]'>
                <IoIosArrowRoundForward />
              </button>
              <button className='nav-next'>
                <IoIosArrowRoundForward />
              </button>
            </div>

            {/* image slider */}
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Navigation, Autoplay]}
              className='w-[480px]'
              cardsEffect={{ rotate: true, perSlideRotate: -10 }}
              navigation={{
                nextEl: '.nav-next',
                prevEl: '.nav-prev',
                enabled: true,
              }}
              onSlideChange={handleImageSliderChange}
              onSwiper={(swiper) => console.log(swiper)}
              initialSlide={currentSlide}
            >
              {/* image slides */}
              {[1, 2, 3, 4].map((slide, index) => (
                <SwiperSlide key={'img slide ' + index}>
                  <img
                    src={`/src/assets/img/slider-img-${slide}.jpeg`}
                    className='w-[480px] h-[620px] mx-auto object-cover object-right-top rounded-[24px]'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
