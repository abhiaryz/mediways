import { BiWallet } from "react-icons/bi";

const serviceCard = ({ title, description }) => {
  return (
    <div className="flex h-[11rem] flex-col justify-center gap-4 rounded-3xl border bg-lightBlue p-5 py-3 md:py-10 lg:mx-[1rem] lg:items-start">
      <div className="flex items-center justify-start gap-4">
        <BiWallet className="h-8 w-8 rounded-lg bg-white text-lightBlue" />

        <h1 className="family-sora text-[1rem] font-semibold text-white">
          {title}
        </h1>
      </div>
      <div>
        <p className="family-poppins text-[0.9rem] font-medium text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default serviceCard;
