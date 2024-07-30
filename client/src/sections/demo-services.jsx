import { ServicesData } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServiceCard, Heading } from "../components";

const DemoServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 3000, settings: { slidesToShow: 3, slidesToScroll: 3 } }, // Desktop
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } }, // Tablet
      { breakpoint: 464, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Mobile
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <Heading
        title={"Services"}
        pretitle={"Our Services"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa."
        }
      />
      <section className="space-x-5 h-full px-10 lg:px-20 py-10 overflow-x-hidden">
        <Slider {...settings}>
          {ServicesData.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default DemoServices;
