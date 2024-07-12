import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hospitals() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  const [allHospitals, setallHospitals] = useState([
    {
      thumbnail: "/assets/images/HospitalImg.png",
      name: "Adam Vital Hospital L.L.C",
      location: "Bangalore",
      facility_type: "Hospital",
      services: ["Health Packages", "Health Packages"],
      link: "Adam-Vital-Hospital-L.L.C",
    },
    {
      thumbnail: "/assets/images/HospitalImg.png",
      name: "Adam Vital Hospital L.L.C",
      location: "Bangalore",
      facility_type: "Hospital",
      services: ["Health Packages", "Health Packages"],
      link: "Adam-Vital-Hospital-L.L.C",
    },
    {
      thumbnail: "/assets/images/HospitalImg.png",
      name: "Adam Vital Hospital L.L.C",
      location: "Bangalore",
      facility_type: "Hospital",
      services: ["Health Packages", "Health Packages"],
      link: "Adam-Vital-Hospital-L.L.C",
    },
    {
      thumbnail: "/assets/images/HospitalImg.png",
      name: "Adam Vital Hospital L.L.C",
      location: "Bangalore",
      facility_type: "Hospital",
      services: ["Health Packages", "Health Packages"],
      link: "Adam-Vital-Hospital-L.L.C",
    },
    {
      thumbnail: "/assets/images/HospitalImg.png",
      name: "Adam Vital Hospital L.L.C",
      location: "Bangalore",
      facility_type: "Hospital",
      services: ["Health Packages", "Health Packages"],
      link: "Adam-Vital-Hospital-L.L.C",
    },
  ]);
  return (
    <section
      className="Hospitals flex gap-8 items-center justify-center w-full flex-col"
      id="Hospitals"
      style={{ marginTop: "13vh" }}
    >
      <div className="flex w-11/12 md:flex-col justify-between items-center flex-wrap gap-y-16">
        {allHospitals &&
          allHospitals.map((hospital, index) => (
            <div className="hospitals-card" key={index}>
              <img
                src={hospital.thumbnail}
                alt={hospital.name}
                className="rounded-lg md:w-full"
              />
              <div className="flex flex-col justify-between md:gap-4 md:py-1">
                <p className="hospitals-card-title">
                  {hospital.name}
                </p>
                <p className="flex items-center hospitals-card-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.0009 4.47942C16.4096 2.88812 14.2513 1.99414 12.0009 1.99414C9.75047 1.99414 7.59221 2.88812 6.00091 4.47942C4.40961 6.07072 3.51563 8.22899 3.51563 10.4794C3.51562 12.7299 4.40961 14.8881 6.00091 16.4794L11.2709 21.7594C11.3639 21.8532 11.4745 21.9275 11.5963 21.9783C11.7182 22.0291 11.8489 22.0552 11.9809 22.0552C12.1129 22.0552 12.2436 22.0291 12.3655 21.9783C12.4873 21.9275 12.5979 21.8532 12.6909 21.7594L18.0009 16.4294C19.5856 14.8447 20.4758 12.6955 20.4758 10.4544C20.4758 8.21337 19.5856 6.0641 18.0009 4.47942V4.47942ZM16.5709 14.9994L12.0009 19.5894L7.43091 14.9994C6.52805 14.0957 5.91338 12.9447 5.6646 11.6917C5.41582 10.4388 5.54409 9.14017 6.03321 7.9601C6.52233 6.78004 7.35032 5.77147 8.41254 5.0619C9.47475 4.35233 10.7235 3.9736 12.0009 3.9736C13.2783 3.9736 14.5271 4.35233 15.5893 5.0619C16.6515 5.77147 17.4795 6.78004 17.9686 7.9601C18.4577 9.14017 18.586 10.4388 18.3372 11.6917C18.0884 12.9447 17.4738 14.0957 16.5709 14.9994V14.9994ZM9.00091 7.40942C8.19362 8.21919 7.7403 9.31599 7.7403 10.4594C7.7403 11.6029 8.19362 12.6997 9.00091 13.5094C9.60067 14.1102 10.3645 14.5205 11.1966 14.6888C12.0286 14.8571 12.8919 14.776 13.678 14.4556C14.4641 14.1351 15.1381 13.5897 15.6154 12.8877C16.0927 12.1856 16.352 11.3583 16.3609 10.5094C16.3654 9.94263 16.2562 9.38068 16.0398 8.85681C15.8234 8.33294 15.5041 7.85778 15.1009 7.45942C14.7046 7.054 14.232 6.73096 13.7103 6.50889C13.1887 6.28682 12.6282 6.1701 12.0613 6.16545C11.4944 6.1608 10.9321 6.26832 10.4069 6.48181C9.88165 6.6953 9.40383 7.01055 9.00091 7.40942V7.40942ZM13.6909 12.0894C13.3119 12.4742 12.8111 12.7153 12.274 12.7717C11.737 12.828 11.197 12.6961 10.7464 12.3983C10.2959 12.1006 9.9627 11.6557 9.80391 11.1395C9.64512 10.6233 9.67056 10.0681 9.87586 9.56858C10.0812 9.06909 10.4536 8.65644 10.9295 8.40116C11.4054 8.14588 11.9552 8.06383 12.4848 8.16904C13.0145 8.27425 13.4912 8.56018 13.8334 8.97795C14.1756 9.39573 14.3621 9.91939 14.3609 10.4594C14.3464 11.0767 14.0874 11.6629 13.6409 12.0894H13.6909Z"
                      fill="#700619"
                    />
                  </svg>
                  {hospital.location}
                </p>
                <p className="hospitals-card-text">
                  Facilty Type: {hospital.facility_type}
                </p>
                <p className="hospitals-card-text flex flex-wrap">
                  <p>Service Offered:</p>
                  {hospital.services.map((item, index) => (
                    <div className="hospitals-card-chip">{item}</div>
                  ))}
                </p>
                <Link to={`/hospitals/${hospital.link}`}>
                  <button className="hospitals-card-button">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
