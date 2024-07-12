import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="Home-services" className="flex items-center flex-col py-16 gap-4">
      <p className="services-title">Our Services</p>
      <p className="services-description">
        Get the unparalleled care and attention you deserve
      </p>
      <div className="flex md:flex-col w-11/12 justify-between md:justify-center md:gap-y-10 mt-12">
        <div className="services-card">
          <img
            src="./assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="services-card-title">Process</p>
          <p className="services-card-description">
            Simplified process flow for medical treatment in India
          </p>
          <Link
            to="/services/process"
            className="flex services-card-link w-fit"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
            >
              <path
                d="M11.8789 3.57422L19.3573 11.0526L11.8789 18.531"
                stroke="#700619"
                stroke-width="1.48492"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.359 11.0527L3.44922 11.0527"
                stroke="#700619"
                stroke-width="1.48492"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="services-card">
          <img
            src="./assets/images/servicesimg2.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="services-card-title">Visa</p>
          <p className="services-card-description">
            Know about visa process
          </p>{" "}
          <Link
            to="/services/visa"
            className="flex services-card-link w-fit"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
            >
              <path
                d="M11.8789 3.57422L19.3573 11.0526L11.8789 18.531"
                stroke="#700619"
                stroke-width="1.48492"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.359 11.0527L3.44922 11.0527"
                stroke="#700619"
                stroke-width="1.48492"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="services-card">
          <img
            src="./assets/images/servicesimg3.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="services-card-title">Health Packages</p>
          <p className="services-card-description">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
            dalaracc lacus vel facilisis volutpat est velitolm.
          </p>{" "}
          <Link
            to="/services/health-packages"
            className="flex services-card-link w-fit"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
            >
              <path
                d="M11.8789 3.57422L19.3573 11.0526L11.8789 18.531"
                stroke="#700619"
                stroke-width="1.48492"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.359 11.0527L3.44922 11.0527"
                stroke="#700619"
                stroke-width="1.48492"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
