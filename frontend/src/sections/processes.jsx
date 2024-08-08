import ProcessDesign from "../../public/Processdesign.jpg";
import ProcessMobile from "../../public/Processmobile.jpg";
import { Heading } from "../components";

export default function Processes() {
  return (
    <section
      id="BLS"
      className="flex w-full flex-col items-center gap-2 overflow-x-hidden py-24 md:gap-6 md:py-8"
    >
      <Heading
        title={" Processes"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa"
        }
        pretitle={"Our Processes"}
      />
      <div className="BLS-content-div mt-0 flex w-11/12 flex-col-reverse justify-center gap-10 md:mt-20 md:flex-row">
        <div className="relative flex w-full flex-col items-end justify-around gap-10 pt-0 md:w-[40%] md:items-center md:pt-20">
          <div className="BLS-card flex w-full flex-col gap-4 rounded-xl border border-fadeBlue bg-white p-4 shadow-md md:w-11/12 md:p-8">
            <p className="family-sora text-center text-lg font-bold text-lightBlue md:text-left md:text-[1.5rem]">
              Patient Inquiry
            </p>
            <p className="family-sora text-center text-[0.9rem] font-normal text-black md:text-left md:text-[1.125rem]">
              Receive detailed reports and case history, including full name and
              exact age.
            </p>
          </div>

          <div className="BLS-card flex w-full flex-col rounded-xl border border-fadeBlue bg-white p-4 shadow-md md:w-11/12 md:p-8">
            <p className="family-sora text-center text-lg font-bold text-lightBlue md:text-left md:text-[1.5rem]">
              Recommendation & Cost Estimate
            </p>
            <p className="family-sora py-4 text-center text-[0.9rem] font-normal text-black md:text-left md:text-[1.125rem]">
              Forward doctor recommendations, estimated cost, and duration of
              stay to the patient.
            </p>
            <p className="family-sora text-center text-[0.9rem] font-normal text-black md:text-left md:text-[1.125rem]">
              Allow time for the patient to choose their preferred hospital and
              location.
            </p>
          </div>
        </div>
        <img src={ProcessDesign} className="hidden h-4/5 md:block" />

        <img
          src={ProcessMobile}
          className="rel absolute right-0 -z-10 block h-[125%] w-full object-scale-down md:hidden"
        />

        <div className="flex w-full flex-col items-start justify-between gap-10 md:w-[40%]">
          <div className="BLS-card flex w-full flex-col gap-4 rounded-xl border border-fadeBlue bg-white p-4 shadow-md md:w-11/12 md:p-8">
            <p className="family-sora text-center text-lg font-bold text-lightBlue md:text-left md:text-[1.5rem]">
              Medical Opinion
            </p>
            <p className="family-sora text-center text-[0.9rem] font-normal text-black md:text-left md:text-[1.125rem]">
              Send reports to partnered super specialty hospitals in India for
              multiple opinions.
            </p>
            <p className="family-sora text-center text-[0.9rem] font-normal text-black md:text-left md:text-[1.125rem]">
              Include doctor profiles for reference.
            </p>
          </div>
          <div className="BLS-card flex w-full flex-col gap-4 rounded-xl border border-fadeBlue bg-white p-4 shadow-md md:w-11/12 md:p-8">
            <p className="family-sora text-center text-lg font-bold text-lightBlue md:text-left md:text-[1.5rem]">
              Visa Assistance
            </p>
            <p className="family-sora text-center text-[0.9rem] font-normal text-black md:text-left md:text-[1.125rem]">
              Provide assistance letter from the chosen hospital for the medical
              visa process.
            </p>
            <p className="family-sora text-center text-[0.9rem] font-normal text-black md:text-left md:text-[1.125rem]">
              Collect patient and attendant passport scans for documentation.
            </p>
          </div>
          <div className="BLS-card flex w-full flex-col gap-4 rounded-xl border border-fadeBlue bg-white p-4 shadow-md md:w-11/12 md:p-8">
            <p className="family-sora text-center text-lg font-bold text-lightBlue md:text-left md:text-[1.5rem]">
              Arrival & Escort
            </p>
            <p className="family-sora text-center text-[0.9rem] font-normal text-black md:text-left md:text-[1.125rem]">
              Meet patient at the airport and escort to chosen destination
              (hotel or hospital).
            </p>
            <p className="family-sora text-center text-[0.9rem] font-normal text-black md:text-left md:text-[1.125rem]">
              Arrange hospital consultation upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
