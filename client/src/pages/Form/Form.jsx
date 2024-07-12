import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize"
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import validator from "validator";
import { Stack } from "@mui/material";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinnerf from "../../Components/Spinnerf";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import {Helmet} from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const [alert, setAlert] = useState(null);
  const [isformsubmitted, setisformsubmitted] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
    designation: "",
    message: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const user = useSelector((state) => state.user.user);

  const showAlert = (severity, message) => {
    setAlert(
      <Alert
        style={{ position: "fixed", bottom: "3%", left: "2%", zIndex: 999 }}
        variant="filled"
        severity={severity}
      >
        {message}
      </Alert>
    );
    setLoading(false);
    setTimeout(() => setAlert(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validator.isEmail(formData.email)) {
        showAlert("warning", "Enter a valid email");
        return;
      }

      if (!validator.isMobilePhone(formData.phone)) {
        showAlert("warning", "Enter a valid phone number");
        return;
      }

      if (!isChecked) {
        showAlert("error", "Please accept the Privacy policy");
        return;
      }

      setLoading(true);

      const response = await axios.post(
        "https://omniscent-backend.vercel.app/form",
        formData
      );
      console.log(response);
      setLoading(false);
      window.scrollTo(0, 0);
      setisformsubmitted(true);
    } catch (error) {
      setAlert(
        <Alert
          style={{ position: "fixed", bottom: "3%", left: "2%", zIndex: 999 }}
          variant="filled"
          severity="error"
        >
          {error.response.data.error}
        </Alert>
      );
      setTimeout(() => setAlert(null), 5000);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const targetSection = document.querySelector(location.hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    if (isformsubmitted) {
      const timeline = gsap.timeline();

      timeline
        .from(".submitted-div", {
          y: "70px",
          opacity: 0,
          duration: 0.75,
          scrollTrigger: {
            trigger: "#form",
          },
        })
        .from(
          ".submitted-div-heading",
          {
            y: "30px",
            opacity: 0,
            delay: 1,

            duration: 0.75,
            scrollTrigger: {
              trigger: ".submitted-div",
            },
          },
          "-=0.5"
        )
        .from(
          ".submitted-div-subheading",
          {
            y: "30px",
            opacity: 0,
            delay: 1,
            duration: 0.75,
            scrollTrigger: {
              trigger: ".submitted-div",
            },
          },
          "-=0.5"
        )
        .from(
          ".submitted-div-button",
          {
            y: "30px",
            opacity: 0,
            delay: 1,

            duration: 0.75,
            scrollTrigger: {
              trigger: ".submitted-div",
            },
          },
          "-=0.5"
        );
    }
  }, [isformsubmitted]);

  return (
    <section
      className="w-full flex justify-center items-center flex-col"
      style={{ marginTop: "13vh" }}
      id="form"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact us | Omniscient Perspectives </title>
        <link
          rel="canonical"
          href="https://omniscientperspectives.com/form"
        />
      </Helmet>

      {loading && <Spinnerf />}
      <Stack spacing={2}>{alert}</Stack>
      {!isformsubmitted && (
        <div className="form-contact-div w-full flex flex-col justify-center items-center gap-6 py-12 mb-20">
          <p className="text-5xl md:text-4xl font-bold text-white">
            We are here to help
          </p>
          <p
            className="text-xl text-center md:text-lg w-1/2 lg:w-11/12 md:w-3/4"
            style={{ color: "#ADD7F6" }}
          >
            Contact us if you have any questions about our company. Our best
            team will provide your answers within a few hours.
          </p>
          <div className="flex lg:flex-col md:flex-col w-11/12 justify-center gap-24 items-center mt-6">
            <div className="flex flex-col items-start justify-center gap-4 p-8 rounded bg-white w-1/4 lg:w-full md:w-full">
              <div className="rounded-full bg-navyblue p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M5.27415 24.7255C4.60552 24.7255 4.03334 24.4876 3.5576 24.0118C3.08186 23.5361 2.84358 22.9635 2.84277 22.2941V7.70585C2.84277 7.03722 3.08105 6.46504 3.5576 5.9893C4.03415 5.51356 4.60633 5.27529 5.27415 5.27448H24.7251C25.3938 5.27448 25.9663 5.51275 26.4429 5.9893C26.9194 6.46585 27.1573 7.03803 27.1565 7.70585V22.2941C27.1565 22.9627 26.9186 23.5353 26.4429 24.0118C25.9672 24.4884 25.3946 24.7263 24.7251 24.7255H5.27415ZM14.9996 16.2157L24.7251 10.1372V7.70585L14.9996 13.7843L5.27415 7.70585V10.1372L14.9996 16.2157Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-2xl md:text-xl font-medium">Email Us</p>
              <p className="text-gray2 text-lg md:text-base font-normal">
                Ask anything by emailing us and we’ll respond within a few days.
              </p>
              <a
                href="mailto:contact@omniscientperspectives.in"
                className="text-navyblue text-lg md:text-base font-medium flex items-center"
              >
                Send Email
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="15"
                  viewBox="0 0 26 15"
                  fill="none"
                >
                  <path
                    d="M1 6.5C0.447715 6.5 4.82823e-08 6.94772 0 7.5C-4.82823e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM25.7071 8.20711C26.0976 7.81658 26.0976 7.18342 25.7071 6.7929L19.3431 0.428934C18.9526 0.0384094 18.3195 0.0384093 17.9289 0.428934C17.5384 0.819458 17.5384 1.45262 17.9289 1.84315L23.5858 7.5L17.9289 13.1569C17.5384 13.5474 17.5384 14.1805 17.9289 14.5711C18.3195 14.9616 18.9526 14.9616 19.3431 14.5711L25.7071 8.20711ZM1 8.5L25 8.5L25 6.5L1 6.5L1 8.5Z"
                    fill="#1F20AE"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 px-8 py-12 rounded bg-white w-1/4 lg:w-full md:w-full">
              <div className="rounded-full bg-navyblue p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M17.4311 14.2402C17.8303 14.2402 18.2255 14.1616 18.5942 14.0088C18.9629 13.8561 19.298 13.6322 19.5802 13.35C19.8624 13.0678 20.0863 12.7328 20.239 12.364C20.3917 11.9953 20.4704 11.6001 20.4704 11.201C20.4704 10.3949 20.1502 9.62188 19.5802 9.05192C19.0102 8.48195 18.2372 8.16175 17.4311 8.16175C16.6251 8.16175 15.8521 8.48195 15.2821 9.05192C14.7121 9.62188 14.3919 10.3949 14.3919 11.201C14.3919 11.6001 14.4705 11.9953 14.6233 12.364C14.776 12.7328 14.9999 13.0678 15.2821 13.35C15.8521 13.92 16.6251 14.2402 17.4311 14.2402ZM17.4311 2.69116C22.1237 2.69116 25.9409 6.49626 25.9409 11.201C25.9409 17.5833 17.4311 27.0049 17.4311 27.0049C17.4311 27.0049 8.92134 17.5833 8.92134 11.201C8.92134 8.94403 9.81791 6.77952 11.4138 5.18363C13.0097 3.58773 15.1742 2.69116 17.4311 2.69116ZM6.48997 11.201C6.48997 16.6716 12.6657 24.1602 13.7841 25.5582L12.5684 27.0049C12.5684 27.0049 4.05859 17.5833 4.05859 11.201C4.05859 7.34724 6.62369 4.0892 10.137 3.04371C7.90016 5.04959 6.48997 7.95508 6.48997 11.201Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-2xl md:text-xl font-medium">Meet Us</p>
              <p className="text-gray2 text-lg md:text-base font-normal">
                You can meet us at a convenient place
              </p>

              {/* <a
                href="mailto:ramakrishnan@omniscientperspectives.in"
                className="text-navyblue text-lg md:text-base font-medium flex items-center"
              >
                Get Directions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="15"
                  viewBox="0 0 26 15"
                  fill="none"
                >
                  <path
                    d="M1 6.5C0.447715 6.5 4.82823e-08 6.94772 0 7.5C-4.82823e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM25.7071 8.20711C26.0976 7.81658 26.0976 7.18342 25.7071 6.7929L19.3431 0.428934C18.9526 0.0384094 18.3195 0.0384093 17.9289 0.428934C17.5384 0.819458 17.5384 1.45262 17.9289 1.84315L23.5858 7.5L17.9289 13.1569C17.5384 13.5474 17.5384 14.1805 17.9289 14.5711C18.3195 14.9616 18.9526 14.9616 19.3431 14.5711L25.7071 8.20711ZM1 8.5L25 8.5L25 6.5L1 6.5L1 8.5Z"
                    fill="#1F20AE"
                  />
                </svg>
              </a> */}
            </div>
            <div className="flex flex-col items-start justify-center gap-4 p-8 rounded bg-white w-1/4 lg:w-full md:w-full">
              <div className="rounded-full bg-navyblue p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M24.6645 25.9412C22.1318 25.9412 19.6295 25.3893 17.1576 24.2854C14.6857 23.1816 12.4367 21.6162 10.4106 19.5892C8.38441 17.5631 6.81942 15.3141 5.71557 12.8422C4.61173 10.3703 4.0594 7.86799 4.05859 5.33531C4.05859 4.9706 4.18016 4.66668 4.4233 4.42354C4.66644 4.18041 4.97036 4.05884 5.33506 4.05884H10.2586C10.5423 4.05884 10.7955 4.15528 11.0184 4.34817C11.2413 4.54106 11.373 4.7688 11.4135 5.03139L12.2037 9.28629C12.2442 9.61047 12.2341 9.884 12.1733 10.1069C12.1125 10.3298 12.0011 10.5222 11.839 10.6843L8.89095 13.6628C9.29618 14.4124 9.77718 15.1366 10.334 15.8352C10.8908 16.5338 11.5039 17.2077 12.1733 17.8569C12.8014 18.485 13.4599 19.0677 14.1488 19.605C14.8377 20.1424 15.5671 20.6335 16.337 21.0784L19.1939 18.2216C19.3762 18.0392 19.6145 17.9027 19.9087 17.8119C20.2029 17.7211 20.4914 17.6956 20.7743 17.7353L24.9684 18.5863C25.2521 18.6673 25.4851 18.8144 25.6674 19.0276C25.8498 19.2407 25.9409 19.4786 25.9409 19.7412V24.6647C25.9409 25.0294 25.8194 25.3333 25.5762 25.5765C25.3331 25.8196 25.0292 25.9412 24.6645 25.9412Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-2xl md:text-xl font-medium ">
                Call Us Any Time
              </p>
              <p className="text-gray2 text-lg md:text-base font-normal">
                Call us if your question requires an immediate response.
              </p>
              <a
                href="tel:74110 35211"
                className="text-navyblue text-lg md:text-base font-medium flex items-center"
              >
                +91 7411035211
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="15"
                  viewBox="0 0 26 15"
                  fill="none"
                >
                  <path
                    d="M1 6.5C0.447715 6.5 4.82823e-08 6.94772 0 7.5C-4.82823e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM25.7071 8.20711C26.0976 7.81658 26.0976 7.18342 25.7071 6.7929L19.3431 0.428934C18.9526 0.0384094 18.3195 0.0384093 17.9289 0.428934C17.5384 0.819458 17.5384 1.45262 17.9289 1.84315L23.5858 7.5L17.9289 13.1569C17.5384 13.5474 17.5384 14.1805 17.9289 14.5711C18.3195 14.9616 18.9526 14.9616 19.3431 14.5711L25.7071 8.20711ZM1 8.5L25 8.5L25 6.5L1 6.5L1 8.5Z"
                    fill="#1F20AE"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {isformsubmitted ? (
        <div className="w-full form-thankyoubg flex flex-col gap-5 py-32 items-center justify-center submitted-div">
          <p className="text-5xl md:text-4xl font-bold text-white submitted-div-heading">
            Thank You For Contacting Us!
          </p>
          <p
            className="text-xl text-center md:text-lg w-1/2 lg:w-11/12 md:w-3/4 submitted-div-heading"
            style={{ color: "#ADD7F6" }}
          >
            Our team will get back to you shortly
          </p>
          <Link to="/">
            <button className="border-1 border-solid  bg-white text-navyblue rounded px-6 mt-6 py-3 submitted-div-button">
              Back To Home
            </button>
          </Link>
        </div>
      ) : (
        <>
          <h1>Reach for Assistance</h1>
          <p className="text-gray2 text-xl text-center md:text-lg lg:w-11/12 md:w-3/4  my-4">
            We'll get in touch with you to answer your inquiries as soon as you
            submit this form
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap md:flex-col gap-8 justify-between w-4/5 lg:w-11/12 md:w-11/12 my-12"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              className="custom-width-30 lg:w-2/5 md:w-full border-2 border-gray border-solid pl-5 py-4"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="custom-width-30 lg:w-2/5 md:w-full border-2 border-gray border-solid pl-5 py-4"
            />
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              required
              className="custom-width-30 lg:w-2/5 md:w-full border-2 border-gray border-solid pl-5 py-4"
            />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              required
              className="custom-width-30 lg:w-2/5 md:w-full border-2 border-gray border-solid pl-5 py-4"
            />
            <input
              type="number"
              name="companySize"
              value={formData.companySize}
              onChange={handleInputChange}
              placeholder="Company Size"
              className="custom-width-30 lg:w-2/5 md:w-full border-2 border-gray border-solid pl-5 py-4"
            />
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              placeholder="Designation"
              className="custom-width-30 lg:w-2/5 md:w-full border-2 border-gray border-solid pl-5 py-4"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Problem Statement in Brief"
              className="w-full border-2 border-gray border-solid p-8"
              required
            />
            <div className="flex">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-8 cursor-pointer"
              />
              <p className="text-lg md:text-base text-gray2 ml-4">
                By submitting this form, I agree to the use of my personal data
                as outlined in the
                <Link
                  to="/privacy-policy"
                  className="text-navyblue font-semibold text-lg md:text-base underline"
                >
                  &nbsp;Privacy Statement
                </Link>
              </p>
            </div>
            <button
              style={{
                backgroundColor: isChecked ? "#1F20AE" : "#656565",
                cursor: isChecked ? "pointer" : "not-allowed",
              }}
              className="border-1 border-solid text-white border-navyblue rounded w-full py-3"
              type="submit"
              disabled={!isChecked}
            >
              Submit Request
            </button>
          </form>
        </>
      )}
    </section>
  );
}
