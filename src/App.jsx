import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowRoundForward } from 'react-icons/io';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

import { EffectCards, Navigation, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <section>
      <div className='max-w-[1152px] mx-auto py-10 space-y-16'>
        {/* slider heading */}
        <div className='text-center'>
          <h1 className='text-5xl font-bold max-w-[710px] mx-auto'>
            Project Spotlight Shaping the Future with Azure.
          </h1>
        </div>

        {/* slider container */}
        <div>
          {/* image slider wrapper */}
          <div className='relative w-[580px] mx-auto'>
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
              // grabCursor={true}
              modules={[EffectCards, Navigation, Autoplay]}
              className='w-[480px] '
              cardsEffect={{ rotate: true, perSlideRotate: -10 }}
              navigation={{
                nextEl: '.nav-next',
                prevEl: '.nav-prev',
                enabled: true,
              }}
              // autoplay={{ delay: 3000 }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              initialSlide={0}
            >
              {/* slider 1 */}
              <SwiperSlide className=''>
                <img
                  src='/src/assets/img/slider-img-2.jpeg'
                  className='w-[480px] h-[620px] mx-auto object-cover object-right-top rounded-[24px]'
                />
              </SwiperSlide>
              {/* slider 2 */}
              <SwiperSlide className=''>
                <img
                  src='/src/assets/img/slider-img-1.jpeg'
                  className='w-[480px] h-[620px] mx-auto object-cover object-right-top rounded-[24px]'
                />
              </SwiperSlide>
              {/* slider 3 */}
              <SwiperSlide className=''>
                <img
                  src='/src/assets/img/slider-img-3.jpeg'
                  className='w-[480px] h-[620px] mx-auto object-cover object-right-top rounded-[24px]'
                />
              </SwiperSlide>
              {/* slider 4 */}
              <SwiperSlide className=''>
                <img
                  src='/src/assets/img/slider-img-4.jpeg'
                  className='w-[480px] h-[620px] mx-auto object-cover object-right-top rounded-[24px]'
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
