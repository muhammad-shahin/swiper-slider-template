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
  const cardSwiperRef = useRef(null);

  const handleImageSliderChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
    // Manually control the content slider
    if (contentSwiperRef.current && contentSwiperRef.current.slideTo) {
      contentSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };

  useEffect(() => {
    // When the component mounts or currentSlide changes, go to the initial slide
    if (imageSwiperRef.current && imageSwiperRef.current.slideTo) {
      imageSwiperRef.current.slideTo(currentSlide);
    }
    if (contentSwiperRef.current && contentSwiperRef.current.slideTo) {
      contentSwiperRef.current.slideTo(currentSlide);
    }
    if (cardSwiperRef.current && cardSwiperRef.current.slideTo) {
      cardSwiperRef.current.slideTo(currentSlide);
    }
  }, [currentSlide]);

  return (
    <section>
      <div className='section-wrapper'>
        {/* slider heading */}
        <div className='section-heading'>
          <h1>Project Spotlight Shaping the Future with Azure.</h1>
        </div>

        <div className='content-slider-wrapper'>
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
            >
              {[1, 2, 3, 4].map((slide, index) => (
                <SwiperSlide key={index}>
                  {/* sub heading & heading */}
                  <div className='sub-heading-and-heading'>
                    <p className='open'>Brand Design {slide}</p>
                    <h2>Fashion B&E logo branding {slide}</h2>
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
              className='image-slider'
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
                    src={`/slider-img-${slide}.jpeg`}
                    className='card-image'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* review card slider */}
          <div className='no-touch'>
            <Swiper
              slidesPerView={1}
              modules={[EffectFade]}
              effect='fade'
              fadeEffect={{ crossFade: true }}
              onSwiper={(swiper) => (cardSwiperRef.current = swiper)}
              initialSlide={currentSlide}
              controller={{ control: imageSwiperRef.current }}
              noSwiping={true}
              noSwipingClass='no-touch'
            >
              {[1, 2, 3, 4].map((slide, index) => (
                <SwiperSlide key={index}>
                  {/* slider count & quote card */}
                  <div className='review-card-slider-wrapper'>
                    <p>
                      0{slide}/<span>04</span>
                    </p>

                    {/* quote card */}
                    <div className='quote-card'>
                      <div>
                        <img src={`https://i.pravatar.cc/80?img=${slide}`} />
                      </div>
                      <div>
                        <p className='quote'>
                          ”Simplicity that echoes, a memorable brand identity
                          representation.” {slide}
                        </p>
                        <p className='author-name'>- Albert Flores {slide}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
