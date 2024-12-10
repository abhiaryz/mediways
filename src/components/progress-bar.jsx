// eslint-disable-next-line react/prop-types
const ProgressBar = ({ donated, target }) => {
  const progress = (donated / target) * 100;

  return (
    <div className="h-[2rem]">
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-lightBlue"
          style={{ width: `${progress}%` }}
        ></div>
        <div className="family-poppins flex justify-between pt-2 text-sm font-medium text-black">
          <h1>{Math.round(progress)}% Complete</h1>
          <h1>{`${donated}/${target}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
