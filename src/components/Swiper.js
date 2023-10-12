import { useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import sliderPhoto1 from ".//images/desktop-image-hero-1.jpg";
import sliderPhoto2 from ".//images/desktop-image-hero-2.jpg";
import sliderPhoto3 from ".//images/desktop-image-hero-3.jpg";
import sliderPhoto1Mobile from ".//images/mobile-image-hero-1.jpg";
import sliderPhoto2Mobile from ".//images/mobile-image-hero-2.jpg";
import sliderPhoto3Mobile from ".//images/mobile-image-hero-3.jpg";
import right from ".//images/icon-angle-right.svg";
import left from ".//images/icon-angle-left.svg";
import arrow from ".//images/icon-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slides = () => {
  const swiperRef = useRef();

  return (
    <section id="swiper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop="true"
        id="swiper-wrapper"
      >
        <SwiperSlide>
          <div className="w-full desktop:w-7/12 relative">
            <img
              srcSet={`${sliderPhoto1Mobile} 320w, ${sliderPhoto1Mobile} 680w, ${sliderPhoto1}   960w, ${sliderPhoto1} 1980w`}
              src={sliderPhoto1}
              className="w-full"
              alt="Furniture"
            />
            <div className="swiper-navigation w-[19.4%] absolute bottom-0 right-0 desktop:-right-[19.4%] flex">
              <button
                className="w-6/12 flex py-4 lg:py-6 justify-center bg-black hover:bg-neutral-800 transition-all duration-200"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img src={left} className="w-3" alt="arrow left" />
              </button>
              <button
                className=" w-6/12 flex py-4 lg:py-6 justify-center bg-black hover:bg-neutral-900 transition-all duration-200"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img src={right} className="w-3" alt="arrow right" />
              </button>
            </div>
          </div>
          <div className="desktop:w-5/12 flex flex-col justify-center gap-4 px-8 py-10 desktop:py-0 desktop:px-[6%] desktop:pb-2">
            <h1 className="text-3xl desktop:text-[2.6rem] leading-7 font-bold desktop:leading-10">
              {" "}
              Discover innovative ways to decorate
            </h1>
            <p className="text-slate-900 opacity-75 my-6">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <a
              href="/"
              className="flex items-center gap-4 hover:gap-5 hover:opacity-75 transition-all duration-200 uppercase"
            >
              Shop now
              <img src={arrow} alt="arrow" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full desktop:w-7/12 relative">
            <img
              srcSet={`${sliderPhoto2Mobile} 320w, ${sliderPhoto2Mobile} 680w, ${sliderPhoto2}   960w, ${sliderPhoto2} 1980w`}
              src={sliderPhoto2}
              className="w-full"
              alt="Furniture"
            />
            <div className="swiper-navigation w-[19.4%] absolute bottom-0 right-0 desktop:-right-[19.4%] flex">
              <button
                className="w-6/12 flex py-4 lg:py-6 justify-center bg-black hover:bg-neutral-800 transition-all duration-200"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img src={left} className="w-3" alt="arrow left" />
              </button>
              <button
                className=" w-6/12 flex py-4 lg:py-6 justify-center bg-black hover:bg-neutral-900 transition-all duration-200"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img src={right} className="w-3" alt="arrow right" />
              </button>
            </div>
          </div>
          <div className="desktop:w-5/12 flex flex-col justify-center gap-4 px-8 py-10 desktop:py-0 desktop:px-[6%] desktop:pb-2">
            <h1 className="text-3xl desktop:text-[2.6rem] leading-7 font-bold desktop:leading-10">
              {" "}
              We are available all across the globe
            </h1>
            <p className="text-slate-900 opacity-75 my-6">
              With stores all over the world, it's easy for you to find
              furniture for your home or place of business. Locally, we’re in
              most major cities throughout the country. Find the branch nearest
              you using our store locator. Any questions? Don't hesitate to
              contact us today.
            </p>
            <a
              href="/"
              className="flex items-center gap-4 hover:gap-5 hover:opacity-75 transition-all duration-200 uppercase"
            >
              Shop now
              <img src={arrow} alt="arrow" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full desktop:w-7/12 relative">
            <img
              srcSet={`${sliderPhoto3Mobile} 320w, ${sliderPhoto3Mobile} 680w, ${sliderPhoto3}   960w, ${sliderPhoto3} 1980w`}
              src={sliderPhoto3}
              className="w-full"
              alt="Furniture"
            />
            <div className="swiper-navigation w-[19.4%] absolute bottom-0 right-0 desktop:-right-[19.4%] flex">
              <button
                className="w-6/12 flex py-4 lg:py-6 justify-center bg-black hover:bg-neutral-800 transition-all duration-200"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img src={left} className="w-3" alt="arrow left" />
              </button>
              <button
                className=" w-6/12 flex py-4 lg:py-6 justify-center bg-black hover:bg-neutral-900 transition-all duration-200"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img src={right} className="w-3" alt="arrow right" />
              </button>
            </div>
          </div>
          <div className="desktop:w-5/12 flex flex-col justify-center gap-4 px-8 py-10 desktop:py-0 desktop:px-[6%] desktop:pb-2">
            <h1 className="text-3xl desktop:text-[2.6rem] leading-7 font-bold desktop:leading-10">
              {" "}
              Manufactured with the best materials
            </h1>
            <p className="text-slate-900 opacity-75 my-6">
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
            </p>
            <a
              href="/"
              className="flex items-center gap-4 hover:gap-5 hover:opacity-75 transition-all duration-200 uppercase"
            >
              Shop now
              <img src={arrow} alt="arrow" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slides;
