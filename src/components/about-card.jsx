// eslint-disable-next-line react/prop-types
const AboutCard = ({ title, desc, img }) => {
  return (
    <div className="h-content mt-4 w-full rounded-lg border shadow-lg shadow-black/20 md:max-w-[30%]">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={img}
          className="hover:scale-10 h-[15rem] w-[full] overflow-hidden rounded-t-lg object-cover transition"
        />
      </div>
      <div className="flex flex-col space-y-2 bg-white p-3">
        <h1 className="family-sora text-[1.2rem] font-semibold text-darkBlue">
          {title}
        </h1>
        <p className="familt-sora">{desc}</p>
      </div>
    </div>
  );
};

export default AboutCard;
