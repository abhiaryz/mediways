import { useState } from "react";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import validator from "validator";
import { Heading } from "../components";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import { BsYoutube, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [openSuccessToast, setOpenSuccessToast] = useState(false);
  const [openErrorToast, setOpenErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCloseSuccessToast = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSuccessToast(false);
  };

  const handleCloseErrorToast = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenErrorToast(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    for (const field in formData) {
      if (formData[field] === "") {
        setErrorMessage("Please fill in all fields.");
        setOpenErrorToast(true);
        return;
      }
    }

    // Validate email and phone number
    if (!validator.isEmail(formData.email)) {
      setErrorMessage("Please enter a valid email.");
      setOpenErrorToast(true);
      return;
    }

    if (!validator.isMobilePhone(formData.phone)) {
      setErrorMessage("Please enter a valid phone number.");
      setOpenErrorToast(true);
      return;
    }

    setLoading(true);

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        `https://mediways-server.vercel.app/user/submit-form`,
        formData,
      );

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });

      setOpenSuccessToast(true);
    } catch (error) {
      setErrorMessage("Failed to submit the form. Please try again.");
      setOpenErrorToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center py-24">
      <div className="flex w-full flex-col items-center justify-center gap-6 bg-[#00367d] py-12 md:flex-row">
        <div className="flex h-full w-full flex-col items-start justify-center gap-4 rounded bg-white p-8 md:w-1/4">
          <div className="rounded-full bg-[#000A2D] p-3">
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
          <p className="family-sora text-xl font-medium">Email Us</p>
          <p className="family-sora">
            Ask anything by emailing us and we’ll respond within a few days.
          </p>
          <a
            href="mailto:anikethakur07@gmail.com"
            className="text-darkblue family-sora flex items-center font-medium md:text-base"
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
                fill="#000A2D"
              />
            </svg>
          </a>
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center gap-4 rounded bg-white p-8 md:w-1/4">
          <div className="rounded-full bg-[#000A2D] p-3">
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
          <p className="family-sora text-xl font-medium">Call Us Any Time</p>
          <p className="family-sora">
            Call us if your question requires an immediate response.
          </p>
          <a
            href="tel:91162 26875"
            className="text-darkblue family-sora flex items-center font-medium md:text-base"
          >
            +91 91162 26875
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="15"
              viewBox="0 0 26 15"
              fill="none"
            >
              <path
                d="M1 6.5C0.447715 6.5 4.82823e-08 6.94772 0 7.5C-4.82823e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM25.7071 8.20711C26.0976 7.81658 26.0976 7.18342 25.7071 6.7929L19.3431 0.428934C18.9526 0.0384094 18.3195 0.0384093 17.9289 0.428934C17.5384 0.819458 17.5384 1.45262 17.9289 1.84315L23.5858 7.5L17.9289 13.1569C17.5384 13.5474 17.5384 14.1805 17.9289 14.5711C18.3195 14.9616 18.9526 14.9616 19.3431 14.5711L25.7071 8.20711ZM1 8.5L25 8.5L25 6.5L1 6.5L1 8.5Z"
                fill="#000A2D"
              />
            </svg>
          </a>
        </div>{" "}
        <div className="flex h-full w-full flex-col items-start justify-center gap-4 rounded bg-white p-8 md:w-1/4">
          <div className="rounded-full bg-[#000A2D] p-3">
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
          <p className="family-sora text-xl font-medium">Social Media</p>
          <p className="family-sora">
            Connect with our social media handles for latest updates
          </p>
          <div className="flex gap-2">
            <BsYoutube size={22} className="" />
            <BsLinkedin size={18} />
            <BsTwitterX size={18} />
          </div>
        </div>
      </div>
      <Heading
        title={"Contact us"}
        subtitle={"Reach Out for your Healthcare and Holiday needs"}
      />
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex w-11/12 flex-col items-center gap-4 md:w-3/4"
      >
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="firstName" className="family-sora text-darkBlue">
              First Name:
            </label>
            <div className="relative flex items-center">
              <PersonIcon className="absolute left-2 text-gray-500" />
              <input
                id="firstName"
                placeholder="Enter your First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full rounded border border-[#4A4A4A] py-3 pl-10 pr-4 focus:border-[#000A2D] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="lastName" className="family-sora text-darkBlue">
              Last Name:
            </label>
            <div className="relative flex items-center">
              <PersonIcon className="absolute left-2 text-gray-500" />
              <input
                id="lastName"
                placeholder="Enter your Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full rounded border border-[#4A4A4A] py-3 pl-10 pr-4 focus:border-[#000A2D] focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between md:flex-row md:gap-4">
          <div className="custom-width-45 flex flex-col gap-2 md:w-full">
            <label htmlFor="phone" className="family-sora text-darkBlue">
              Phone:
            </label>
            <div className="relative flex items-center">
              <PhoneIcon className="absolute left-2 text-gray-500" />
              <input
                id="phone"
                placeholder="Enter your Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded border border-[#4A4A4A] py-3 pl-10 pr-4 focus:border-[#000A2D] focus:outline-none"
              />
            </div>
          </div>
          <div className="custom-width-45 flex flex-col gap-2 md:w-full">
            <label htmlFor="email" className="family-sora text-darkBlue">
              Email:
            </label>
            <div className="relative flex items-center">
              <EmailIcon className="absolute left-2 text-gray-500" />
              <input
                id="email"
                placeholder="Enter your Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded border border-[#4A4A4A] py-3 pl-10 pr-4 focus:border-[#000A2D] focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mb-6 w-full">
          <label htmlFor="message" className="family-sora text-darkBlue">
            Message:
          </label>
          <div className="relative flex items-center">
            <textarea
              id="message"
              placeholder="Enter your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full rounded border border-[#4A4A4A] px-4 py-3 focus:border-[#000A2D] focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="family-sora h-[3.4rem] border bg-lightBlue px-16 text-[1rem] font-semibold text-white active:bg-lightBlue/95"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        <Snackbar
          open={openSuccessToast}
          autoHideDuration={6000}
          onClose={handleCloseSuccessToast}
        >
          <MuiAlert
            onClose={handleCloseSuccessToast}
            severity="success"
            sx={{ width: "100%" }}
          >
            Form submitted successfully!
          </MuiAlert>
        </Snackbar>
        <Snackbar
          open={openErrorToast}
          autoHideDuration={6000}
          onClose={handleCloseErrorToast}
        >
          <MuiAlert
            onClose={handleCloseErrorToast}
            severity="error"
            sx={{ width: "100%" }}
          >
            {errorMessage}
          </MuiAlert>
        </Snackbar>
      </form>
    </div>
  );
};

export default Contact;
