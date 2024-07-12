import React, { useEffect, useState } from "react";
import "./Speciality.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Speciality() {
  const { speciality } = useParams();
  const [selectedSpeciality, setselectedSpeciality] = useState();
  const [expandedPanel, setExpandedPanel] = useState(null);
  console.log(speciality);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  const [specailities, setspecailities] = useState([
    {
      link: "cardiac",
      name: "Cardiac",
      desc: "From routine procedures to complex surgeries, India provides comprehensive cardiac care tailored to individual needs.",
      about:
        "India has emerged as a leading destination for cardiac treatment, offering world-class medical facilities, renowned cardiologists, and advanced technologies at a fraction of the cost compared to many Western countries. From routine procedures to complex surgeries, India provides comprehensive cardiac care tailored to individual needs.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
      faq: [
        {
          question: "What is cardiology?",
          answer:
            "Cardiology is the branch of medicine that deals with the study, diagnosis, and treatment of disorders related to the heart and blood vessels (the cardiovascular system).",
        },
        {
          question: "What are the risk factors for heart disease?",
          answer:
            "Risk factors for heart disease include high blood pressure, high cholesterol, smoking, diabetes, obesity, sedentary lifestyle, family history of heart disease, and age.",
        },
        {
          question: "How is heart disease diagnosed?",
          answer:
            "Heart disease can be diagnosed through various tests such as electrocardiogram (ECG/EKG), echocardiogram, stress test, cardiac catheterization, and blood tests to measure cardiac enzymes and biomarkers.",
        },
        {
          question: "What are the treatment options for heart disease?",
          answer:
            "Treatment options for heart disease depend on the specific condition but may include lifestyle modifications (diet, exercise, smoking cessation), medications (such as statins, beta-blockers, and ACE inhibitors), procedures (angioplasty, stent placement, bypass surgery), and in severe cases, heart transplantation.",
        },
        {
          question: "What is the role of a cardiologist?",
          answer:
            "A cardiologist is a medical doctor who specializes in diagnosing and treating heart and blood vessel diseases. They are trained to interpret various diagnostic tests and recommend appropriate treatments tailored to each patient's needs.",
        },
        {
          question: "How can I prevent heart disease?",
          answer:
            "To prevent heart disease, it's important to maintain a healthy lifestyle by eating a balanced diet, exercising regularly, maintaining a healthy weight, avoiding smoking, limiting alcohol intake, managing stress, and getting regular check-ups with your healthcare provider.",
        },
        {
          question: "What should I do in case of a heart attack?",
          answer:
            "In case of a heart attack, it's crucial to seek emergency medical help immediately by calling emergency services (such as 911 in the United States). While waiting for help, you can assist the person by having them sit or lie down, loosening tight clothing, and administering aspirin if available and not contraindicated.",
        },
        {
          question:
            "Are there any lifestyle changes I can make to improve my heart health?",
          answer:
            "Yes, adopting a heart-healthy lifestyle can significantly improve heart health. This includes eating a diet rich in fruits, vegetables, whole grains, and lean proteins, exercising regularly, quitting smoking, limiting alcohol consumption, managing stress, and maintaining a healthy weight.",
        },
        {
          question:
            "How can I find a cardiologist or cardiac care facility in India?",
          answer:
            "You can find a cardiologist or cardiac care facility in India by consulting with your primary care physician for recommendations, researching online directories of hospitals and clinics, or contacting medical tourism agencies that specialize in arranging healthcare services in India.",
        },
      ],
      blog: [
        {
          blog_title: "Specifications and Benifits",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Cutting-edge technology",
              desc: "Indian hospitals are equipped with the latest diagnostic and therapeutic equipment, ensuring precise diagnosis and effective treatment",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Experienced specialists",
              desc: "Cardiologists in India are renowned globally for their expertise and dedication to patient care.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Cost-effectiveness",
              desc: "Cardiac treatment in India is significantly more affordable compared to many Western countries, without compromising on quality or safety.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Personalized care",
              desc: " Patients receive individualized treatment plans and compassionate support throughout their medical journey.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Seamless experience",
              desc: "Many hospitals in India offer assistance with travel arrangements, accommodation, and visa facilitation for international patients.",
            },
          ],
        },
        {
          blog_title: "Common Cardiac Ailments          ",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title:
                "Coronary Artery Disease (CAD)/Coronary Angioplasty and Stenting",
              desc: "<ul><li>A minimally invasive procedure to open blocked arteries using a balloon catheter and inserting a stent to restore blood flow to the heart muscle.              </li><li>Highly effective in treating CAD and reducing symptoms like chest pain and shortness of breath.              </li><li>Advanced techniques such as drug-eluting stents ensure long-term efficacy.              </li></ul>",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title:
                "Congenital Heart Defects/Coronary Artery Bypass Grafting (CABG):",
              desc: "<ul><li>Surgical procedure to bypass blocked arteries by grafting blood vessels from other parts of the body to restore normal blood flow to the heart.              </li><li>Recommended for patients with severe CAD or multiple blockages.              </li><li>India boasts internationally acclaimed cardiac surgeons who perform CABG with precision and excellent outcomes.              </li></ul>",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title:
                "Heart Valve Disorders/Valve Replacement/Repair              ",
              desc: "<ul><li>Surgical or minimally invasive procedures to repair or replace damaged heart valves.              </li><li>Various options available, including mechanical and biological valves, as well as transcatheter techniques for high-risk patients.              </li><li>Expert cardiac teams in India ensure optimal valve function and patient recovery.              </li></ul>",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Arrhythmias/Pacemaker Implantation              ",
              desc: "<ul><li>A procedure to implant a small device that helps regulate abnormal heart rhythms by sending electrical impulses to the heart.              </li><li>India offers state-of-the-art pacemakers with advanced features and longevity.              </li><li>Experienced cardiologists ensure accurate placement and programming for optimal patient outcomes.              </li></ul>",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Heart Failure/Heart Transplant              ",
              desc: "<ul><li>Complex surgical procedure involving the replacement of a diseased heart with a healthy donor heart.              </li><li>Reserved for end-stage heart failure patients who have exhausted other treatment options.              </li><li>India has well-established transplant programs with highly skilled surgeons and comprehensive post-transplant care.              </li></ul>",
            },
          ],
        },
      ],
    },
    {
      link: "liver-transplantation",
      name: "Liver Transplantation",
      desc: "Liver transplantation is a surgical procedure where a diseased or damaged liver is replaced with a healthy liver from a donor",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
      about:
        "Liver transplantation is a surgical procedure where a diseased or damaged liver is replaced with a healthy liver from a donor. This procedure is typically performed on patients with end-stage liver disease or acute liver failure and offers a chance for improved quality of life and prolonged survival.",
      blog: [
        {
          blog_title: "Specifications and Benifits",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "1. Patient Evaluation",
              desc: "Patients undergo a thorough evaluation by a transplant team to determine if they are suitable candidates for transplantation. Evaluation includes medical history, physical examination, laboratory tests, imaging studies, and psychosocial assessment.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "2. Donor Selection",
              desc: "Donors can be living or deceased. Living donors are typically family members or individuals willing to donate a portion of their liver. Deceased donors are individuals who have consented to organ donation or whose families have consented after their death.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "3. Pre-transplant Preparation",
              desc: "Patients undergo pre-transplant medical optimization to ensure they are in the best possible health for surgery. This may include managing underlying medical conditions, such as hepatitis or cirrhosis.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "4. Matching and Compatibility",
              desc: "Compatibility between donor and recipient is assessed through blood tests and tissue typing to minimize the risk of rejection. ABO blood group compatibility is crucial, and cross-matching is performed to assess compatibility further.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "5. Surgical Procedure",
              desc: "Liver transplant surgery involves removing the diseased liver (total or partial) and implanting the donor liver. The new liver is typically placed in the upper abdomen and connected to the patient's blood vessels and bile ducts.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "6. Post-operative Care",
              desc: "Patients require intensive care and close monitoring in the immediate post-operative period to prevent complications and ensure proper functioning of the transplanted liver. Immunosuppressive medications are prescribed to prevent rejection of the donor organ.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "7. Immunosuppression",
              desc: "Patients need to take immunosuppressive medications for life to prevent rejection. These medications suppress the immune system to prevent it from attacking the transplanted liver.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "8. Recovery and Rehabilitation",
              desc: "Patients undergo a period of recovery in the hospital followed by ongoing monitoring as an outpatient. Rehabilitation may include dietary modifications, medication management, and lifestyle changes.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "9. Long-term Follow-up",
              desc: "Long-term follow-up is essential to monitor liver function, manage complications, and adjust medications as needed. Regular visits to the transplant center are scheduled for monitoring and support.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "10. Complications and Risks",
              desc: "Complications can include rejection, infection, bile duct complications, and side effects of immunosuppressive medications. Close monitoring and prompt intervention are crucial for managing complications.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "11. Success Rates",
              desc: "Liver transplantation has high success rates, with most patients experiencing improved quality of life and long-term survival. Success rates vary depending on factors such as donor-recipient compatibility, underlying liver disease, and overall health.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "12. Cost and insurance",
              desc: "Liver transplantation can be expensive, including pre-transplant evaluation, surgery, post-operative care, and lifelong medication costs. Many insurance plans cover transplantation, but patients should check their coverage and discuss financial concerns with the transplant team",
            },
          ],
        },
      ],
    },
    {
      link: "bone-marrow-transplant",
      name: "Bone Marrow Transplantation",
      desc: "Bone marrow transplant, also known as hematopoietic stem cell transplant (HSCT), is a procedure where diseased or damaged bone marrow is replaced with healthy stem cells.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
      about:
        "Bone marrow transplantation is used to treat various conditions, including leukemia, lymphoma, multiple myeloma, and certain genetic disorders. Here's a comprehensive overview of bone marrow transplantation:",
      faq: [
        {
          question: "What is a bone marrow transplant (BMT)?",
          answer:
            "A bone marrow transplant is a medical procedure where diseased or damaged bone marrow is replaced with healthy stem cells. These stem cells can come from a donor (allogeneic transplant) or from the patient themselves (autologous transplant).",
        },
        {
          question:
            "What conditions can be treated with a bone marrow transplant?",
          answer:
            "Bone marrow transplantation is used to treat various conditions, including leukemia, lymphoma, multiple myeloma, aplastic anemia, and certain genetic disorders.",
        },
        {
          question:
            "How do I know if I'm a candidate for a bone marrow transplant?",
          answer:
            "Eligibility for a bone marrow transplant is determined by a comprehensive evaluation performed by a transplant team. Factors such as the underlying disease, overall health, and availability of a suitable donor are taken into consideration.",
        },
        {
          question:
            "What is the difference between allogeneic and autologous transplantation?",
          answer:
            "In allogeneic transplantation, stem cells are obtained from a donor who is usually a family member or unrelated volunteer. In autologous transplantation, the patient's own stem cells are collected and stored prior to high-dose chemotherapy or radiation therapy.",
        },
        {
          question: "How long does the bone marrow transplant procedure take?",
          answer:
            "The bone marrow transplant procedure itself typically takes a few hours. However, the entire process from pre-transplant evaluation to post-transplant recovery can take several weeks to months.",
        },
        {
          question:
            "What are the risks and complications associated with bone marrow transplantation?",
          answer:
            "Risks and complications of bone marrow transplantation include infection, graft failure, graft-versus-host disease (GVHD), organ toxicity, and long-term effects on fertility and quality of life.",
        },
        {
          question: "How successful is bone marrow transplantation?",
          answer:
            "Success rates of bone marrow transplantation vary depending on factors such as the underlying disease, donor-recipient compatibility, and the patient's overall health. Advances in transplantation techniques and supportive care have improved outcomes, with many patients achieving long-term remission or cure.",
        },
        {
          question:
            "What is the recovery process like after a bone marrow transplant?",
          answer:
            "The recovery process after a bone marrow transplant involves a period of hospitalization followed by ongoing monitoring and supportive care. Patients may experience side effects such as fatigue, nausea, and increased risk of infection during this time.",
        },
        {
          question: "Will I need to take medications after the transplant?",
          answer:
            "Patients who undergo allogeneic transplantation will need to take immunosuppressive medications to prevent graft-versus-host disease (GVHD). Other medications may also be prescribed to prevent infection and manage other complications.",
        },
        {
          question:
            "Will I be able to resume normal activities after the transplant?",
          answer:
            "The ability to resume normal activities after a bone marrow transplant varies from patient to patient and depends on factors such as the underlying disease and the presence of complications. It's important to follow your transplant team's recommendations for activity and lifestyle modifications.",
        },
      ],
      blog: [
        {
          blog_title: "Specifications and Benifits",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "1. Patient Evaluation",
              desc: "Patients undergo a comprehensive evaluation by a transplant team to determine if they are suitable candidates for transplantation. Evaluation includes medical history, physical examination, laboratory tests, imaging studies, and assessment of overall health.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "2. Donor Selection",
              desc: "Donors for allogeneic transplants are typically family members or unrelated donors who are HLA-matched to the recipient. Donors undergo testing to ensure compatibility, including blood tests and HLA typing. For autologous transplants, the patient's own stem cells are collected and stored prior to high-dose chemotherapy or radiation therapy.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "3. Pre-transplant Conditioning",
              desc: "Prior to transplantation, patients may undergo conditioning therapy, which involves chemotherapy and/or radiation therapy to destroy diseased cells and suppress the immune system. Conditioning therapy helps create space in the bone marrow for the transplanted cells and reduces the risk of rejection.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "4. Stem Cell Collection",
              desc: "For allogeneic transplants, stem cells are collected from the donor's bone marrow or peripheral blood using apheresis. For autologous transplants, the patient's stem cells are collected from their own blood or bone marrow prior to conditioning therapy.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "5. Transplant Procedure",
              desc: "The transplant procedure involves infusing the collected stem cells into the patient's bloodstream through a central venous catheter. The stem cells travel to the bone marrow, where they engraft and begin producing healthy blood cells.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "6. Engraftment and Recovery",
              desc: "Engraftment refers to the successful establishment of the transplanted cells in the patient's bone marrow. Patients undergo a period of recovery in the hospital, during which they are closely monitored for signs of engraftment, infection, and other complications.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "7. Post-transplant Care",
              desc: "Patients require ongoing monitoring and supportive care to prevent and manage complications. Immunocompromised precautions are taken to reduce the risk of infection, and patients may receive prophylactic medications.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "8. Immunosuppression",
              desc: "Patients who undergo allogeneic transplantation receive immunosuppressive medications to prevent graft-versus-host disease (GVHD), a potential complication where the donor's immune cells attack the recipient's tissues.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "9. Long-term Follow-up",
              desc: "Long-term follow-up is essential to monitor for disease recurrence, late effects of treatment, and potential complications such as GVHD. Patients may require ongoing medical care and support from a multidisciplinary team.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "10. Success Rates",
              desc: "The success of bone marrow transplantation depends on various factors, including the underlying disease, donor-recipient compatibility, and the patient's overall health. Advances in transplantation techniques and supportive care have improved outcomes, with many patients achieving long-term remission or cure.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "11. Complications and Risks",
              desc: "Complications of bone marrow transplantation can include infection, graft failure, graft-versus-host disease (GVHD), organ toxicity, and long-term effects on fertility and quality of life. Close monitoring and prompt intervention are crucial for managing complications.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "12. Cost and Insurance",
              desc: "Bone marrow transplantation can be expensive, including pre-transplant evaluation, transplant procedure, post-transplant care, and long-term follow-up. Many insurance plans cover transplantation, but patients should check their coverage and discuss financial concerns with the transplant team.",
            },
          ],
        },
      ],
    },
    {
      link: "heart-transplantation",
      name: "Heart Transplantation",
      desc: "Heart transplantation is a complex surgical procedure where a diseased or damaged heart is replaced with a healthy heart from a donor.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
      about:
        "This life-saving procedure is typically reserved for patients with end-stage heart failure or severe coronary artery disease who have exhausted other treatment options. Here's a comprehensive overview of heart transplantation:",
      blog: [
        {
          blog_title: "Specifications and Benifits",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "1. Patient Evaluation",
              desc: "Patients undergo a thorough evaluation by a transplant team to assess their suitability for transplantation. Evaluation includes medical history, physical examination, laboratory tests, imaging studies, and psychosocial assessment.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "2. Donor Selection",
              desc: "Donors are typically deceased individuals who have consented to organ donation or whose families have consented after their death. Compatibility between donor and recipient is assessed based on blood type, size, and tissue matching to minimize the risk of rejection.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "3. Pre-transplant Preparation",
              desc: "Patients undergo medical optimization to ensure they are in the best possible health for surgery. This may include managing underlying medical conditions, such as hypertension or diabetes.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "4. Matching and Compatibility",
              desc: "Donor-recipient matching is crucial for successful transplantation. Blood type compatibility and human leukocyte antigen (HLA) matching are assessed to reduce the risk of rejection.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "5. Surgical Procedure",
              desc: "Heart transplant surgery involves removing the diseased heart and implanting the donor heart. The new heart is typically placed in the chest cavity and connected to the recipient's blood vessels and remaining heart structures.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "6. Post-operative Care",
              desc: "Patients require intensive care and close monitoring in the immediate post-operative period to prevent complications and ensure proper functioning of the transplanted heart. Immunosuppressive medications are prescribed to prevent rejection of the donor organ.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "7. Immunosuppression",
              desc: "Patients need to take immunosuppressive medications for life to prevent rejection. These medications suppress the immune system to prevent it from attacking the transplanted heart.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "8. Recovery and Rehabilitation",
              desc: "Patients undergo a period of recovery in the hospital followed by ongoing monitoring as an outpatient. Rehabilitation may include physical therapy, cardiac rehabilitation, and lifestyle modifications.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "9. Long-term Follow-up",
              desc: "Long-term follow-up is essential to monitor heart function, manage complications, and adjust medications as needed. Regular visits to the transplant center are scheduled for monitoring and support.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "10. Complications and Risks",
              desc: "Complications can include rejection, infection, cardiac allograft vasculopathy (narrowing of the arteries in the transplanted heart), and side effects of immunosuppressive medications. Close monitoring and prompt intervention are crucial for managing complications.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "11. Success Rates",
              desc: "Heart transplantation has improved significantly over the years, with most patients experiencing improved quality of life and long-term survival. Success rates vary depending on factors such as donor-recipient compatibility, underlying heart disease, and overall health.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "12. Cost and Insurance",
              desc: "Heart transplantation can be expensive, including pre-transplant evaluation, surgery, post-operative care, and lifelong medication costs. Many insurance plans cover transplantation, but patients should check their coverage and discuss financial concerns with the transplant team.",
            },
          ],
        },
      ],
    },
    {
      link: "kidney-transplantation",
      name: "Kidney Transplantation",
      desc: "Kidney transplantation, also known as renal transplantation, is a surgical procedure where a healthy kidney from a donor is transplanted into a patient whose kidneys have failed or are no longer functioning properly.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
      about:
        "This procedure offers a chance for improved quality of life and longevity for patients with end-stage renal disease (ESRD) or severe kidney dysfunction. Here's a comprehensive overview of kidney/renal transplantation:",
      blog: [
        {
          blog_title: "Specifications and Benifits",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "1. Patient Evaluation",
              desc: "Patients with kidney failure undergo a thorough evaluation by a transplant team to determine if they are suitable candidates for transplantation. Evaluation includes medical history, physical examination, laboratory tests, imaging studies, and psychosocial assessment.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "2. Donor Selection",
              desc: "Potential donors can be living or deceased. Living donors are often family members or individuals willing to donate a kidney altruistically. Deceased donors are individuals who have consented to organ donation or whose families have consented after their death.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "3. Pre-transplant Preparation",
              desc: "Patients undergo pre-transplant medical optimization to ensure they are in the best possible health for surgery. This may include managing underlying medical conditions, such as diabetes or hypertension.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "4. Matching and Compatibility",
              desc: "Donor-recipient compatibility is assessed through blood tests and tissue typing to minimize the risk of rejection. Human leukocyte antigen (HLA) matching is crucial for successful transplantation.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "5. Surgical Procedure",
              desc: "The transplant surgery involves removing the diseased kidney (if present) and implanting the donor kidney. The new kidney is typically placed in the lower abdomen and connected to the patient's blood vessels and bladder.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "6. Post-operative Care",
              desc: "Patients require close monitoring in the immediate post-operative period to prevent complications and ensure proper functioning of the transplanted kidney. Immunosuppressive medications are prescribed to prevent rejection of the donor organ.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "7. Immunosuppression",
              desc: "Patients need to take immunosuppressive medications for life to prevent rejection. These medications suppress the immune system to prevent it from attacking the transplanted kidney.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "8. Recovery and Rehabilitation",
              desc: "Patients undergo a period of recovery in the hospital followed by ongoing monitoring as an outpatient. Rehabilitation may include dietary modifications, medication management, and lifestyle changes.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "9. Long-term Follow-up",
              desc: "Long-term follow-up is essential to monitor kidney function, manage complications, and adjust medications as needed. Regular visits to the transplant center are scheduled for monitoring and support.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "10. Complications and Risks",
              desc: "Complications can include rejection, infection, side effects of immunosuppressive medications, and recurrence of underlying kidney disease. Close monitoring and prompt intervention are crucial for managing complications.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "11. Success Rates",
              desc: "Kidney transplantation has high success rates, with most patients experiencing improved quality of life and long-term survival. Success rates vary depending on factors such as donor-recipient compatibility, age, and overall health.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "12. Cost and Insurance",
              desc: "Kidney transplantation can be expensive, including pre-transplant evaluation, surgery, post-operative care, and lifelong medication costs. Many insurance plans cover transplantation, but patients should check their coverage and discuss financial concerns with the transplant team.",
            },
          ],
        },
      ],
    },
    {
      link: "gastroenterology",
      name: "Gastroenterology",
      desc: "Gastroenterology is the branch of medicine that focuses on the diagnosis and treatment of disorders related to the digestive system, including the esophagus, stomach, intestines, liver, pancreas, and gallbladder.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
      about:
        "Gastroenterology is the branch of medicine that focuses on the diagnosis and treatment of disorders related to the digestive system, including the esophagus, stomach, intestines, liver, pancreas, and gallbladder. India has emerged as a leading destination for gastroenterology treatment, offering advanced medical facilities, experienced gastroenterologists, and comprehensive care for patients with a wide range of digestive disorders.",
      blog: [
        {
          blog_title: "Medical Procedures and Treatments",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "1. Patient Evaluation",
              desc: "<b>Upper Endoscopy (Esophagogastroduodenoscopy, or EGD):</b>Allows visualization of the esophagus, stomach, and duodenum to diagnose conditions such as ulcers, inflammation, and tumors. <br/> <b>Colonoscopy:</b> Examines the large intestine (colon) for abnormalities, including polyps, tumors, and inflammation, and can also be used for cancer screening.<br/><b>Endoscopic Retrograde Cholangiopancreatography (ERCP):</b> Combines endoscopy and X-ray imaging to diagnose and treat conditions affecting the bile ducts and pancreas.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "2. Laparoscopic Surgery:",
              desc: "Minimally invasive surgical procedures performed through small incisions using a camera and specialized instruments.              <br/>Common laparoscopic procedures in gastroenterology include cholecystectomy (gallbladder removal), hernia repair, and anti-reflux surgery.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "3. Liver Transplantation:",
              desc: "Surgical procedure to replace a diseased or failing liver with a healthy liver from a deceased or living donor.                   <br/>India has internationally recognized liver transplant programs with experienced surgeons and excellent outcomes, offering hope to patients with end-stage liver disease.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "4. Bariatric Surgery:",
              desc: "Surgical procedures to help obese individuals lose weight by reducing the size of the stomach or bypassing parts of the digestive system.<br/>Bariatric surgery can improve obesity-related health conditions such as type 2 diabetes, hypertension, and sleep apnea.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "5. Medical Management:",
              desc: "Pharmacological treatments are available for various gastrointestinal disorders, including acid-suppressing medications for GERD, anti-inflammatory drugs for inflammatory bowel disease, and antiviral medications for hepatitis.",
            },
          ],
        },
        {
          blog_title: "Common Gastrointestinal Disorders",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Gastroesophageal Reflux Disease (GERD)",
              desc: "Gastroesophageal reflux disease (GERD) is a chronic condition characterized by the reflux of stomach acid into the esophagus, leading to symptoms such as heartburn, regurgitation, chest pain, difficulty swallowing, and chronic cough. GERD occurs when the lower esophageal sphincter (LES), a muscular valve that normally prevents stomach contents from flowing back into the esophagus, becomes weak or relaxes inappropriately. Risk factors for GERD include obesity, hiatal hernia, pregnancy, smoking, certain medications, and a diet high in fatty or acidic foods. Treatment options for GERD include lifestyle modifications (such as weight loss, dietary changes, and avoiding triggers), medications (such as proton pump inhibitors, H2 receptor antagonists, and antacids), and in severe cases, surgical procedures to reinforce the LES or reconstruct the esophagus.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Peptic Ulcer Disease",
              desc: "Peptic ulcer disease is a condition characterized by the formation of open sores (ulcers) in the lining of the stomach, small intestine, or esophagus. Peptic ulcers are primarily caused by infection with Helicobacter pylori bacteria or prolonged use of nonsteroidal anti-inflammatory drugs (NSAIDs) such as aspirin and ibuprofen. Symptoms of peptic ulcers may include abdominal pain, bloating, nausea, vomiting, and bleeding. Treatment for peptic ulcer disease involves a combination of medications to eradicate H. pylori infection (such as antibiotics and proton pump inhibitors), acid-suppressing drugs to reduce stomach acid production, and lifestyle modifications (such as avoiding NSAIDs and alcohol).",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Irritable Bowel Syndrome (IBS)",
              desc: "Irritable bowel syndrome (IBS) is a common gastrointestinal disorder characterized by abdominal pain or discomfort, bloating, and changes in bowel habits such as diarrhea, constipation, or alternating diarrhea and constipation. The exact cause of IBS is unknown, but factors such as abnormal intestinal contractions, visceral hypersensitivity, intestinal inflammation, and alterations in gut microbiota may contribute to its development. IBS is a chronic condition that can significantly impact quality of life, but it does not cause permanent damage to the intestines or increase the risk of serious diseases such as colorectal cancer. Treatment for IBS focuses on symptom management and may include dietary modifications, stress reduction techniques, medications (such as antispasmodics, laxatives, and antidepressants), and behavioral therapy.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title:
                "Inflammatory Bowel Disease (Crohn's Disease and Ulcerative Colitis)",
              desc: "Inflammatory bowel disease (IBD) refers to a group of chronic inflammatory conditions of the gastrointestinal tract, including Crohn's disease and ulcerative colitis. Crohn's disease can affect any part of the digestive tract, from the mouth to the anus, and is characterized by inflammation, deep ulcers, and thickening of the intestinal wall. Ulcerative colitis primarily affects the colon and rectum, causing inflammation and ulcers in the lining of the colon. Symptoms of IBD may include abdominal pain, diarrhea (which may be bloody), weight loss, fatigue, and fever. The exact cause of IBD is unclear, but it is believed to involve a combination of genetic, environmental, and immune factors. Treatment for IBD aims to control inflammation, alleviate symptoms, and induce and maintain remission through medications (such as corticosteroids, immunomodulators, biologics), dietary modifications, lifestyle changes, and in severe cases, surgery to remove affected portions of the intestine.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Gallstones and Gallbladder Disorders",
              desc: "Gallstones are hardened deposits of digestive fluid that form in the gallbladder, a small organ located beneath the liver. Gallstones can vary in size and may cause symptoms such as abdominal pain (particularly in the upper right abdomen), nausea, vomiting, bloating, and jaundice (yellowing of the skin and eyes). Risk factors for gallstones include obesity, rapid weight loss, a diet high in cholesterol and fat, certain medications, and family history. In addition to gallstones, other gallbladder disorders include cholecystitis (inflammation of the gallbladder), choledocholithiasis (gallstones in the bile duct), and cholangitis (infection of the bile duct). Treatment for gallstones and gallbladder disorders may involve lifestyle modifications (such as dietary changes and weight management), medications (such as bile acid medications to dissolve gallstones), and surgical removal of the gallbladder (cholecystectomy).",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Liver Diseases (Hepatitis, Cirrhosis, and Liver Cancer)",
              desc: "Liver diseases encompass a range of conditions that affect the liver, including hepatitis, cirrhosis, fatty liver disease, liver cancer, and others. Hepatitis refers to inflammation of the liver and can be caused by viral infections (such as hepatitis A, B, and C), alcohol abuse, autoimmune disorders, and certain medications and toxins. Cirrhosis is a late stage of scarring (fibrosis) of the liver caused by chronic liver disease, leading to impaired liver function and potential complications such as portal hypertension, ascites (fluid buildup in the abdomen), and hepatic encephalopathy. Liver cancer, or hepatocellular carcinoma, can develop as a primary cancer originating in the liver or as a secondary cancer metastasizing from other parts of the body. Symptoms of liver disease may include jaundice, abdominal pain, swelling, fatigue, nausea, and unintended weight loss. Treatment for liver diseases depends on the specific condition but may include antiviral medications for viral hepatitis, lifestyle modifications (such as abstinence from alcohol), medications to manage symptoms and complications, liver transplantation for end-stage liver disease, and targeted therapies for liver cancer.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Pancreatitis and Pancreatic Cancer",
              desc: "Pancreatitis is inflammation of the pancreas, a gland located behind the stomach that plays a key role in digestion and blood sugar regulation. Acute pancreatitis is usually a sudden and severe condition, often caused by gallstones or excessive alcohol consumption, and can lead to symptoms such as severe abdominal pain, nausea, vomiting, and fever. Chronic pancreatitis is a long-term condition characterized by persistent inflammation and scarring of the pancreas, resulting in abdominal pain, digestive problems, and diabetes. Pancreatic cancer is a malignant tumor that originates in the cells of the pancreas and is often diagnosed at an advanced stage due to nonspecific symptoms and lack of early detection methods. Symptoms of pancreatic cancer may include abdominal pain, jaundice, unexplained weight loss, loss of appetite, and digestive problems. Treatment for pancreatitis and pancreatic cancer may include pain management, dietary modifications, medications (such as pancreatic enzymes and insulin), surgery, chemotherapy, radiation therapy, and targeted therapies.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Colorectal Cancer",
              desc: "Colorectal cancer, also known as colon cancer or rectal cancer, is cancer that develops in the colon or rectum, which are parts of the large intestine. Colorectal cancer often begins as benign polyps (abnormal growths) in the colon or rectum and can gradually progress to cancerous tumors. Risk factors for colorectal cancer include age, family history, personal history of polyps or colorectal cancer, inflammatory bowel disease, obesity, smoking, excessive alcohol consumption, and a diet high in red and processed meats and low in fiber. Symptoms of colorectal cancer may include changes in bowel habits, rectal bleeding, blood in the stool, abdominal pain or cramping, weakness or fatigue, and unintended weight loss. Screening tests such as colonoscopy, fecal occult blood test (FOBT), and stool DNA test can help detect colorectal cancer early when it is most treatable. Treatment for colorectal cancer typically involves surgery to remove the cancerous tissue, chemotherapy, radiation therapy, targeted therapy, and immunotherapy.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Gastrointestinal Bleeding",
              desc: "Gastrointestinal bleeding refers to bleeding that occurs in the digestive tract, from the esophagus to the rectum. Gastrointestinal bleeding can manifest as hematemesis (vomiting blood), melena (black, tarry stools), hematochezia (bright red blood in stools), or occult bleeding (detectable only through laboratory tests). Causes of gastrointestinal bleeding may include peptic ulcers, esophageal varices, gastritis, diverticulosis, colorectal polyps, hemorrhoids, inflammatory bowel disease, and gastrointestinal cancers. Gastrointestinal bleeding can range from mild to life-threatening, requiring prompt evaluation and treatment. Treatment for gastrointestinal bleeding depends on the underlying cause and may include medications (such as proton pump inhibitors, antibiotics, or blood-clotting agents), endoscopic interventions (such as endoscopic hemostasis or band ligation), angiographic embolization, or surgery.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Celiac Disease",
              desc: "Celiac disease is a chronic autoimmune disorder characterized by an abnormal immune response to gluten, a protein found in wheat, barley, and rye. In individuals with celiac disease, consumption of gluten triggers an immune reaction that damages the lining of the small intestine, leading to malabsorption of nutrients and various gastrointestinal and extra-intestinal symptoms. Symptoms of celiac disease may include diarrhea, abdominal pain, bloating, weight loss, fatigue, anemia, osteoporosis, dermatitis herpetiformis (a skin rash), and neurological symptoms. Diagnosis of celiac disease involves blood tests to detect specific antibodies and confirmation with a small bowel biopsy. The only treatment for celiac disease is strict adherence to a gluten-free diet, which typically results in resolution of symptoms and intestinal healing. Additionally, patients may require nutritional supplementation and monitoring for complications such as osteoporosis and other autoimmune disorders.",
            },
          ],
        },
      ],
    },
    {
      link: "cancer",
      name: "Cancer",
      desc: "India has emerged as a leading destination for cancer treatment, offering state-of-the-art medical facilities, renowned oncologists, and advanced treatment modalities at affordable costs.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
      about:
        "India has emerged as a leading destination for cancer treatment, offering state-of-the-art medical facilities, renowned oncologists, and advanced treatment modalities at affordable costs. With a holistic approach to cancer care, India provides comprehensive treatment options tailored to individual needs, coupled with compassionate support for patients and their families.        ",
      blog: [
        {
          blog_title: "Causes of cancer",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Genetic Mutations",
              desc: "Changes in the DNA of cells can lead to uncontrolled cell growth and cancer formation. These mutations can be inherited or acquired due to exposure to carcinogens.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Carcinogens",
              desc: "Environmental factors such as tobacco smoke, ultraviolet (UV) radiation, asbestos, certain chemicals, and ionizing radiation can damage DNA and increase the risk of cancer.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Lifestyle Factors",
              desc: "Poor dietary habits, lack of physical activity, obesity, excessive alcohol consumption, and smoking contribute to the development of cancer.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Viral Infections",
              desc: "Infections with certain viruses, such as human papillomavirus (HPV), hepatitis B virus (HBV), and Epstein-Barr virus (EBV), can increase the risk of cancer.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Hormonal Factors",
              desc: "Hormonal imbalances, such as those seen in hormone replacement therapy or certain reproductive conditions, may increase the risk of hormone-related cancers like breast and prostate cancer.",
            },
          ],
        },
        {
          blog_title: "Stages of Cancer",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Stage 0",
              desc: "Cancer in situ, where abnormal cells are present but have not spread to nearby tissues.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Stage I",
              desc: "Cancer is localized and small, typically confined to the organ of origin.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Stage II",
              desc: "Cancer has grown larger and may have spread to nearby lymph nodes but has not yet metastasized to distant sites.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Stage III",
              desc: "Cancer has spread to nearby tissues or lymph nodes, indicating regional spread.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Stage IV",
              desc: "Cancer has metastasized to distant organs or tissues, indicating advanced or metastatic cancer.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Recurrent",
              desc: "Cancer has returned after treatment and may recur at the same site or in other parts of the body.",
            },
          ],
        },
        {
          blog_title: "Cancer Symptoms:",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Unexplained Weight Loss",
              desc: "Significant and unexplained weight loss, not attributed to changes in diet or exercise, can be a symptom of various cancers.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Fatigue",
              desc: "Persistent fatigue or weakness that does not improve with rest may indicate an underlying cancer.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Pain",
              desc: "Chronic or persistent pain in specific areas of the body, not relieved by usual treatments, can be a symptom of cancer.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Changes in Bowel or Bladder Habits",
              desc: "Changes in bowel habits (such as constipation or diarrhea) or bladder habits (such as increased frequency or blood in urine) may indicate colorectal, bladder, or prostate cancer.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Persistent Cough or Hoarseness",
              desc: "A chronic cough or hoarseness that lasts for several weeks without improvement could be a sign of lung or throat cancer.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Skin Changes",
              desc: "Changes in the size, shape, color, or texture of moles, skin lesions, or wounds may indicate skin cancer.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Abnormal Bleeding",
              desc: "Unexplained bleeding or bruising, such as blood in the stool, urine, or coughing up blood, may signal various types of cancer.",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Lumps or Masses",
              desc: "A new lump or mass that persists or grows in size in any part of the body should be evaluated for possible cancer.",
            },
          ],
        },
        {
          blog_title: "Cancer Treatment and Types:          ",
          blogs_array: [
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Surgery",
              desc: "<ul><li>Surgery involves the removal of cancerous tumors and surrounding tissues. It is often used to treat localized cancers and can be curative if the cancer has not spread to other parts of the body.</li><li>Types of cancer surgery include:</li><ul><li>Curative Surgery: Removes the entire tumor and surrounding tissues, aiming to cure the cancer.</li><li>Palliative Surgery: Alleviates symptoms or improves quality of life by removing part of the tumor, reducing pain, or relieving pressure on nearby organs.</li></ul></ul>",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Chemotherapy",
              desc: "<ul><li>Chemotherapy uses drugs to kill cancer cells or inhibit their growth. It can be administered orally or intravenously and is often used to treat cancers that have spread or are difficult to remove surgically. Chemotherapy may be used alone or in combination with surgery, radiation therapy, or other treatments.</li></ul>",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Radiation Therapy",
              desc: "<ul><li>Radiation therapy uses high-energy rays or particles to destroy cancer cells or shrink tumors. It is often used to treat localized cancers or as adjuvant therapy following surgery to kill any remaining cancer cells.</li><li>Types of radiation therapy include:</li><ul><li>External Beam Radiation: Delivers radiation from outside the body using a machine.</li><li>Internal Radiation (Brachytherapy): Places radioactive materials directly into or near the tumor.</li><li>Stereotactic Body Radiation Therapy (SBRT): Delivers high doses of radiation to small, well-defined tumors with precision.</li></ul></ul>",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Immunotherapy",
              desc: "<ul><li>Immunotherapy boosts the body's immune system to recognize and destroy cancer cells. It includes various approaches such as:</li><ul><li>Checkpoint Inhibitors: Block proteins that prevent the immune system from attacking cancer cells.</li><li>CAR-T Cell Therapy: Genetically modifies a patient's T cells to better target and kill cancer cells.</li><li>Monoclonal Antibodies: Laboratory-produced antibodies that target specific proteins on cancer cells.</li></ul></ul>",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Targeted Therapy",
              desc: "<ul><li>Targeted therapy uses drugs or other substances to specifically target cancer cells while sparing normal cells. It works by interfering with specific molecules involved in cancer cell growth and survival.</li><ul><li>Small Molecule Inhibitors: Oral drugs that block specific signaling pathways involved in cancer growth.</li><li>Monoclonal Antibodies: Bind to specific proteins on cancer cells to inhibit their growth or trigger immune responses against them.</li></ul></ul>",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Hormone Therapy",
              desc: "<ul><li>Hormone therapy is used to treat hormone-sensitive cancers such as breast, prostate, and ovarian cancer. It works by blocking or lowering the levels of hormones that fuel cancer growth. Hormone therapy may involve medications that inhibit hormone production or block hormone receptors on cancer cells.</li></ul>",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Stem Cell Transplantation",
              desc: "<ul><li>Stem cell transplantation replaces diseased or damaged bone marrow with healthy stem cells to restore the body's ability to produce blood cells. It is used to treat certain types of leukemia, lymphoma, and multiple myeloma, often following high-dose chemotherapy or radiation therapy to eradicate cancer cells.</li></ul>",
            },
            {
              thumbnail: "/assets/images/servicesimg1.png",
              title: "Precision Medicine",
              desc: "<ul><li>Precision medicine involves tailoring cancer treatment to individual patients based on their unique genetic makeup, tumor characteristics, and other factors. It aims to maximize treatment efficacy while minimizing side effects by selecting the most appropriate therapies for each patient.</li></ul>",
            },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    for (let i = 0; i < specailities.length; i++) {
      if (speciality == specailities[i].link) {
        setselectedSpeciality(specailities[i]);
      }
    }
  }, [speciality]);

  return (
    <div
      className="Speciality flex gap-8 items-center justify-center w-full flex-col"
      id="Speciality"
    >
      {selectedSpeciality && selectedSpeciality.name && (
        <>
          <div className="relative w-full flex items-end justify-center">
            <img
              src={selectedSpeciality.full_screen_img_pc}
              alt={selectedSpeciality.name}
              className="object-cover w-full object-top md:hidden"
              style={{ height: "95vh" }}
            />{" "}
            <img
              src={selectedSpeciality.full_screen_img_phone}
              alt={selectedSpeciality.name}
              className="object-cover w-full hidden md:block"
              style={{ height: "95vh" }}
            />
            <div className="flex flex-col absolute px-8 md:gap-4 md:py-6 md:w-11/12 py-4 items-center Speciality-div">
              <p className="Speciality-div-title">{selectedSpeciality.name}</p>
              <p className="Speciality-div-title-subheading">
                {selectedSpeciality.desc}
              </p>
            </div>
          </div>
          {selectedSpeciality.about && selectedSpeciality.about.length > 0 && (
            <div className="w-4/5 md:w-11/12 flex flex-col gap-6 py-12">
              <p className="Speciality-title">About</p>
              <p className="Speciality-description">
                {selectedSpeciality.about}
              </p>
            </div>
          )}

          {selectedSpeciality.faq && selectedSpeciality.faq.length > 0 && (
            <div className="w-4/5 md:w-11/12 flex flex-col gap-12 py-12">
              <p className="Speciality-title">
                <span className="text-[#700619] font-semibold">
                  Frequently{" "}
                </span>
                asked Questions
              </p>
              <div className="w-full flex flex-col gap-6 Speciality-faq">
                {selectedSpeciality.faq.map((item, index) => (
                  <Accordion
                    expanded={expandedPanel === index}
                    onChange={handleChange(index)}
                    className="p-2"
                  >
                    <AccordionSummary
                      expandIcon={
                        expandedPanel === `panel${index}-` ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                      aria-controls={`panel${index}-a-content`}
                      id={`panel${index}-a-header`}
                    >
                      <p className="Speciality-faq-question">{item.question}</p>
                    </AccordionSummary>
                    <AccordionDetails className="Speciality-faq-answer">
                      {item.answer}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          )}

          {selectedSpeciality.blog && selectedSpeciality.blog.length > 0 && (
            <>
              {selectedSpeciality.blog.map((blog, index) => (
                <div className="flex gap-10 w-4/5 md:w-11/12 py-12 flex-col items-center">
                  <p className="Speciality-title">{blog.blog_title}</p>{" "}
                  <div className="flex md:flex-col flex-wrap w-full justify-between md:justify-center gap-y-6">
                    {blog.blogs_array.map((item, index) => (
                      <div className="blog-card">
                        <img
                          src={item.thumbnail}
                          alt={item.name}
                          className="w-full object-cover"
                        />
                        <p className="blog-card-title">{item.title}</p>
                        <div
                          className="blog-card-description"
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}
