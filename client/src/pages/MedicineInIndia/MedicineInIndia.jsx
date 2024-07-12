import React,{useEffect} from "react";
import "./MedicineInIndia.scss";
import { Link } from "react-router-dom";

export default function MedicineInIndia() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  return (
    <section id="MedicineInIndia" className="flex flex-col w-full">
      <div className="relative w-full flex items-end justify-center">
        <img
          src="./assets/images/MedicineInIndiaimg.png"
          alt=""
          className="object-cover w-full object-top md:hidden"
          style={{ height: "95vh" }}
        />{" "}
        <img
          src="./assets/images/MedicineInIndiaimgphone.png"
          alt=""
          className="object-cover w-full hidden md:block"
          style={{ height: "95vh" }}
        />
        <div className="flex flex-col absolute px-8 md:gap-4 md:py-6 md:w-11/12 py-4 items-center MedicineInIndia-div">
          <p className="MedicineInIndia-div-title">Medical in India</p>
          <p className="MedicineInIndia-title-subheading">
            Home to World-class internationally accredited healthcare
            institutions delivering a fulfilling patient experience
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-16 w-full items-center justify-center">
        <div className="w-4/5 md:w-11/12 flex flex-col gap-6 ">
          <p className="MedicineInIndia-title">
            Medical in
            <span className="text-[#700619] font-semibold"> India</span>
          </p>
          <p className="MedicineInIndia-description">
            India is home to world-class internationally accredited healthcare
            institutions that offer an innovative and integrated care model,
            providing patients with a fulfilling experience. The highly advanced
            infrastructure of healthcare service providers covers a wide range
            of specialties, including elective procedures in cosmetic treatment
            & surgery, orthopedics and sports medicine, ophthalmology, dental,
            dermatology, wellness and preventive health check-ups, as well as
            assisted reproductive techniques and weight loss management and
            surgeries. Not only does India boast impressive infrastructure, but
            it also offers a pool of skilled and licensed healthcare
            professionals who have established themselves as leaders in their
            respective fields globally.
          </p>
          <div className="flex md:flex-col w-full justify-between md:justify-center md:gap-y-10 mt-12">
            <div className="blog-card">
              <img
                src="./assets/images/servicesimg1.png"
                alt=""
                className="w-full object-cover"
              />
              <p className="blog-card-title">Health Packages</p>
              <p className="blog-card-description">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
            </div>
            <div className="blog-card">
              <img
                src="./assets/images/servicesimg2.png"
                alt=""
                className="w-full object-cover"
              />
              <p className="blog-card-title">Health Packages</p>
              <p className="blog-card-description">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>{" "}
            </div>
            <div className="blog-card">
              <img
                src="./assets/images/servicesimg3.png"
                alt=""
                className="w-full object-cover"
              />
              <p className="blog-card-title">Health Packages</p>
              <p className="blog-card-description">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>{" "}
            </div>
          </div>
          <div className="flex md:flex-col w-full justify-between md:justify-center md:gap-y-10 mt-12">
            <div className="blog-card">
              <img
                src="./assets/images/servicesimg1.png"
                alt=""
                className="w-full object-cover"
              />
              <p className="blog-card-title">Health Packages</p>
              <p className="blog-card-description">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
            </div>
            <div className="blog-card">
              <img
                src="./assets/images/servicesimg2.png"
                alt=""
                className="w-full object-cover"
              />
              <p className="blog-card-title">Health Packages</p>
              <p className="blog-card-description">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>{" "}
            </div>
            <div className="blog-card">
              <img
                src="./assets/images/servicesimg3.png"
                alt=""
                className="w-full object-cover"
              />
              <p className="blog-card-title">Health Packages</p>
              <p className="blog-card-description">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>{" "}
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}
