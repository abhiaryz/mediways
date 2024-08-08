import { CarouselData } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2, // Default for desktop
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 3000, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Desktop
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Tablet
      { breakpoint: 464, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Mobile
    ],
  };
  return (
    <section className="h-full w-full overflow-x-hidden overflow-y-hidden">
      <Slider {...settings}>
        {CarouselData.map((item, index) => (
          <div key={index} className="relative h-screen w-screen">
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="w-content absolute bottom-10 left-0 right-0 m-5 flex flex-col gap-y-4 bg-lightBlue/80 px-2 py-5 md:mx-20 lg:h-[12.375rem] lg:w-[55.781rem]">
              <div className="absolute my-auto h-[80%] border-l-4"></div>
              <h1 className="family-sora pl-4 text-[1.6rem] font-semibold text-white md:text-[2.332rem]">
                {item.title}
              </h1>
              <p className="family-sora pl-4 text-[1rem] font-light text-white md:text-[1.738rem]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
