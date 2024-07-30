import { NavbarData } from "../data";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleToggle = () => {
    setToggleNavbar(!toggleNavbar);
  };

  return (
    <div className="flex  justify-center w-full mx-auto max-w-screen-2xl px-2.5 lg:px-20 shadow-md bg-white">
      <ul className="lg:flex hidden justify-center space-x-12 w-full pl-[9.5rem] py-10 h-full">
        {NavbarData.map((item, index) => (
          <li
            key={index}
            className="text-darkBlue font-bold family-manrope text-[15px] tracking-wide cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className=" lg:flex items-center hidden">
        <button className="h-[3.4rem] w-[16rem] bg-lightBlue text-[1rem] text-white font-semibold family-sora border rounded-full">
          Make an Appointment
        </button>
      </div>
      <div className="lg:hidden flex w-full justify-end py-5">
        <button onClick={handleToggle}>
          <MenuIcon />
        </button>
        <div>
          {toggleNavbar && (
            <div className="">
              <ul className="flex flex-col w-full z-10 space-y-3 absolute top-16 h-content shadow-md left-0 right-0 border-2 border-white bg-white p-4">
                {NavbarData.map((item, index) => (
                  <li
                    key={index}
                    className="text-darkBlue font-bold family-manrope text-[15px] tracking-wide cursor-pointer"
                  >
                    {item.title}
                  </li>
                ))}
                <button className="h-[3.4rem] w-full bg-lightBlue text-[1rem] text-white font-semibold family-sora border rounded-full">
                  Make an Appointment
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
