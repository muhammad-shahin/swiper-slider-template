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
  let currentWindowWidth = window.innerWidth;
  console.log(currentWindowWidth);
  const memoizedSliderData = useMemo(() => {
    return sliderData;
  }, [sliderData]);

  const {
    imageWidth,
    imageHeight,
    speed,
    autoPlay,
    contentSliderData,
    imageSliderData,
  } = memoizedSliderData;
  const imageSwiperRef = useRef(null);
  const contentSwiperRef = useRef(null);
  const imageSliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      // Set the width and height based on screen size
      if (imageSliderRef.current) {
        if (windowWidth < 576) {
          imageSliderRef.current.style.width = '220px';
          imageSliderRef.current.style.height = '380px';
        } else if (windowWidth >= 576 && windowWidth < 768) {
          imageSliderRef.current.style.width = '330px';
          imageSliderRef.current.style.height = '450px';
        } else if (windowWidth >= 768 && windowWidth < 1240) {
          imageSliderRef.current.style.width = '380px';
          imageSliderRef.current.style.height = '500px';
        } else {
          imageSliderRef.current.style.width = `${imageWidth}px`;
          imageSliderRef.current.style.height = `${imageHeight}px`;
        }
      }
    };
    // Initial setup
    handleResize();
    // Event listener for window resize
    window.addEventListener('resize', handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // handle image slider change to control content slider
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

  // css styles

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
              {contentSliderData?.map((slide, index) => (
                <SwiperSlide key={'content slide' + index}>
                  <div className='slider-content-wrapper no-touch slider-content'>
                    {/* sub heading & heading */}
                    <div className='sub-heading-and-heading'>
                      <p className='open'>{slide.text}</p>
                      <h2>{slide.title}</h2>
                    </div>

                    {/* slider counter & review card  */}
                    <div className='review-card-slider-wrapper'>
                      <p>
                        0{index + 1}/<span>{contentSliderData?.length}</span>
                      </p>

                      {/* review card */}
                      {slide.card}
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
              initialSlide={1}
              ref={imageSliderRef}
            >
              {/* image slides */}
              {imageSliderData?.map((slide, index) => (
                <SwiperSlide key={'img slide ' + index}>
                  <img
                    src={slide.imageLink}
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
