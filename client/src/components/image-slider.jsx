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
    <div className="flex flex-col h-1/2 w-full relative ">
      <img
        src={sliderArray[contentIndex].image}
        className="h-[40rem] w-full object-cover"
      />
      <div className="flex flex-col absolute bg-lightBlue/80 py-5 px-2 h-[12.375rem] w-[55.781rem] gap-y-4 m-5 mx-20 bottom-10 left-0 right-0 ">
        <div className="h-[80%] border-l-4 absolute my-auto"></div>
        <h1 className="text-white font-semibold text-[2.332rem] family-sora pl-4">
          {sliderArray[contentIndex].title}
        </h1>
        <p className="text-white font-light family-sora text-[1.738rem] pl-4">
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
