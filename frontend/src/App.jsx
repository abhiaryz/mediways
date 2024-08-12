import "./App.css";
import {
  About,
  Contact,
  Home,
  SpecialitiesPage,
  Campaign,
  CampaignDetails,
  Services,
  faq,
} from "./pages";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "./sections";

import axios from "axios";

export const callAPI = async () => {
  try {
    const response = await axios.get(
      "https://mediways-server.vercel.app/user/get-all-specialties",
    );
    return response.data.specialities;
  } catch (error) {
    console.error("Error fetching data from API", error);
    return [];
  }
};

function App() {
  const EXPIRATION_TIME_MS = 2 * 60 * 60 * 1000;

  useEffect(() => {
    const fetchData = async () => {
      const storedData = localStorage.getItem("Specialities");
      let data;

      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          const currentTime = new Date().getTime();
          console.log("data is in local storage");

          // Check if the data is expired
          if (parsedData.expireTime > currentTime) {
            data = parsedData.specialities;
            console.log("data is not expired");
          } else {
            // Data is expired, fetch new data from the API
            data = await callAPI();
            const newExpireTime = currentTime + EXPIRATION_TIME_MS;
            const newData = { expireTime: newExpireTime, specialities: data };
            localStorage.setItem("Specialities", JSON.stringify(newData));
            console.log("data is expired");
          }
        } catch (error) {
          console.error("Error parsing or accessing local storage data", error);
          data = await callAPI(); // If there's an error, fetch new data
          const newExpireTime = new Date().getTime() + EXPIRATION_TIME_MS;
          localStorage.setItem(
            "Specialities",
            JSON.stringify({ expireTime: newExpireTime, specialities: data }),
          );
        }
      } else {
        // No data in local storage, fetch from the API
        data = await callAPI();
        console.log("No data in local storage");
        const newExpireTime = new Date().getTime() + EXPIRATION_TIME_MS;
        localStorage.setItem(
          "Specialities",
          JSON.stringify({ expireTime: newExpireTime, specialities: data }),
        );
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
        {/* <Route path="/specialities" Component={SpecialitiesPage} /> */}
        <Route path="/specialities/:link" Component={SpecialitiesPage} />
        <Route path="/campaigns" Component={Campaign} />
        <Route path="/campaigns/:link" Component={CampaignDetails} />
        <Route path="/services" Component={Services} />
        <Route path="/faqs" Component={faq} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
