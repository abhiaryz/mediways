import { FooterData } from "../data";

const FooterCol = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-5 text-center md:flex-row md:justify-start md:space-x-10 md:text-left lg:space-x-28">
      {FooterData.map((item, index) => (
        <div
          key={index}
          className="mb-5 flex h-full flex-col space-y-5 p-5 max-[640px]:w-full md:h-[14rem]"
        >
          <h1 className="family-inter text-[1.25rem] font-bold text-white">
            {item.title}
          </h1>
          {item.list.map((listItem, index) => (
            <p
              key={index}
              className="family-inter text-[1rem] font-normal text-white/60"
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
