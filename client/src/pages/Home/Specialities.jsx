import React from "react";
import { Link } from "react-router-dom";

export default function Specialities() {
  const data = [
    {
      name: "Cardiac",
      desc: "From routine procedures to complex surgeries, India provides comprehensive cardiac care tailored to individual needs.",
      img: "/assets/images/specailities/Cosmetic.png",
      link: "cardiac",
    },
    {
      name: "Liver Transplantation",
      desc: "Liver transplantation is a surgical procedure where a diseased or damaged liver is replaced with a healthy liver from a donor",
      img: "/assets/images/specailities/Cosmetic.png",
      link: "liver-transplantation",
    },
    {
      name: "Bone Marrow Transplant",
      desc: "Bone Marrow Transplant is a procedure where diseased or damaged bone marrow is replaced with healthy stem cells",
      img: "/assets/images/specailities/Cosmetic.png",
      link: "bone-marrow-transplant",
    },
    {
      name: "Heart Transplantation",
      desc: "Heart transplantation is a complex surgical procedure where a diseased or damaged heart is replaced with a healthy heart from a donor.",
      img: "/assets/images/specailities/Cosmetic.png",
      link: "heart-transplantation",
    },
    {
      name: "Kidney Transplantation",
      desc: "Kidney transplantation is a surgical procedure where a healthy kidney from a donor is transplanted into a patient whose kidneys have failed or are no longer functioning properly",
      img: "/assets/images/specailities/Cosmetic.png",
      link: "kidney-transplantation",
    },
    {
      name: "Gastroenterology",
      desc: "Gastroenterology focuses on the diagnosis and treatment of disorders related to the digestive system, including the esophagus, stomach, intestines, liver, pancreas, and gallbladder.",
      img: "/assets/images/specailities/Cosmetic.png",
      link: "gastroenterology",
    },
    {
      name: "Cancer",
      desc: "India has emerged as a leading destination for cancer treatment, offering state-of-the-art medical facilities, renowned oncologists, and advanced treatment modalities at affordable costs.",
      img: "/assets/images/specailities/Cosmetic.png",
      link: "cancer",
    },
    {
      name: "Cardiac",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aliquam impedit earum eum reiciendis ab ea aperiam voluptas nihil sunt dolores!",
      img: "/assets/images/specailities/Cosmetic.png",
      link: "cardiac",
    },
  ];
  return (
    <section
      id="Home-Specialities"
      className="w-full bg-[#700619] flex flex-col justify-center items-center py-20"
    >
      <div className="w-11/12 flex flex-col gap-4 md:items-center">
        <p className="Specialities-title">Featured Specialties</p>
        <p className="Specialities-description">
          Connect with experienced world-class doctors for exceptional services
          across different specialities
        </p>
        <div className="flex items-center flex-wrap justify-between mt-10 md:flex-col w-full gap-6 h-full">
          {data.map((item, index) => (
            <div className="Home-Specialities-card" key={index}>
              <div className="flex gap-2 items-center">
                <img
                  src={item.img}
                  alt={item.name}
                />
                <p className="Home-Specialities-card-title">{item.name}</p>
              </div>
              <p className="Home-Specialities-card-description">{item.desc}</p>
              <Link
                to={`/Speciality/${item.link}`}
                className="flex items-center Home-Specialities-card-link mt-4"
              >
                READ MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M8.35938 2.96484L14 8.60542L8.35938 14.246"
                    stroke="white"
                    strokeWidth="1.12002"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.9999 8.60547L2 8.60547"
                    stroke="white"
                    strokeWidth="1.12002"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
