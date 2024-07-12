import React,{useEffect} from "react";
import "./WellnessInIndia.scss";

export default function WellnessInIndia() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  return (
    <section id="WellnessInIndia">
      <div className="relative w-full flex items-end justify-center">
        <img
          src="./assets/images/WellnessInIndiaimg.png"
          alt=""
          className="object-cover w-full object-top md:hidden"
          style={{ height: "95vh" }}
        />{" "}
        <img
          src="./assets/images/WellnessInIndiaimgphone.png"
          alt=""
          className="object-cover w-full hidden md:block"
          style={{ height: "95vh" }}
        />
        <div className="flex flex-col absolute px-8 md:gap-4 md:py-6 md:w-11/12 py-4 items-center WellnessInIndia-div">
          <p className="WellnessInIndia-div-title">Wellness in India</p>
          <p className="WellnessInIndia-div-subheading">
            Experience a unique and holistic approach to mind and body
            rejuvenation
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-16 w-full items-center justify-center">
        <div className="w-4/5 md:w-11/12 flex flex-col gap-6 ">
          <p className="WellnessInIndia-title">
            Wellness in
            <span className="text-[#700619] font-semibold"> India</span>
          </p>
          <p className="WellnessInIndia-description">
            India aims to provide rich-quality experience combined with a
            holistic approach for the overall wellbeing. It offer activities and
            programs promising and delivering healing, personal growth and
            intense pampering and relaxation in the safest and most secure
            environment.
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
        </div>
      </div>
    </section>
  );
}
