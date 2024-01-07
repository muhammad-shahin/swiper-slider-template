import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowRoundForward } from 'react-icons/io';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

import { EffectCards, Navigation, Autoplay } from 'swiper/modules';
import { useState } from 'react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <section className=''>
      <div className='max-w-[1152px] mx-auto py-10 space-y-16 relative bg-white'>
        {/* image slider heading */}
        <div className='text-center'>
          <h1 className='text-5xl font-bold max-w-[710px] mx-auto'>
            Project Spotlight Shaping the Future with Azure.
          </h1>
        </div>

        {/* slider container */}
        <div className='relative'>
          {/* image slider wrapper */}
          <div
            className='relative w-[580px] mx-auto'
          >
            {/* navigation buttons */}
            <div className='flex justify-between items-center absolute top-[50%] left-0 z-[100] w-full'>
              <button className='nav-prev rotate-[-180deg]'>
                <IoIosArrowRoundForward />
              </button>
              <button className='nav-next'>
                <IoIosArrowRoundForward />
              </button>
            </div>
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
              // autoplay={{ delay: 3000 }}
              onSlideChange={(swiper) => console.log('slide change', swiper.activeIndex)}
              onSwiper={(swiper) => console.log(swiper.activeIndex)}
              initialSlide={currentSlide}
            >
              {/* image slider 1 */}
              <SwiperSlide className=''>
                <img
                  src='/src/assets/img/slider-img-2.jpeg'
                  className='w-[480px] h-[620px] mx-auto object-cover object-right-top rounded-[24px]'
                />
              </SwiperSlide>
              {/* image slider 2 */}
              <SwiperSlide className=''>
                <img
                  src='/src/assets/img/slider-img-1.jpeg'
                  className='w-[480px] h-[620px] mx-auto object-cover object-right-top rounded-[24px]'
                />
              </SwiperSlide>
              {/* image slider 3 */}
              <SwiperSlide className=''>
                <img
                  src='/src/assets/img/slider-img-3.jpeg'
                  className='w-[480px] h-[620px] mx-auto object-cover object-right-top rounded-[24px]'
                />
              </SwiperSlide>
              {/* image slider 4 */}
              <SwiperSlide className=''>
                <img
                  src='/src/assets/img/slider-img-4.jpeg'
                  className='w-[480px] h-[620px] mx-auto object-cover object-right-top rounded-[24px]'
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* content slider wrapper */}
          <div className='overflow-hidden absolute top-0 left-0 min-w-full h-full'>
            <div
              className='flex duration-300 min-w-full h-full'
              // style={{
              //   transform: `translateX(-${currentSlide * 100}%)`
              // }}
            >
              {/* content slide 1 */}
              <div className='min-w-full flex flex-col justify-between'>
                {/* sub heading & heading */}
                <div className='max-w-[450px] relative z-[100]'>
                  <p className='text-base font-medium open'>Brand Design</p>
                  <h2 className='text-5xl font-bold text-[#252E31]'>
                    Fashion B&E logo branding.
                  </h2>
                </div>
                {/* slider count & quote card */}
                <div className='flex justify-between items-end mb-4'>
                  <p className='font-bold text-3xl text-[#253029]'>
                    02/<span className='text-2xl'>04</span>
                  </p>

                  {/* quote card */}
                  <div className='p-6 rounded-lg shadow-xl bg-white max-w-[448px] flex justify-start items-center gap-4 z-[100]'>
                    <div>
                      <img
                        src='https://i.pravatar.cc/80?img=52'
                        className='rounded-full object-cover'
                      />
                    </div>
                    <div>
                      <p className='text-lg font-medium open'>
                        ”Simplicity that echoes, a memorable brand identity
                        representation.”
                      </p>
                      <p className='font-semibold text-xl text-[#253029]'>
                        - Albert Flores
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
