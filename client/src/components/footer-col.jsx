import { FooterData } from "../data";

const FooterCol = () => {
  return (
    <div className="flex flex-col md:flex-row text-center items-center md:text-left justify-center md:justify-start md:space-x-10 lg:space-x-28 w-full p-5">
      {FooterData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col space-y-5 md:h-[14rem] max-[640px]:w-full p-5 mb-5 h-full"
        >
          <h1 className="text-white font-bold text-[1.25rem] family-inter ">
            {item.title}
          </h1>
          {item.list.map((listItem, index) => (
            <p
              key={index}
              className="text-white/60 font-normal text-[1rem] family-inter"
            >
              {listItem.title}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterCol;
