import { CircleArrowRight } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, link, icon }) => {
  return (
    <div className="relative flex h-[25rem] max-w-sm flex-col items-center rounded-4xl border border-skyBlue bg-transparent py-10 text-center">
      <div className="-z-1 absolute top-[2rem] h-[90px] w-[90px] rounded-full border-4 border-lightBlue bg-white"></div>
      <img src={`${icon}`} className="z-0 m-auto h-[4rem] w-auto" />
      <h1 className="family-sora pb-5 pt-10 text-[1.512rem] font-bold text-darkBlue">
        {title}
      </h1>
      <p className="family-poppins px-12 pb-16 text-[0.756rem] font-normal text-muted">
        {description}
      </p>
      <div className="relative bottom-4 flex w-full items-center justify-center space-x-2">
        <p
          className="family-poppins text-[0.945rem] font-bold text-lightBlue"
          href={`${link}`}
        >
          Learn More
        </p>
        <CircleArrowRight className="text-white" fill="#3267FF" />
      </div>
    </div>
  );
};

export default Card;
