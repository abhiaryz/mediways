import React,{useEffect} from "react";
import "./Services.scss";

export default function Visa() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
      }, []);
  return (
    <div
      className="Visa flex gap-8 items-center justify-center w-full flex-col"
      id="Visa"
    >
      <div className="relative w-full flex items-end justify-center">
        <img
          src="/assets/images/MedicineInIndiaimg.png"
          alt="Visa Services"
          className="object-cover w-full object-top md:hidden"
          style={{ height: "95vh" }}
        />
        <img
          src="/assets/images/MedicineInIndiaimgphone.png"
          alt="Visa Services"
          className="object-cover w-full hidden md:block"
          style={{ height: "95vh" }}
        />
        <div className="flex flex-col absolute px-8 md:gap-4 md:py-6 md:w-11/12 py-4 items-center Visa-div">
          <p className="Visa-div-title">Visa Services</p>
          <p className="Visa-div-title-subheading">
            Medical visas are granted to those seeking medical treatment in
            recognized and reputed hospitals or treatment centers in India. The
            applicant should be seeking specialized medical treatment for which
            they intend to travel to India.
          </p>
        </div>
      </div>
      <div className="flex md:flex-col w-4/5 md:w-11/12 justify-between md:justify-center md:gap-y-10 mt-12">
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">Passport</p>
          <p className="blog-card-description">
            Ensure your passport is valid for at least six months beyond your
            intended stay in India and has at least two blank pages for visa
            stamps.
          </p>
        </div>
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">Application Form</p>
          <p className="blog-card-description">
            Complete the online visa application form accurately. You can find
            this on the official website of the Indian Visa Online.
          </p>{" "}
        </div>
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">Passport Photos</p>
          <p className="blog-card-description">
            Attach recent passport-sized photographs according to the
            specifications mentioned on the visa application form.
          </p>{" "}
        </div>
      </div>
      <div className="flex md:flex-col w-4/5 md:w-11/12 justify-between md:justify-center md:gap-y-10 mt-12">
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">Medical Documents</p>
          <p className="blog-card-description">
            Medical travel to India requires proof of your condition and
            treatment plan. Bring medical reports, local doctor's diagnosis, and
            a letter from your Indian doctor recommending the treatment.
          </p>
        </div>
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">Letter of Invitation</p>
          <p className="blog-card-description">
            If applicable, obtain a letter of invitation from the hospital or
            treatment center in India.
          </p>{" "}
        </div>
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">Financial Documents</p>
          <p className="blog-card-description">
            Provide proof of sufficient funds to cover your medical expenses and
            stay in India, such as bank statements, sponsorship letters, or
            evidence of medical insurance coverage.
          </p>{" "}
        </div>
      </div>
      <div className="flex md:flex-col w-4/5 md:w-11/12 justify-between md:justify-center md:gap-y-10 mt-12">
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">Visa Fee</p>
          <p className="blog-card-description">
            Pay the visa application fee online as per the instructions provided
          </p>
        </div>
      </div>
      <div className="w-4/5 md:w-11/12 flex flex-col gap-6 py-12">
        <p className="Visa-title">
          Visa{" "}
          <span className="text-[#700619] font-semibold">
            Application Submission
          </span>
        </p>
        <p className="Visa-description">
          Once you've completed the online application form and gathered all
          necessary documents, submit your application online through the Indian
          Visa Online portal.
          <br />
          You may also need to schedule an appointment for a visa interview at
          the Indian consulate or embassy in your country, depending on the
          requirements.
        </p>
      </div>
      <div className="w-4/5 md:w-11/12 flex flex-col gap-6 py-12">
        <p className="Visa-title">
          Visa <span className="text-[#700619] font-semibold">Interview</span>{" "}
        </p>
        <p className="Visa-description">
          Attend the visa interview at the designated Indian consulate or
          embassy on the scheduled date and time.
          <br />
          Present all original documents for verification and be prepared to
          answer questions regarding your medical condition, treatment plan, and
          travel itinerary.
        </p>
      </div>
      <div className="w-4/5 md:w-11/12 flex flex-col gap-6 py-12">
        <p className="Visa-title">
          Visa <span className="text-[#700619] font-semibold">Approval</span>
        </p>
        <p className="Visa-description">
          Upon successful completion of the visa interview and verification
          process, your medical visa to India will be approved.
          <br />
          The duration and validity of the visa will depend on the nature of
          your medical treatment, as specified by the Indian authorities.
          <br />
          Once approved, you'll receive your passport with the visa stamped on
          it.
        </p>
      </div>
    </div>
  );
}
