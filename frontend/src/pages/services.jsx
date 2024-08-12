import { useState, useEffect } from "react";
import axios from "axios";

import { Heading } from "../components";

import { ServicePageCard } from "../components";

const Services = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://mediways-server.vercel.app/user/get-all-services",
      );
      setServicesData(response.data.services);
    };

    fetchData();
  }, []);
  return (
    <div className="flex w-full flex-col items-center overflow-hidden py-24">
      <Heading
        title={"Services"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa. "
        }
      />
      <div className="mt-8 flex w-11/12 flex-col flex-wrap justify-between gap-6 md:w-3/4 md:flex-row">
        {servicesData &&
          servicesData.length > 0 &&
          servicesData.map((item, index) => (
            <ServicePageCard
              key={index}
              title={item.title}
              desc={item.desc}
              img={item.img}
            />
          ))}
      </div>
    </div>
  );
};

export default Services;
