import BLSdesignpc from "../../public/BLdesign.jpg";
import Blmobile from "../../public/BLmobile.jpg";
import { Heading } from "../components";

export default function BLS() {
  return (
    <section
      id="BLS"
      className="flex flex-col gap-2 md:gap-6 w-full py-24 items-center md:py-8 overflow-x-hidden"
    >
      <Heading
        title={" Processes"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa"
        }
        pretitle={"Our Processes"}
      />
      <div className="w-11/12 flex justify-center gap-10 md:mt-20 mt-0 BLS-content-div md:flex-row flex-col-reverse">
        <div className="flex flex-col justify-around gap-10 md:pt-20 pt-0 md:w-[40%] items-end w-full md:items-center relative">
          <div className="flex bg-white flex-col gap-4 md:p-8 BLS-card border border-fadeBlue shadow-md rounded-xl md:w-11/12 w-full p-4">
            <p className="text-lightBlue md:text-[1.5rem] text-lg font-bold family-sora text-center md:text-left">
              Patient Inquiry
            </p>
            <p className="text-black text-[0.9rem] md:text-[1.125rem] font-normal family-sora md:text-left text-center">
              Receive detailed reports and case history, including full name and
              exact age.
            </p>
          </div>

          <div className="flex  bg-white flex-col md:p-8 BLS-card border border-fadeBlue shadow-md rounded-xl md:w-11/12 w-full p-4">
            <p className="text-lightBlue md:text-[1.5rem] text-lg font-bold family-sora text-center md:text-left">
              Recommendation & Cost Estimate
            </p>
            <p className="text-black text-[0.9rem] py-4 md:text-[1.125rem] font-normal family-sora md:text-left text-center">
              Forward doctor recommendations, estimated cost, and duration of
              stay to the patient.
            </p>
            <p className="text-black  text-[0.9rem] md:text-[1.125rem] font-normal family-sora md:text-left text-center">
              Allow time for the patient to choose their preferred hospital and
              location.
            </p>
          </div>
        </div>
        <img src={BLSdesignpc} className="md:block hidden h-4/5" />

        <img
          src={Blmobile}
          className="block absolute rel w-full object-scale-down -z-10 md:hidden h-[125%] right-0"
        />

        <div className="flex flex-col justify-between gap-10 md:w-[40%] items-start w-full">
          <div className="flex bg-white flex-col gap-4 md:p-8 BLS-card border border-fadeBlue shadow-md rounded-xl md:w-11/12 w-full p-4">
            <p className="text-lightBlue md:text-[1.5rem] text-lg font-bold family-sora text-center md:text-left">
              Medical Opinion
            </p>
            <p className="text-black text-[0.9rem] md:text-[1.125rem] font-normal family-sora md:text-left text-center">
              Send reports to partnered super specialty hospitals in India for
              multiple opinions.
            </p>
            <p className="text-black text-[0.9rem] md:text-[1.125rem] font-normal family-sora md:text-left text-center">
              Include doctor profiles for reference.
            </p>
          </div>
          <div className="flex flex-col bg-white gap-4 md:p-8 BLS-card border border-fadeBlue shadow-md rounded-xl md:w-11/12 w-full p-4">
            <p className="text-lightBlue md:text-[1.5rem] text-lg font-bold family-sora text-center md:text-left">
              Visa Assistance
            </p>
            <p className="text-black text-[0.9rem] md:text-[1.125rem] font-normal family-sora md:text-left text-center">
              Provide assistance letter from the chosen hospital for the medical
              visa process.
            </p>
            <p className="text-black text-[0.9rem] md:text-[1.125rem] font-normal family-sora md:text-left text-center">
              Collect patient and attendant passport scans for documentation.
            </p>
          </div>
          <div className="flex  bg-white flex-col gap-4 md:p-8 BLS-card border border-fadeBlue shadow-md rounded-xl md:w-11/12 w-full p-4">
            <p className="text-lightBlue md:text-[1.5rem] text-lg font-bold family-sora text-center md:text-left">
              Arrival & Escort
            </p>
            <p className="text-black text-[0.9rem] md:text-[1.125rem] font-normal family-sora md:text-left text-center">
              Meet patient at the airport and escort to chosen destination
              (hotel or hospital).
            </p>
            <p className="text-black text-[0.9rem] md:text-[1.125rem] font-normal family-sora md:text-left text-center">
              Arrange hospital consultation upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
