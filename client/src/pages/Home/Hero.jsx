import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-screen md:h-auto flex justify-around items-center md:flex-col md:gap-12"
    >
      <div className="hero-left custom-width-45 flex flex-col gap-4 justify-center md:w-11/12 md:text-center">
        <p className="hero-left-heading md:text-center">
          Treatment With Unmatched Personal Care
        </p>
        <p className="hero-left-description md:text-center">
          Connect with top healthcare providers from all over the world
        </p>
        <Link to="/#contact" className="w-fit md:m-auto">
          <button className="button-rounded-large">Contact Us</button>
        </Link>
      </div>
      <img
        src="./assets/images/heroimg.png"
        className="w-2/5 md:w-11/12 object-cover self-end hero-img md:hidden"
        alt=""
      />
      <img
        src="./assets/images/heroimgphone.png"
        className="w-2/5 md:w-11/12 object-cover hero-img hidden md:block"
        alt=""
      />
    </section>
  );
}
