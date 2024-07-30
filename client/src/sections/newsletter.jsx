import { Mail } from "lucide-react";

const NewsLetter = () => {
  return (
    <div className="bg-lightBlue">
      <div className="flex flex-col lg:flex-row py-5 px-10 h-full lg:h-[26.375rem]  mx-auto max-w-screen-2xl md:px-32">
        <div className="flex flex-col justify-center flex-1 text-center lg:text-left space-y-4">
          <h1 className="text-white text-[2rem] md:text-[2.891rem] family-poppins font-semibold">
            Never Want to Miss Any Job News?
          </h1>
          <p className="text-white/50 text-[1rem]  family-sora font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula aenean massa.
          </p>
          <div className="flex items-center space-x-5 w-full p-1 pl-4 border rounded-lg bg-white my-5 ">
            <Mail className="text-black/40" />
            <input
              className="family-manrope text-black/80 focus:outline-none w-full"
              placeholder="Your email address"
            />
            <button className="text-white family-manrope font-extrabold bg-lightBlue py-3 px-8 border rounded-md ">
              Submit
            </button>
          </div>
        </div>
        <div className="flex lg:flex-1 justify-end flex-col lg:flex-row pt-4 lg:pt-0">
          <img src="doctor.png" className="relative top-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
