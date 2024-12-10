import { useState } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const steps = ["Process", "Visa", "Plan"];

const Faq = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const [expanded, setExpanded] = useState(false);
  const [innerExpanded, setInnerExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleInnerChange = (panel) => (event, isExpanded) => {
    setInnerExpanded(isExpanded ? panel : false);
  };
  const stepContent = [
    // eslint-disable-next-line react/jsx-key
    <div className="mt-8">
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel1-1"}
        onChange={handleInnerChange("panel1-1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-1a-content"
          id="panel1-1a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            1. Patient Inquiry
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Receive detailed reports and case history, including full name and
            exact age.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel1-2"}
        onChange={handleInnerChange("panel1-2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-2a-content"
          id="panel1-2a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            2. Medical Opinion
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Send reports to partnered super specialty hospitals in India for
            multiple opinions. Include doctor profiles for reference.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel1-3"}
        onChange={handleInnerChange("panel1-3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-3a-content"
          id="panel1-3a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            3. Recommendation & Cost Estimate
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Forward doctor recommendations, estimated cost, and duration of stay
            to the patient. Allow time for the patient to choose their preferred
            hospital and location.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel1-4"}
        onChange={handleInnerChange("panel1-4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-4a-content"
          id="panel1-4a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            4. Visa Assistance
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Provide assistance letter from the chosen hospital for the medical
            visa process. Collect patient and attendant passport scans for
            documentation.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel1-5"}
        onChange={handleInnerChange("panel1-5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-5a-content"
          id="panel1-5a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            5. Accommodation & Transportation
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Compile a list of nearby hotels/guest houses for patient and
            attendant. Arrange local transportation if needed.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel1-6"}
        onChange={handleInnerChange("panel1-6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-6a-content"
          id="panel1-6a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            6. Arrival & Escort
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Meet patient at the airport and escort to chosen destination (hotel
            or hospital). Arrange hospital consultation upon request.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel1-7"}
        onChange={handleInnerChange("panel1-7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-7a-content"
          id="panel1-7a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            7. Hospital Assistance
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Assign a representative for all appointments, evaluations, and
            treatments.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel1-8"}
        onChange={handleInnerChange("panel1-8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-8a-content"
          id="panel1-8a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            8. Communication & Updates
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Ensure family receives regular updates on patient's treatment
            progress.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel1-9"}
        onChange={handleInnerChange("panel1-9")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-9a-content"
          id="panel1-9a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            9. Additional Care
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Provide pre and post-operative care options, including medication
            assistance.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel1-10"}
        onChange={handleInnerChange("panel1-10")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-10a-content"
          id="panel1-10a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            10. Travel Arrangements
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Assist with travel plans for patient and attendant, subject to
            doctor's approval.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel1-11"}
        onChange={handleInnerChange("panel1-11")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-11a-content"
          id="panel1-11a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            11. Departure & Follow-up
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Organize return airport transfers and address post-operative queries
            or follow-up needs.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>,
    <>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel2-1"}
        onChange={handleInnerChange("panel2-1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-1a-content"
          id="panel2-1a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Eligibility
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Medical visas are granted to those seeking medical treatment in
            recognized and reputed hospitals or treatment centers in India. The
            applicant should be seeking specialized medical treatment for which
            they intend to travel to India.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel2-2"}
        onChange={handleInnerChange("panel2-2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-2a-content"
          id="panel2-2a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Documents
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p variant="body2">
            <strong>Passport:</strong> Ensure your passport is valid for at
            least six months beyond your intended stay in India and has at least
            two blank pages for visa stamps.
          </p>
          <p variant="body2">
            <strong>Application Form:</strong> Complete the online visa
            application form accurately. You can find this on the official
            website of the Indian Visa Online.
          </p>
          <p variant="body2">
            <strong>Passport Photos:</strong> Attach recent passport-sized
            photographs according to the specifications mentioned on the visa
            application form.
          </p>
          <p variant="body2">
            <strong>Medical Documents:</strong> You'll need documents supporting
            your medical condition and the treatment you're seeking in India.
            This may include medical reports, diagnosis from a local doctor, and
            a recommendation letter from the hospital or doctor in India stating
            the need for medical treatment.
          </p>
          <p variant="body2">
            <strong>Letter of Invitation:</strong> If applicable, obtain a
            letter of invitation from the hospital or treatment center in India.
          </p>
          <p variant="body2">
            <strong>Financial Documents:</strong> Provide proof of sufficient
            funds to cover your medical expenses and stay in India, such as bank
            statements, sponsorship letters, or evidence of medical insurance
            coverage.
          </p>
          <p variant="body2">
            <strong>Visa Fee:</strong> Pay the visa application fee online as
            per the instructions provided.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel2-3"}
        onChange={handleInnerChange("panel2-3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-3a-content"
          id="panel2-3a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Visa Application Submission
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Once you've completed the online application form and gathered all
            necessary documents, submit your application online through the
            Indian Visa Online portal. You may also need to schedule an
            appointment for a visa interview at the Indian consulate or embassy
            in your country, depending on the requirements.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel2-4"}
        onChange={handleInnerChange("panel2-4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-4a-content"
          id="panel2-4a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Visa Interview
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Attend the visa interview at the designated Indian consulate or
            embassy on the scheduled date and time. Present all original
            documents for verification and be prepared to answer questions
            regarding your medical condition, treatment plan, and travel
            itinerary.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel2-5"}
        onChange={handleInnerChange("panel2-5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-5a-content"
          id="panel2-5a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Visa Approval
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Upon successful completion of the visa interview and verification
            process, your medical visa to India will be approved. The duration
            and validity of the visa will depend on the nature of your medical
            treatment, as specified by the Indian authorities. Once approved,
            you'll receive your passport with the visa stamped on it.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel2-6"}
        onChange={handleInnerChange("panel2-6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-6a-content"
          id="panel2-6a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Extension or Renewal
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            If your medical treatment requires an extended stay beyond the
            validity of your visa, you may apply for an extension or renewal of
            your medical visa through the Foreigners Regional Registration
            Office (FRRO) in India.
          </p>
        </AccordionDetails>
      </Accordion>
    </>,

    <>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel3-1"}
        onChange={handleInnerChange("panel3-1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-1a-content"
          id="panel3-1a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Step 1: Discover Our Services
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Reach out to us via phone call or messaging apps like WhatsApp or
            call at +91 8147695405 to explore the range of services we offer.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel3-2"}
        onChange={handleInnerChange("panel3-2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-2a-content"
          id="panel3-2a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Step 2: Get in Touch
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Complete our inquiry form or share your medical reports to receive
            expert advice from the top four hospitals in India and abroad, free
            of charge.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel3-3"}
        onChange={handleInnerChange("panel3-3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-3a-content"
          id="panel3-3a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Step 3: Receive Prompt Responses
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Expect a reply to your query within 1-2 working days, detailing the
            comprehensive treatment plan tailored to your needs.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel3-4"}
        onChange={handleInnerChange("panel3-4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-4a-content"
          id="panel3-4a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Step 4: Obtain Visa Assistance
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            If a visa is required, provide us with the passport details of the
            patient/attendant to facilitate the visa invitation letter for
            arranging the treatment journey in your desired country.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel3-5"}
        onChange={handleInnerChange("panel3-5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-5a-content"
          id="panel3-5a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Step 5: Coordinate Travel Plans
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            After booking your flight, send us the soft copy of your tickets to
            arrange for seamless pick-up from the airport to the hospital/guest
            house.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel3-6"}
        onChange={handleInnerChange("panel3-6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-6a-content"
          id="panel3-6a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Step 6: Ensure Extra Support (If Necessary)
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Inform us of any special requirements such as air ambulance, car
            ambulance, or wheelchair assistance at the airport for added
            convenience.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel3-7"}
        onChange={handleInnerChange("panel3-7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-7a-content"
          id="panel3-7a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Step 7: Prepare Essential Documents
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Remember to carry essential documents including your passport, visa,
            major credit cards, debit cards, and all medical records of the
            patient.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel3-8"}
        onChange={handleInnerChange("panel3-8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-8a-content"
          id="panel3-8a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Step 8: Arrange Accommodation
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            We offer a range of accommodation options, from luxurious hotels to
            homelike guest houses, ensuring your comfort and security within
            your budget. In emergencies, patients can be directly admitted to
            the hospital with round-the-clock assistance provided.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel3-9"}
        onChange={handleInnerChange("panel3-9")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-9a-content"
          id="panel3-9a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Step 9: Facilitate Treatment Procedures
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Benefit from priority consultations and appointments with chief
            doctors prior to your arrival at the hospital/clinic. Throughout the
            treatment process and recovery period, we provide comprehensive
            assistance and support.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel3-10"}
        onChange={handleInnerChange("panel3-10")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-10a-content"
          id="panel3-10a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Step 10: Ensure Continued Care
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            Even after returning to your home country, rest assured that we
            remain committed to your continued care and recovery. Our support
            extends beyond your stay, with follow-up consultations and
            assistance available as needed.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="px-1 py-3"
        expanded={innerExpanded === "panel3-11"}
        onChange={handleInnerChange("panel3-11")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-11a-content"
          id="panel3-11a-header"
        >
          <p className="family-sora text-lightblue text-base font-semibold">
            Step 11: Facilitate the Departure
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="family-sora">
            As your treatment concludes, we assist in coordinating your
            departure, ensuring a smooth and hassle-free journey back to your
            home country.
          </p>
        </AccordionDetails>
      </Accordion>
    </>,
  ];

  return (
    <div className="flex w-full flex-col items-center py-36">
      <div className="w-3/4">
        <div className="mx-auto w-1/2">
          {" "}
          <Stepper
            nonLinear
            activeStep={activeStep}
            sx={{
              "& .MuiStepIcon-root": {
                fontSize: 40,
                color: "gray",
                "&.Mui-active": {
                  color: "blue",
                },
                "&.Mui-completed": {
                  color: "green",
                },
              },
              "& .MuiStepLabel-label": {
                color: "black",
                fontSize: "16px",
              },
            }}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton
                  color="inherit"
                  onClick={handleStep(index)}
                  sx={{
                    "& .MuiStepIcon-root": {
                      fontSize: 40,
                      color: "gray",
                      "&.Mui-active": {
                        color: "#00367d",
                      },
                      "&.Mui-completed": {
                        color: "#00367d",
                      },
                    },
                    "& .MuiStepLabel-label": {
                      color: "black",
                      fontSize: "16px",
                      fontWeight: activeStep === index ? "bold" : "normal",
                    },
                  }}
                >
                  <p className="family-sora text-xl font-bold">{label}</p>
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </div>

        <div className="mt-12">{stepContent[activeStep]}</div>
      </div>
    </div>
  );
};

export default Faq;
