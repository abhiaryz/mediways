import React, { useEffect } from "react";
import Hero from "./Hero";
import "./Home.scss";
import Numbers from "./Numbers";
import Services from "./Services";
import Tourism from "./Tourism";
import Specialities from "./Specialities";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

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
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Numbers />
      <Services />
      <Specialities />
      <Tourism />
      <Contact />
    </div>
  );
}
