import { Heading, ServiceCard } from "../components";
import { ServicesData } from "../data";

const Services = () => {
  return (
    <div className="overflow-x-hidden ">
      <Heading
        title={"Services"}
        pretitle={"Our Services"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa."
        }
      />
      <div className="flex items-center justify-center gap-5 flex-wrap py-20 mx-20">
        {ServicesData.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
