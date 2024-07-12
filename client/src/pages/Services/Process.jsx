import React,{useEffect} from "react";
import "./Services.scss";

export default function Process() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
      }, []);
  return (
    <div
      className="Process flex gap-8 items-center justify-center w-full flex-col"
      id="Process"
    >
      <div className="relative w-full flex items-end justify-center">
        <img
          src="/assets/images/MedicineInIndiaimg.png"
          alt="Process"
          className="object-cover w-full object-top md:hidden"
          style={{ height: "95vh" }}
        />
        <img
          src="/assets/images/MedicineInIndiaimgphone.png"
          alt="Process"
          className="object-cover w-full hidden md:block"
          style={{ height: "95vh" }}
        />
        <div className="flex flex-col absolute px-8 md:gap-4 md:py-6 md:w-11/12 py-4 items-center Process-div">
          <p className="Process-div-title">Process</p>
          <p className="Process-div-title-subheading">
            Simplified process flow for medical treatment in India
          </p>
        </div>
      </div>
      <p className="Process-title">Process</p>
      <div className="flex md:flex-col w-4/5 md:w-11/12 justify-between md:justify-center md:gap-y-10">
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">1.Patient Inquiry:</p>
          <p className="blog-card-description">
            Receive detailed reports and case history, including full name and
            exact age.
          </p>
        </div>
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">2.Medical Opinion:</p>
          <p className="blog-card-description">
            <ul style={{ listStyleType: "disc", marginLeft: "1vw" }}>
              <li>
                Send reports to partnered super specialty hospitals in India for
                multiple opinions.
              </li>
              <li>Include doctor profiles for reference.</li>
            </ul>
          </p>{" "}
        </div>
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">3. Recommendation & Cost Estimate:</p>
          <p className="blog-card-description">
            <ul style={{ listStyleType: "disc", marginLeft: "1vw" }}>
              <li>
                Forward doctor recommendations, estimated cost, and duration of
                stay to the patient.
              </li>
              <li>
                Allow time for the patient to choose their preferred hospital
                and location.
              </li>
            </ul>
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
          <p className="blog-card-title">4. Visa Assistance:</p>
          <p className="blog-card-description">
            <ul style={{ listStyleType: "disc", marginLeft: "1vw" }}>
              <li>
                Provide assistance letter from the chosen hospital for the
                medical visa process.
              </li>
              <li>
                Collect patient and attendant passport scans for documentation.
              </li>
            </ul>
          </p>
        </div>
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">5. Accommodation & Transportation:</p>
          <p className="blog-card-description">
            <ul style={{ listStyleType: "disc", marginLeft: "1vw" }}>
              <li>
                Compile a list of nearby hotels/guest houses for patient and
                attendant.
              </li>
              <li>Arrange local transportation if needed. </li>
            </ul>
          </p>{" "}
        </div>
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">6. Arrival & Escort:</p>
          <p className="blog-card-description">
            <ul style={{ listStyleType: "disc", marginLeft: "1vw" }}>
              <li>
                Meet patient at the airport and escort to chosen destination
                (hotel or hospital).
              </li>
              <li>Arrange hospital consultation upon request.</li>
            </ul>
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
          <p className="blog-card-title">7. Hospital Assistance:</p>
          <p className="blog-card-description">
            Assign a representative for all appointments, evaluations, and
            treatments.
          </p>
        </div>
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">8. Communication & Updates:</p>
          <p className="blog-card-description">
            Ensure family receives regular updates on patient's treatment
            progress.
          </p>{" "}
        </div>
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">9. Additional Care:</p>
          <p className="blog-card-description">
            Provide pre and post-operative care options, including medication
            assistance.
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
          <p className="blog-card-title">10. Travel Arrangements:</p>
          <p className="blog-card-description">
            Assist with travel plans for patient and attendant, subject to
            doctor's approval.
          </p>
        </div>
        <div className="blog-card">
          <img
            src="/assets/images/servicesimg1.png"
            alt=""
            className="w-full object-cover"
          />
          <p className="blog-card-title">11. Departure & Follow-up:</p>
          <p className="blog-card-description">
            Organize return airport transfers and address post-operative queries
            or follow-up needs
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
