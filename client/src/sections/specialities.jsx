import { Heading, Card } from "../components";
import { SpecialitiesData } from "../data";

const Specialities = () => {
  return (
    <div className="overflow-x-hidden py-10">
      <Heading
        title={"Specialities"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa."
        }
        pretitle={"Our Specialities"}
      />
      <div className="flex items-center justify-center gap-5 flex-wrap my-10 mx-auto max-w-screen-2xl px-5 md:px-20">
        {SpecialitiesData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Specialities;
