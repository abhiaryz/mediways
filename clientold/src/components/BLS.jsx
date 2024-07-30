import React from "react";
import BLSdesignpc from "./BLSdesignpc.png";

export default function BLS() {
  return (
    <section
      id="BLS"
      className="flex flex-col gap-2 md:gap-6 w-full py-24 items-center md:py-8"
    >
      <p
        className="text-5xl md:text-4xl font-medium text-black2 md:text-center"
        style={{ letterSpacing: "-1.12px", lineHeight: "normal" }}
      >
        Learning Courses <span className="text-blue font-medium">online</span>{" "}
      </p>
      <p className="text-black3 text-lg font-medium md:text-center">
        Believerz Learning: Elevate JRF/AIR success with tailored strategic
        preparation.
      </p>
      <div className="w-11/12 flex md:mt-20 mt-0 BLS-content-div md:flex-row flex-col-reverse">
        <div className="flex flex-col justify-around md:pt-20 pt-0 md:w-[40%] items-end w-full md:items-center">
          <div className="flex flex-col items-center gap-4 md:p-8 BLS-card rounded-xl md:w-11/12 w-full p-4">
            <p className="text-black1 md:text-2xl text-lg font-medium md:text-left text-center">
              Homescience
            </p>
            <p className="text-[#586174] text-sm font-normal md:text-left text-center">
              our platform becomes your comprehensive resource. We offer an
              all-encompassing course that thoroughly covers your JRF syllabus,
              addressing crucial topics such as Food and Nutrition, Clothing and
              Textiles, and Child Development. Our commitment is to equip you
              with the knowledge and skills necessary to excel in this domain.
            </p>

          </div>
          <div className="flex flex-col items-center gap-4 md:p-8 BLS-card rounded-xl md:w-11/12 w-full p-4">
            <p className="text-black1 md:text-2xl text-lg font-medium md:text-left text-center">
              Homescience
            </p>
            <p className="text-[#586174] text-sm font-normal md:text-left text-center">
              our platform becomes your comprehensive resource. We offer an
              all-encompassing course that thoroughly covers your JRF syllabus,
              addressing crucial topics such as Food and Nutrition, Clothing and
              Textiles, and Child Development. Our commitment is to equip you
              with the knowledge and skills necessary to excel in this domain.
            </p>

          </div>
        </div>
        <img src={BLSdesignpc} className="md:block hidden h-4/5" />
        <div className="flex flex-col justify-between md:w-[40%] items-start w-full">
        <div className="flex flex-col items-center gap-4 md:p-8 BLS-card rounded-xl md:w-11/12 w-full p-4">
            <p className="text-black1 md:text-2xl text-lg font-medium md:text-left text-center">
              Homescience
            </p>
            <p className="text-[#586174] text-sm font-normal md:text-left text-center">
              our platform becomes your comprehensive resource. We offer an
              all-encompassing course that thoroughly covers your JRF syllabus,
              addressing crucial topics such as Food and Nutrition, Clothing and
              Textiles, and Child Development. Our commitment is to equip you
              with the knowledge and skills necessary to excel in this domain.
            </p>

          </div>
          <div className="flex flex-col items-center gap-4 md:p-8 BLS-card rounded-xl md:w-11/12 w-full p-4">
            <p className="text-black1 md:text-2xl text-lg font-medium md:text-left text-center">
              Homescience
            </p>
            <p className="text-[#586174] text-sm font-normal md:text-left text-center">
              our platform becomes your comprehensive resource. We offer an
              all-encompassing course that thoroughly covers your JRF syllabus,
              addressing crucial topics such as Food and Nutrition, Clothing and
              Textiles, and Child Development. Our commitment is to equip you
              with the knowledge and skills necessary to excel in this domain.
            </p>

          </div>
          <div className="flex flex-col items-center gap-4 md:p-8 BLS-card rounded-xl md:w-11/12 w-full p-4">
            <p className="text-black1 md:text-2xl text-lg font-medium md:text-left text-center">
              Homescience
            </p>
            <p className="text-[#586174] text-sm font-normal md:text-left text-center">
              our platform becomes your comprehensive resource. We offer an
              all-encompassing course that thoroughly covers your JRF syllabus,
              addressing crucial topics such as Food and Nutrition, Clothing and
              Textiles, and Child Development. Our commitment is to equip you
              with the knowledge and skills necessary to excel in this domain.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
