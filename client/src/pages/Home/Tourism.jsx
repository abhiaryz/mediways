import React from "react";

export default function Tourism() {
  return (
    <section id="Tourism" className="w-full flex py-10 md:flex-col md:gap-12 md:items-center justify-around">
      <div className="flex items-center w-1/2 justify-center md:w-11/12">
        <img src="./assets/images/tourism.png" alt="" className="w-4/5 md:w-full" />
      </div>
      <div className="tourism-right flex flex-col gap-12 md:gap-4 w-1/2 md:w-11/12">
        <p className="tourism-title">Tourism in India</p>
        <div className="flex items-center w-3/4 gap-4 md:w-full">
          <div className="tourism-div-icon-div flex items-center justify-center w-1/5">
            <img
              src="./assets/images/tourismicon1.png"
              alt=""
              className="tourism-div-icon"
            />
          </div>

          <div className="flex flex-col gap-2 w-4/5">
            <p className="tourism-div-title">Modern Clinic</p>
            <p className="tourism-div-description">
              Augue nulla montes, eget congue dolor magna vitae porttitor.
              Mollis aliquam tristique porttitor blandit nibh dui tristique
              quam.......
            </p>
          </div>
          
        </div>

        <div className="flex items-center w-3/4 gap-4 md:w-full">
          <div className="tourism-div-icon-div flex items-center justify-center w-1/5">
            <img
              src="./assets/images/tourismicon2.png"
              alt=""
              className="tourism-div-icon object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 w-4/5">
            <p className="tourism-div-title">Less Consultation Fees</p>
            <p className="tourism-div-description">
              Augue nulla montes, eget congue dolor magna vitae porttitor.
              Mollis aliquam tristique porttitor blandit nibh dui tristique
              quam.......
            </p>
          </div>
          
        </div>

        <div className="flex items-center w-3/4 gap-4 md:w-full">
          <div className="tourism-div-icon-div flex items-center justify-center w-1/5">
            <img
              src="./assets/images/tourismicon3.png"
              alt=""
              className="tourism-div-icon object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 w-4/5">
            <p className="tourism-div-title">Professional Treatment</p>
            <p className="tourism-div-description">
              Augue nulla montes, eget congue dolor magna vitae porttitor.
              Mollis aliquam tristique porttitor blandit nibh dui tristique
              quam.......
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
