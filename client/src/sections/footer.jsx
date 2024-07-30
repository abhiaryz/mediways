import { FooterCol } from "../components";
import { BsYoutube, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-extraDark h-2/4 md:h-[25rem] flex flex-col md:flex-row">
      <div className="flex flex-col justify-center items-center md:items-start p-10 space-y-4">
        <h1 className="text-white font-semibold text-[1.5rem] family-inter text-center md:text-left">
          Logo
        </h1>
        <p className="text-white/60 font-normal text-[1rem] family-inter text-center md:text-left">
          Make your data invisible by generating unlimited identities. The
          next-level in privacy protection for online and travel.
        </p>
        <div className="socials flex text-white space-x-4">
          <BsYoutube size={22} className="" />
          <BsLinkedin size={18} />
          <BsTwitterX size={18} />
        </div>
      </div>
      <FooterCol />
    </div>
  );
};

export default Footer;
