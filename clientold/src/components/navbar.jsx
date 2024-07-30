import { NavbarData } from "../data";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end w-full relative mx-auto max-w-screen-2xl px-2.5 md:px-20 shadow-md">
      <ul className="flex justify-center space-x-12 w-full pl-7.5 py-10 h-full relative left-32">
        {NavbarData.map((item, index) => (
          <li
            key={index}
            className="text-darkBlue font-bold family-manrope text-[15px] tracking-wide cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="h-full">
        <button className="h-[3.4rem] w-[16rem] bg-lightBlue text-[1rem] text-white font-semibold family-sora border rounded-full">
          Make an Appointment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
