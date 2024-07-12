import React, { useState,useEffect } from "react";
import "./Hospital.scss";

export default function Hospital() {
  const [hospitalData, sethospitalData] = useState({
    name: "Smart Hospital L.L.C",
    img: "/assets/images/Hospital.png",
    facility_type: "Hospital",
    address:
      "Plot No.378-0, Land 214-554,, Al Garhoud Street, Al Garhoud, Dubai, Dubai, United Arab Emirates   -  Get Direction",
    website: "www.google.com",
    description:
      "The Hospital’s Musculoskeletal Care program is delivered by multilingual American and European Board-Certified Senior Consultants in world-class facilities equipped with cutting-edge medical infrastructure. The Hospital’s Visiting Surgeons Program hosts renowned global experts in the field of Orthopedics and Neuro-Spinal medicine on a monthly basis, thus providing a global medical experience to domestic and international patients in the heart of Dubai city. Clinical Facilities at the Hospital include 41 Inpatient Wards, 7 Royal Suites, 3 VIP Suites, Intensive Care Unit, Operation Theater Suite, One-Day Surgery Suite, Biomechanical Laboratory, Speed Court & Running School, Medical Gym, Physiotherapy & Rehabilitation Center, Radiology and Laboratory.",
    services: ["Health Packages", "Health Packages"],
    link: "Adam-Vital-Hospital-L.L.C",
    doctors: [
      {
        profile_pic: "/assets/images/Doctor1.png",
        name: "Dr. Annah Ray",
        role: "Dentician",
      },
      {
        profile_pic: "/assets/images/Doctor2.png",
        name: "Dr. Richard Brook",
        role: "Gastroenterlogist",
      },
      {
        profile_pic: "/assets/images/Doctor3.png",
        name: "Dr. Vivian Monroe",
        role: "Pediatry Surgeon",
      },
    ],
  });
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  return (
    <div
      id="Hospital"
      className="Hospital flex py-20 gap-12 flex-col items-center"
      style={{ marginTop: "7vh" }}
    >
      {hospitalData && (
        <>
          <div className="w-3/4 md:w-11/12 profile-card flex md:flex-col gap-8 justify-between">
            <img
              src={hospitalData.img}
              alt={hospitalData.name}
              className="w-1/3 md:w-full"
            />
            <div className="flex flex-col gap-2 justify-around md:items-start w-2/3 md:w-full md:py-6 md:gap-4">
              <p className="title">{hospitalData.name}</p>
              <p className="text flex items-center gap-2">
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.01172 11.2207V15.7107C3.01172 20.2007 4.81172 22.0007 9.30172 22.0007H14.6917C19.1817 22.0007 20.9817 20.2007 20.9817 15.7107V11.2207"
                      stroke="#700619"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0005 12C13.8305 12 15.1805 10.51 15.0005 8.68L14.3405 2H9.67048L9.00048 8.68C8.82048 10.51 10.1705 12 12.0005 12Z"
                      stroke="#700619"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3108 12C20.3308 12 21.8108 10.36 21.6108 8.35L21.3308 5.6C20.9708 3 19.9708 2 17.3508 2H14.3008L15.0008 9.01C15.1708 10.66 16.6608 12 18.3108 12Z"
                      stroke="#700619"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.63842 12C7.28842 12 8.77842 10.66 8.93842 9.01L9.15842 6.8L9.63842 2H6.58842C3.96842 2 2.96842 3 2.60842 5.6L2.33842 8.35C2.13842 10.36 3.61842 12 5.63842 12Z"
                      stroke="#700619"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z"
                      stroke="#700619"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <p>{hospitalData.facility_type}</p>
              </p>
              <p className="text flex items-start gap-2">
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.0009 4.47942C16.4096 2.88812 14.2513 1.99414 12.0009 1.99414C9.75047 1.99414 7.59221 2.88812 6.00091 4.47942C4.40961 6.07072 3.51563 8.22899 3.51563 10.4794C3.51562 12.7299 4.40961 14.8881 6.00091 16.4794L11.2709 21.7594C11.3639 21.8532 11.4745 21.9275 11.5963 21.9783C11.7182 22.0291 11.8489 22.0552 11.9809 22.0552C12.1129 22.0552 12.2436 22.0291 12.3655 21.9783C12.4873 21.9275 12.5979 21.8532 12.6909 21.7594L18.0009 16.4294C19.5856 14.8447 20.4758 12.6955 20.4758 10.4544C20.4758 8.21337 19.5856 6.0641 18.0009 4.47942V4.47942ZM16.5709 14.9994L12.0009 19.5894L7.43091 14.9994C6.52805 14.0957 5.91338 12.9447 5.6646 11.6917C5.41582 10.4388 5.54409 9.14017 6.03321 7.9601C6.52233 6.78004 7.35032 5.77147 8.41254 5.0619C9.47475 4.35233 10.7235 3.9736 12.0009 3.9736C13.2783 3.9736 14.5271 4.35233 15.5893 5.0619C16.6515 5.77147 17.4795 6.78004 17.9686 7.9601C18.4577 9.14017 18.586 10.4388 18.3372 11.6917C18.0884 12.9447 17.4738 14.0957 16.5709 14.9994V14.9994ZM9.00091 7.40942C8.19362 8.21919 7.7403 9.31599 7.7403 10.4594C7.7403 11.6029 8.19362 12.6997 9.00091 13.5094C9.60067 14.1102 10.3645 14.5205 11.1966 14.6888C12.0286 14.8571 12.8919 14.776 13.678 14.4556C14.4641 14.1351 15.1381 13.5897 15.6154 12.8877C16.0927 12.1856 16.352 11.3583 16.3609 10.5094C16.3654 9.94263 16.2562 9.38068 16.0398 8.85681C15.8234 8.33294 15.5041 7.85778 15.1009 7.45942C14.7046 7.054 14.232 6.73096 13.7103 6.50889C13.1887 6.28682 12.6282 6.1701 12.0613 6.16545C11.4944 6.1608 10.9321 6.26832 10.4069 6.48181C9.88165 6.6953 9.40383 7.01055 9.00091 7.40942V7.40942ZM13.6909 12.0894C13.3119 12.4742 12.8111 12.7153 12.274 12.7717C11.737 12.828 11.197 12.6961 10.7464 12.3983C10.2959 12.1006 9.9627 11.6557 9.80391 11.1395C9.64512 10.6233 9.67056 10.0681 9.87586 9.56858C10.0812 9.06909 10.4536 8.65644 10.9295 8.40116C11.4054 8.14588 11.9552 8.06383 12.4848 8.16904C13.0145 8.27425 13.4912 8.56018 13.8334 8.97795C14.1756 9.39573 14.3621 9.91939 14.3609 10.4594C14.3464 11.0767 14.0874 11.6629 13.6409 12.0894H13.6909Z"
                      fill="#700619"
                    />
                  </svg>
                </div>

                <p>{hospitalData.address}</p>
              </p>
              <p className="text flex items-center gap-2">
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#700619"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.00156 3H9.00156C7.05156 8.84 7.05156 15.16 9.00156 21H8.00156"
                      stroke="#700619"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 3C16.95 8.84 16.95 15.16 15 21"
                      stroke="#700619"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                      stroke="#700619"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 8.99961C8.84 7.04961 15.16 7.04961 21 8.99961"
                      stroke="#700619"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <p>{hospitalData.website}</p>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center w-3/4 md:w-11/12 about">
            <p className="title">
              About &nbsp;
              <span className="text-[#700619] font-semibold">
                {hospitalData.name}
              </span>
            </p>
            <p className="description">{hospitalData.description}</p>
          </div>
          <div className="doctors items-center flex flex-col gap-4 w-3/4 md:w-11/12">
            <p className="title">Listed Doctors</p>
            <p className="sub-heading">
              Connect with experienced world-class doctors for exceptional
              services across different specialities
            </p>
            <div className="flex w-full md:flex-col mt-8 justify-between flex-wrap gap-y-8">
              {hospitalData.doctors.map((doctor, index) => (
                <div className="card" key={index}>
                  <img src={doctor.profile_pic} alt="" className="w-full" />
                  <p className="name">{doctor.name}</p>
                  <p className="role">{doctor.role}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
