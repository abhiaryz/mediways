import { useEffect, useState } from "react";
import { Heading, CampaignCard } from "../components";
import axios from "axios";
import { Link } from "react-router-dom";

const Campaign = () => {
  const [parsedData, setParsedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://mediways-server.vercel.app/user/get-all-campaigns",
      );
      setParsedData(response.data.campaigns);
    };

    fetchData();
  }, []);

  return (
    <div className="pt-24">
      <div className="relative">
        <div className="">
          <img
            src="banner.jpg"
            className="h-[35rem] w-full object-cover brightness-50"
          />
        </div>
        <div className="absolute bottom-10 ml-8 w-[70%] space-y-2 bg-black/60 px-10 py-5">
          <h1 className="family-poppins text-4xl font-bold text-white">
            Explore Campaigns
          </h1>
          <p className="family-poppins text-xl font-normal text-white">
            Home to World-class internationally accredited healthcare
            institutions delivering a fulfilling patient experience
          </p>
        </div>
      </div>
      <div className="verflow-hidden py-10">
        <Heading
          title={"Explore our Campaigns"}
          pretitle={"Our Campaigns"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa. "
          }
        />
        <div className="px-18 flex flex-wrap justify-center p-5">
          {parsedData?.map((item, index) => (
            <Link key={index} to={`/campaigns/${item.link}`} className="mx-5">
              <CampaignCard
                title={item.title}
                beneficiary={item.beneficiaryName}
                thumbnail={item.thumbnail}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaign;
