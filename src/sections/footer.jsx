import { FooterCol } from "../components";
import { BsYoutube, BsLinkedin, BsTwitterX } from "react-icons/bs";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <div className="flex h-2/4 flex-col bg-extraDark md:h-[25rem] md:flex-row">
      <div className="relative -mb-[8rem] -mt-[10rem] flex flex-col items-center justify-center space-y-4 p-10 sm:mb-0 sm:mt-0 md:items-start">
        {/* <h1 className="text-white font-semibold text-[1.5rem] family-inter text-center md:text-left">
          Logo
        </h1> */}
        <img
          src={logo}
          className="h-[26rem] w-[16rem] object-contain lg:relative lg:right-10"
        />
        <p className="family-inter relative bottom-32 mx-auto text-center text-[1rem] font-normal text-white/60 md:bottom-16 md:text-left lg:pr-10">
          Discover a new level of well-being with AID Circle. We offer
          comprehensive healthcare solutions designed to address your unique
          needs.
        </p>
        <div className="socials relative bottom-24 flex space-x-4 text-white md:bottom-16">
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
