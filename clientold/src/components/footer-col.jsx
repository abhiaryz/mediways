import { FooterData } from "../data";

const FooterCol = () => {
  return (
    <div className="flex items-center space-x-10 w-full p-5">
      {FooterData.map((item, index) => (
        <div key={index} className="flex flex-col space-y-5 h-[12.125rem]">
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
