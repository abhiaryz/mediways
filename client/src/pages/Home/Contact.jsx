import React, { useState } from "react";
import fs from "fs";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import validator from "validator";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    speciality: " ",
  });

  const [openSuccessToast, setOpenSuccessToast] = useState(false);
  const [openErrorToast, setOpenErrorToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCloseSuccessToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccessToast(false);
  };

  const handleCloseErrorToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenErrorToast(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    for (const field in formData) {
      if (formData[field] === "") {
        setOpenErrorToast(true);
        return;
      }
    }

    // Validate email and phone number
    if (
      !validator.isEmail(formData.email) ||
      !validator.isMobilePhone(formData.phone)
    ) {
      setOpenErrorToast(true);
      return;
    }

    const contacts = JSON.parse(fs.readFileSync("contacts.json", "utf-8"));
    const newContact = {
      ...formData,
      id: contacts.length + 1,
    };
    contacts.push(newContact);
    fs.writeFileSync("contacts.json", JSON.stringify(contacts, null, 2));
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      speciality: "",
    });
    setOpenSuccessToast(true);
  };

  return (
    <section id="contact" className="w-full flex flex-col items-center py-20">
      {" "}
      <p className="contact-title">Contact us</p>
      <p className="contact-subheading">
        Reach Out for Your Healthcare and Holiday Needs
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-3/4 md:w-11/12 flex flex-col gap-4 mt-8 items-center"
      >
        <div className="flex md:flex-col md:gap-4 w-full justify-between">
          <div className="flex flex-col gap-2 custom-width-45 md:w-full">
            <label htmlFor="firstName" className="contact-label">
              First Name:
            </label>
            <TextField
              id="firstName"
              placeholder="Enter your First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          <div className="flex flex-col gap-2 custom-width-45 md:w-full">
            <label htmlFor="lastName" className="contact-label">
              Last Name:
            </label>
            <TextField
              id="lastName"
              placeholder="Enter your Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>{" "}
        </div>

        <div className="flex md:flex-col md:gap-4 w-full justify-between">
          <div className="flex flex-col gap-2 custom-width-45 md:w-full">
            <label htmlFor="phone" className="contact-label">
              Phone:
            </label>
            <TextField
              id="phone"
              placeholder="Enter your Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          <div className="flex flex-col gap-2 custom-width-45 md:w-full">
            <label htmlFor="email" className="contact-label">
              Email:
            </label>
            <TextField
              id="email"
              placeholder="Enter your Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
        </div>
        <div className="mb-6 w-full">
          <label htmlFor="speciality" className="contact-label">
            Speciality:
          </label>
          <TextField
            select
            id="speciality"
            name="speciality"
            value={formData.speciality}
            onChange={handleChange}
            required
            fullWidth
            className="contact-input w-full"
          >
            <MenuItem value=" ">Select Speciality</MenuItem>{" "}
            <MenuItem value="Cardiac">Cardiac</MenuItem>
            <MenuItem value="LiverTransplantation">Liver Transplantation</MenuItem>
            <MenuItem value="BoneMarrowTransplant">Bone Marrow Transplant</MenuItem>
            <MenuItem value="HeartTransplantation">Heart Transplantation</MenuItem>
            <MenuItem value="KidneyTransplantation">Kidney Transplantation</MenuItem>
            <MenuItem value="Gastroenterology">Gastroenterology</MenuItem>
            <MenuItem value="Cancer">Cancer</MenuItem>
          </TextField>
        </div>

        <div className="mb-6 w-full">
          <label htmlFor="message" className="contact-label">
            Message:
          </label>
          <TextField
            id="message"
            placeholder="Enter your Message"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            className="contact-input w-full"
          />
        </div>
        <button type="submit" className="contact-submit w-fit md:w-full">
          Submit
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
            Please fill in all fields correctly.
          </MuiAlert>
        </Snackbar>
      </form>{" "}
    </section>
  );
};

export default Contact;
