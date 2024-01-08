import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowRoundForward } from 'react-icons/io';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import { EffectCards, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const imageSwiperRef = useRef(null);
  const contentSwiperRef = useRef(null);

  const handleImageSliderChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);

    // Get the current slide index
  const activeIndex = swiper.activeIndex;
    // Trigger the animation manually for the current slide
  const contentSlider = document.querySelectorAll('.slider-content')[activeIndex];
  contentSlider.classList.remove('fade-up-animation');

  // Triggering reflow
  void contentSlider.offsetWidth;

  contentSlider.classList.add('fade-up-animation');
  };

  useEffect(() => {
    // Add the animation class when the component mounts
    const contentSlider = document.querySelector('.slider-content');
    contentSlider.classList.add('fade-up-animation');
    console.log('Animation class added');
  }, []);
  

  useEffect(() => {
    // When the component mounts or currentSlide changes, go to the initial slide
    if (imageSwiperRef.current && imageSwiperRef.current.slideTo) {
      imageSwiperRef.current.slideTo(currentSlide);
    }
    if (contentSwiperRef.current && contentSwiperRef.current.slideTo) {
      contentSwiperRef.current.slideTo(currentSlide);
    }
  }, [currentSlide]);

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
              initialSlide={currentSlide}
              controller={{ control: imageSwiperRef.current }}
              noSwiping={true}
              noSwipingClass='no-touch'
              className=''
            >
              {[1, 2, 3, 4].map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className='slider-content-wrapper no-touch slider-content fade-up-animation'>
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
              onSwiper={(swiper) => console.log(swiper)}
              initialSlide={currentSlide}
              allowTouchMove={true}
              autoplay={true}
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
}
