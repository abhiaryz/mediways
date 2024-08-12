import { ServiceCard } from "../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://mediways-server.vercel.app/user/get-all-services",
      );
      const firstFive = response.data.services.slice(0, 5);
      setServicesData(firstFive);
    };

    fetchData();
  }, []);

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
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } }, // Tablet
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
      <section className="h-full space-x-5 overflow-x-hidden px-4 py-10 lg:px-20">
        <Slider {...settings}>
          {servicesData?.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.desc}
            />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Services;
