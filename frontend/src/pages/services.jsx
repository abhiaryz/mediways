import React, { useState,useEffect } from "react";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import validator from "validator";
import { Heading } from "../components";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import { BsYoutube, BsLinkedin, BsTwitterX } from "react-icons/bs";
import ServicePageCard from "../components/service-page-card";

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
    <div className="flex w-full flex-col items-center py-24">
      <Heading
        title={"Services"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa. "
        }
      />
      <div className="flex w-11/12 md:w-3/4 flex-col flex-wrap gap-6 mt-8 md:flex-row justify-between">
        {servicesData &&
          servicesData.length > 0 &&
          servicesData.map((item, index) => (
            <ServicePageCard title={item.title} desc={item.desc} img={item.img} />
          ))}
      </div>
    </div>
  );
};

export default Services;
