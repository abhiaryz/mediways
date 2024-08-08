// eslint-disable-next-line react/prop-types
const Heading = ({ title, subtitle, pretitle }) => {
  return (
    <div className="w-screen space-y-1 p-5 text-center text-[0.9rem] font-bold">
      <h5 className="family-manrope font-bold text-skyBlue">{pretitle}</h5>
      <h1 className="family-sora text-[3.25rem] font-extrabold tracking-tight text-darkBlue">
        {title}
      </h1>
      <p className="family-sora w-18 text-[1rem] font-normal text-muted">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
