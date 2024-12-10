import { FaLink, FaWhatsapp, FaHeart } from "react-icons/fa";
import ProgressBar from "./progress-bar";

// eslint-disable-next-line react/prop-types
const CampaignCard = ({ title, beneficiary, thumbnail, target, donated }) => {
  return (
    <div className="h-content mt-8 w-[21.5rem] cursor-pointer rounded-lg border shadow-lg shadow-black/20 md:w-[24rem]">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={thumbnail}
          className="hover:scale-10 h-[15rem] w-[full] overflow-hidden rounded-t-lg object-cover transition"
        />
      </div>
      <div className="flex flex-col space-y-3 bg-white px-3 py-5">
        <h1 className="family-sora text-[1.2rem] font-semibold text-darkBlue">
          {title}
        </h1>
        <p className="family-poppins text-[1rem] text-gray-700">
          {beneficiary}
        </p>
        <ProgressBar target={target} donated={donated} />
        <div className="flex h-full w-full items-center justify-between">
          <button className="flex items-center rounded-md bg-lightBlue px-3 py-2 text-white">
            <p className="family-inter pr-2">Donate Now</p>
            <FaHeart />
          </button>
          <div className="flex items-center space-x-2">
            <p className="family-poppins font-normal">Share :</p>
            <FaLink size={19} />
            <FaWhatsapp size={19} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
