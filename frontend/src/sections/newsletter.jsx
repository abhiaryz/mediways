import { Mail } from "lucide-react";

const NewsLetter = () => {
  return (
    <div className="bg-lightBlue">
      <div className="mx-auto flex h-full max-w-screen-2xl flex-col px-10 py-5 md:px-32 lg:h-[26.375rem] lg:flex-row">
        <div className="flex flex-1 flex-col justify-center space-y-4 text-center lg:text-left">
          <h1 className="family-poppins text-[2rem] font-semibold text-white md:text-[2.891rem]">
            Never Want to Miss Any Job News?
          </h1>
          <p className="family-sora mb-4 text-[1rem] font-normal text-white/50">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula aenean massa.
          </p>
          <div className="my-5 flex w-full items-center space-x-5 rounded-lg border bg-white p-1 pl-4">
            <Mail className="h-6 w-6 text-black/40" />
            <input
              className="family-manrope w-full text-[0.7rem] text-black/80 focus:outline-none lg:text-[1rem]"
              placeholder="Your email address"
            />
            <button className="family-manrope rounded-md border bg-lightBlue px-8 py-3 font-extrabold text-white active:bg-lightBlue/95">
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-end pt-4 lg:flex-1 lg:flex-row lg:pt-0">
          <img src="doctor.png" className="relative top-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
