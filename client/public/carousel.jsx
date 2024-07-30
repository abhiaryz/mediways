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
    <section className="w-screen h-screen">
      <Slider {...settings}>
        {CarouselData.map((item, index) => (
          <div key={index} className="w-screen h-screen relative">
            <img src={item.image} alt="" className="w-full h-full" />
            <div className="flex flex-col absolute bg-lightBlue/80 py-5 px-2 h-[12.375rem] w-[55.781rem] gap-y-4 m-5 mx-20 bottom-10 left-0 right-0 ">
              <div className="h-[80%] border-l-4 absolute my-auto"></div>
              <h1 className="text-white font-semibold text-[2.332rem] family-sora pl-4">
                {item.title}
              </h1>
              <p className="text-white font-light family-sora text-[1.738rem] pl-4">
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
