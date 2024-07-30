import { CircleArrowRight } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, link, icon }) => {
  return (
    <div className="flex flex-col items-center h-[25rem] max-w-sm border border-skyBlue rounded-4xl text-center py-10 bg-transparent relative">
      <div className="absolute w-[90px] h-[90px] top-[2rem] rounded-full bg-white -z-1 border-4 border-lightBlue"></div>
      <img src={`${icon}`} className="h-[4rem] w-auto m-auto z-0" />
      <h1 className="text-darkBlue font-bold family-sora text-[1.512rem] pt-10 pb-5">
        {title}
      </h1>
      <p className="text-muted font-normal family-poppins text-[0.756rem] pb-16 px-12">
        {description}
      </p>
      <div className="flex w-full items-center justify-center space-x-2 ">
        <a
          className="text-lightBlue font-bold family-poppins text-[0.945rem]"
          href={`${link}`}
        >
          Learn More
        </a>
        <CircleArrowRight className="text-white" fill="#3267FF" />
      </div>
    </div>
  );
};

export default Card;
