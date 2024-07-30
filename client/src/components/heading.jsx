// eslint-disable-next-line react/prop-types
const Heading = ({ title, subtitle, pretitle }) => {
  return (
    <div className="space-y-1 text-center text-[0.9rem] font-bold p-5  w-screen">
      <h5 className="text-skyBlue font-bold family-manrope">{pretitle}</h5>
      <h1 className="text-darkBlue text-[3.25rem] font-extrabold family-sora tracking-tight">
        {title}
      </h1>
      <p className="text-muted text-[1rem] font-normal family-sora w-18">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
