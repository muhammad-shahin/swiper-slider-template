import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import PropTypes from 'prop-types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import { EffectCards, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useMemo, useRef, useState } from 'react';

const App = ({ sliderData }) => {
  const memoizedSliderData = useMemo(() => {
    return sliderData;
  }, [sliderData]);

  const { loopSlider, contentSliderData, imageSliderData } = memoizedSliderData;
  console.log(memoizedSliderData);
  const [currentSlide, setCurrentSlide] = useState(1);
  const imageSwiperRef = useRef(null);
  const contentSwiperRef = useRef(null);

  const handleImageSliderChange = (swiper) => {
    if (contentSwiperRef.current) {
      contentSwiperRef.current.slideTo(swiper.activeIndex);

      // Add fade-up-animation class to all slider content divs
      const contentSlides = document.querySelectorAll(
        '.slider-content-wrapper'
      );
      contentSlides.forEach((slide, index) => {
        // Add the class only to the active slide, remove from others
        if (index === swiper.activeIndex) {
          slide.classList.add('fade-up-animation');
        } else {
          slide.classList.remove('fade-up-animation');
        }
      });
    }
  };

  return (
    <section>
      <div className='section-wrapper'>
        <div className='slider-wrapper'>
          {/* content slider wrapper */}
          <div className='no-touch'>
            <Swiper
              slidesPerView={1}
              modules={[EffectFade]}
              effect='fade'
              fadeEffect={{ crossFade: true }}
              onSwiper={(swiper) => (contentSwiperRef.current = swiper)}
              noSwiping={true}
              noSwipingClass='no-touch'
            >
              {[1, 2, 3, 4].map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className='slider-content-wrapper no-touch slider-content'>
                    {/* sub heading & heading */}
                    <div className='sub-heading-and-heading'>
                      <p className='open'>Brand Design {slide}</p>
                      <h2>Fashion B&E logo branding {slide}</h2>
                    </div>

                    {/* slider counter & review card  */}
                    <div className='review-card-slider-wrapper'>
                      <p>
                        0{slide}/<span>04</span>
                      </p>

                      {/* review card */}
                      <div className='review-card'>
                        <div>
                          <img src={`https://i.pravatar.cc/80?img=${slide}`} />
                        </div>
                        <div>
                          <p className='review'>
                            ”Simplicity that echoes, a memorable brand identity
                            representation.” {slide}
                          </p>
                          <p className='reviewer-name'>
                            - Albert Flores {slide}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* image slider wrapper */}
          <div className='image-slider-wrapper'>
            {/* navigation buttons */}
            <button className='nav-prev'>
              <IoIosArrowRoundForward />
            </button>
            <button className='nav-next'>
              <IoIosArrowRoundForward />
            </button>

            {/* image slider */}
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Navigation, Autoplay]}
              className='image-slider touch'
              cardsEffect={{ rotate: true, perSlideRotate: -10 }}
              navigation={{
                nextEl: '.nav-next',
                prevEl: '.nav-prev',
                enabled: true,
              }}
              onSlideChange={handleImageSliderChange}
              onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
              allowTouchMove={true}
              autoplay={{ delay: 3000 }}
              controller={{ control: contentSwiperRef.current }}
            >
              {/* image slides */}
              {[1, 2, 3, 4].map((slide, index) => (
                <SwiperSlide key={'img slide ' + index}>
                  <img
                    src={`/slider-img-${slide}.jpeg`}
                    className='card-image'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

App.propTypes = {
  sliderData: PropTypes.object,
};

export default App;
