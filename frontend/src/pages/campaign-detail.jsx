import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import ReactHtmlParser from "react-html-parser";

const CampaignDetails = () => {
  const { link } = useParams();

  const [parsedData, setParsedData] = useState(null);

  const settings = {
    dots: true,
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://mediways-server.vercel.app/user/get-campaign-details/${link}`,
      );
      setParsedData(response.data.campaign);
    };

    fetchData();
  }, []);

  return (
    <div className="relative mx-auto flex max-w-screen-2xl flex-col justify-center pb-10 pt-32 md:flex-row md:px-32">
      <div className="h-full p-5 md:w-[65%]">
        <Slider {...settings} className="w-[100%] rounded-lg border">
          {parsedData?.carousel.map((index, item) => (
            <div key={index} className="relative h-full rounded-lg border">
              <img
                key={index}
                src={parsedData?.carousel[item]}
                className="rounded-lg"
              />
            </div>
          ))}
        </Slider>
        <div className="pt-5">{ReactHtmlParser(parsedData?.content)}</div>
      </div>
      <aside className="relative order-first h-screen p-5 md:order-none">
        <div className="space-y-4 rounded-lg bg-transparent p-5">
          <p className="family-poppins text-xs font-normal">
            {parsedData?.createdAt}
          </p>
          <h1 className="family-manrope text-xl font-bold leading-7 text-darkBlue">
            {parsedData?.title}
          </h1>
          <p className="family-poppins text-sm font-normal">
            Donate via UPI & Bank Transfer (INR Only)
          </p>
        </div>
      </aside>
    </div>
  );
};

export default CampaignDetails;
