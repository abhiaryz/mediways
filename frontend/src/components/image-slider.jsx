/* eslint-disable react/prop-types */
import { useState } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const ImageSlider = ({ sliderArray }) => {
  const [contentIndex, setContentIndex] = useState(0);

  const showNextImage = () => {
    setContentIndex((index) => {
      if (index === sliderArray.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setContentIndex((index) => {
      if (index === 0) return sliderArray.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="relative flex h-1/2 w-full flex-col">
      <img
        src={sliderArray[contentIndex].image}
        className="h-[40rem] w-full object-cover"
      />
      <div className="absolute bottom-10 left-0 right-0 m-5 mx-20 flex h-[12.375rem] w-[55.781rem] flex-col gap-y-4 bg-lightBlue/80 px-2 py-5">
        <div className="absolute my-auto h-[80%] border-l-4"></div>
        <h1 className="family-sora pl-4 text-[2.332rem] font-semibold text-white">
          {sliderArray[contentIndex].title}
        </h1>
        <p className="family-sora pl-4 text-[1.738rem] font-light text-white">
          {sliderArray[contentIndex].description}
        </p>
      </div>
      <button className="imageslider-button left-0" onClick={showPrevImage}>
        <CircleChevronLeft height={48} width={48} fill="#FFFFFF" />
      </button>
      <button className="imageslider-button right-0" onClick={showNextImage}>
        <CircleChevronRight height={48} width={48} fill="#FFFFFF" />
      </button>
    </div>
  );
};

export default ImageSlider;
