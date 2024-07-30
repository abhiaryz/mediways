import { BiWallet } from "react-icons/bi";

const serviceCard = ({ title, description }) => {
  return (
    <div className="flex flex-col w-full  max-w-sm border bg-lightBlue rounded-3xl py-10 p-5 gap-4">
      <div className="flex items-center justify-start gap-4">
        <BiWallet className="bg-white rounded-lg  text-lightBlue w-8 h-8" />

        <h1 className="text-white text-[1rem] font-semibold family-sora">
          {title}
        </h1>
      </div>
      <div>
        <p className="text-white font-medium text-[0.756rem] family-poppins">
          {description}
        </p>
      </div>
    </div>
  );
};

export default serviceCard;
