// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import sliderPhoto1 from ".//images/desktop-image-hero-1.jpg";
import sliderPhoto2 from ".//images/desktop-image-hero-2.jpg";
import sliderPhoto3 from ".//images/desktop-image-hero-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slides = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
        <div className="flex flex-column">
          <img src={sliderPhoto1} className="basis-2/3" alt="Furniture" />
          <div className="p-5 basis-1/3">
            <h1> Discover innovative ways to decorate</h1>
            <p>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
              <br />
              <a href="/">Shop now</a>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-column">
          <img src={sliderPhoto2} className="basis-2/3" alt="Furniture" />
          <div className="p-5 basis-1/3">
            <h1> We are available all across the globe</h1>
            <p>
              With stores all over the world, it's easy for you to find
              furniture for your home or place of business. Locally, we’re in
              most major cities throughout the country. Find the branch nearest
              you using our store locator. Any questions? Don't hesitate to
              contact us today.
              <br />
              <a href="/">Shop now</a>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-column">
          <img src={sliderPhoto3} className="basis-2/3" alt="Furniture" />
          <div className="p-5 basis-1/3">
            <h1> Manufactured with the best materials</h1>
            <p>
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
              <br />
              <a href="/">Shop now</a>
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slides;
