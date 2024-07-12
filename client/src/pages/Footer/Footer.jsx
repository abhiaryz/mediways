import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "./Footer.scss";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2, // Default for desktop
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 3000, settings: { slidesToShow: 4, slidesToScroll: 2 } }, // Desktop
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // Tablet
      { breakpoint: 464, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Mobile
    ],
  };
  return (
    <footer className="flex flex-col w-full items-center mt-20" id="footer">
      <div className="gap-12 w-full py-24">
        <Slider {...settings} className="w-full">
          <img
            src="/assets/images/footerlogos/healthcare.png"
            className="footer-logos"
          />
          <img
            src="/assets/images/footerlogos/healthnet.png"
            className="footer-logos"
          />
          <img
            src="/assets/images/footerlogos/medilab.png"
            className="footer-logos"
          />
          <img
            src="/assets/images/footerlogos/who.png"
            className="footer-logos"
          />
          <img
            src="/assets/images/footerlogos/healthcare.png"
            className="footer-logos"
          />
          <img
            src="/assets/images/footerlogos/healthnet.png"
            className="footer-logos"
          />
          <img
            src="/assets/images/footerlogos/medilab.png"
            className="footer-logos"
          />
          <img
            src="/assets/images/footerlogos/who.png"
            className="footer-logos"
          />
        </Slider>
      </div>
      <div className="footer-div flex w-11/12 md:flex-col pb-24 md:pb-18 justify-between md:gap-12">
        <div className="w-1/4 md:w-full flex flex-col gap-4 md:items-center">
          <img src={logo} alt="" style={{ width: "150px" }} />
          <p className="footer-div1-description w-3/4 md:text-center">
            Treatment With Unmatched Personal Care
          </p>
        </div>
        <div className="custom-width-15 md:w-full flex flex-col gap-4 md:items-center">
          <p className="footer-divset-title">COMPANY</p>
          <ul className="footer-divset-options md:items-center">
            <Link to="/">
              <li>Home</li>
            </Link>{" "}
            <Link to="/about">
              <li>About</li>
            </Link>{" "}
            <Link to="/medicine-in-india">
              <li>Medicine In India</li>
            </Link>{" "}
            <Link to="/wellness-in-india">
              <li>Wellness in India</li>
            </Link>
          </ul>
        </div>
        <div className="custom-width-15 md:w-full flex flex-col gap-4 md:items-center">
          <p className="footer-divset-title">SERVICES</p>
          <ul className="footer-divset-options md:items-center">
            <Link to="/services/process">
              <li>Process</li>
            </Link>{" "}
            <Link to="/services/visa">
              <li>Visa</li>
            </Link>{" "}
          </ul>
        </div>
        <div className="custom-width-15 md:w-full flex flex-col gap-4 md:items-center">
          <p className="footer-divset-title">RESOURCES</p>
          <ul className="footer-divset-options md:items-center">
            <Link to="/terms-and-conditions">
              <li>Terms & Conditions</li>
            </Link>{" "}
            <Link to="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>{" "}
            <Link to="/#contact">
              <li>Contact us</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-2 w-1/4 md:w-full items-start justify-center md:items-center">
          <div className="footer-social-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.9248 4.77344C7.9794 4.77344 4.78125 7.97159 4.78125 11.917C4.78125 15.4823 7.39364 18.4376 10.809 18.974V13.9814H8.9945V11.917H10.809V10.3432C10.809 8.55307 11.8748 7.56441 13.5071 7.56441C14.2886 7.56441 15.1058 7.70371 15.1058 7.70371V9.46102H14.2057C13.3178 9.46102 13.0413 10.0118 13.0413 10.5768V11.917H15.0222L14.7057 13.9814H13.0413V18.974C16.4559 18.4383 19.0683 15.4816 19.0683 11.917C19.0683 7.97159 15.8701 4.77344 11.9248 4.77344Z"
                fill="#700619"
              />
            </svg>
          </div>
          <div className="footer-social-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.9248 4.77344C13.8657 4.77344 14.1078 4.78058 14.8693 4.8163C15.6301 4.85202 16.148 4.97131 16.6038 5.14847C17.0753 5.32992 17.4724 5.57565 17.8696 5.97212C18.2329 6.32922 18.5139 6.76119 18.6933 7.23795C18.8697 7.69299 18.9897 8.21161 19.0254 8.9724C19.059 9.7339 19.0683 9.97606 19.0683 11.917C19.0683 13.8579 19.0612 14.1 19.0254 14.8615C18.9897 15.6223 18.8697 16.1402 18.6933 16.596C18.5144 17.073 18.2333 17.5051 17.8696 17.8618C17.5124 18.2249 17.0805 18.506 16.6038 18.6854C16.1487 18.8619 15.6301 18.9819 14.8693 19.0176C14.1078 19.0512 13.8657 19.0605 11.9248 19.0605C9.98388 19.0605 9.74171 19.0533 8.98021 19.0176C8.21943 18.9819 7.70152 18.8619 7.24576 18.6854C6.76881 18.5065 6.33677 18.2254 5.97993 17.8618C5.61662 17.5048 5.33554 17.0728 5.15628 16.596C4.97913 16.1409 4.85983 15.6223 4.82411 14.8615C4.79054 14.1 4.78125 13.8579 4.78125 11.917C4.78125 9.97606 4.78839 9.7339 4.82411 8.9724C4.85983 8.2109 4.97913 7.69371 5.15628 7.23795C5.33504 6.76089 5.61619 6.32881 5.97993 5.97212C6.33687 5.60868 6.76888 5.32758 7.24576 5.14847C7.70152 4.97131 8.21871 4.85202 8.98021 4.8163C9.74171 4.78272 9.98388 4.77344 11.9248 4.77344ZM11.9248 8.3452C10.9775 8.3452 10.069 8.72151 9.39916 9.39134C8.72932 10.0612 8.35301 10.9697 8.35301 11.917C8.35301 12.8642 8.72932 13.7727 9.39916 14.4426C10.069 15.1124 10.9775 15.4887 11.9248 15.4887C12.8721 15.4887 13.7806 15.1124 14.4504 14.4426C15.1202 13.7727 15.4965 12.8642 15.4965 11.917C15.4965 10.9697 15.1202 10.0612 14.4504 9.39134C13.7806 8.72151 12.8721 8.3452 11.9248 8.3452ZM16.5681 8.16661C16.5681 7.92979 16.474 7.70266 16.3065 7.53521C16.1391 7.36775 15.9119 7.27367 15.6751 7.27367C15.4383 7.27367 15.2112 7.36775 15.0437 7.53521C14.8763 7.70266 14.7822 7.92979 14.7822 8.16661C14.7822 8.40343 14.8763 8.63056 15.0437 8.79801C15.2112 8.96547 15.4383 9.05955 15.6751 9.05955C15.9119 9.05955 16.1391 8.96547 16.3065 8.79801C16.474 8.63056 16.5681 8.40343 16.5681 8.16661ZM11.9248 9.7739C12.4931 9.7739 13.0382 9.99969 13.4401 10.4016C13.842 10.8035 14.0678 11.3486 14.0678 11.917C14.0678 12.4853 13.842 13.0304 13.4401 13.4323C13.0382 13.8342 12.4931 14.06 11.9248 14.06C11.3564 14.06 10.8113 13.8342 10.4094 13.4323C10.0075 13.0304 9.78172 12.4853 9.78172 11.917C9.78172 11.3486 10.0075 10.8035 10.4094 10.4016C10.8113 9.99969 11.3564 9.7739 11.9248 9.7739Z"
                fill="#700619"
              />
            </svg>
          </div>
          <div className="footer-social-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.1817 7.38397C18.6364 7.6252 18.058 7.78363 17.4659 7.85401C18.09 7.48071 18.5572 6.89322 18.7803 6.201C18.1945 6.5496 17.5523 6.79391 16.8829 6.92607C16.4333 6.44501 15.8374 6.12597 15.1878 6.01854C14.5381 5.91112 13.8712 6.02133 13.2907 6.33205C12.7101 6.64277 12.2485 7.13658 11.9776 7.73671C11.7066 8.33684 11.6416 9.00967 11.7925 9.65061C10.6046 9.59107 9.44249 9.28237 8.38165 8.74457C7.3208 8.20676 6.38492 7.45186 5.63476 6.52889C5.36923 6.98497 5.22969 7.50343 5.23044 8.03117C5.23044 9.06698 5.75763 9.98206 6.55913 10.5178C6.08481 10.5029 5.62092 10.3748 5.20615 10.1442V10.1814C5.20629 10.8712 5.44501 11.5398 5.88182 12.0737C6.31863 12.6077 6.92665 12.9741 7.6028 13.1109C7.16248 13.2302 6.70079 13.2478 6.25267 13.1624C6.44331 13.7562 6.81487 14.2755 7.31534 14.6476C7.8158 15.0197 8.42011 15.226 9.04365 15.2376C8.42393 15.7243 7.71436 16.084 6.95551 16.2963C6.19666 16.5086 5.4034 16.5693 4.62109 16.4748C5.98672 17.3531 7.57644 17.8193 9.20009 17.8178C14.6956 17.8178 17.7009 13.2652 17.7009 9.317C17.7009 9.18842 17.6973 9.05841 17.6916 8.93125C18.2766 8.50848 18.7814 7.98475 19.1824 7.38468L19.1817 7.38397Z"
                fill="#700619"
              />
            </svg>
          </div>
          <div className="footer-social-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
            >
              <path
                d="M3.69761 1.99654C3.69761 2.87268 2.94944 3.58293 2.02654 3.58293C1.10363 3.58293 0.355469 2.87268 0.355469 1.99654C0.355469 1.12041 1.10363 0.410156 2.02654 0.410156C2.94944 0.410156 3.69761 1.12041 3.69761 1.99654Z"
                fill="#700619"
              />
              <path
                d="M0.583991 4.749H3.44052V13.5351H0.583991V4.749Z"
                fill="#700619"
              />
              <path
                d="M8.03953 4.749H5.183V13.5351H8.03953C8.03953 13.5351 8.03953 10.7691 8.03953 9.0397C8.03953 8.00167 8.38872 6.95909 9.78201 6.95909C11.3566 6.95909 11.3471 8.31752 11.3398 9.36993C11.3302 10.7456 11.3531 12.1494 11.3531 13.5351H14.2096V8.89801C14.1854 5.93707 13.4253 4.57273 10.9246 4.57273C9.43955 4.57273 8.519 5.25708 8.03953 5.87624V4.749Z"
                fill="#700619"
              />
            </svg>
          </div>
        </div>
      </div>{" "}
      <div className="footer-enddiv py-8 w-full flex justify-between px-10 md:flex-col md:gap-6 md:px-4 md:items-center">
        <p className="footer-enddiv-copyright">© 2024 Copyright Mediways.com</p>
        <p className="footer-enddiv-termscondition">
          <Link to="/terms-and-conditions">User Terms & Conditions</Link> |
          <Link to="/privacy-policy"> Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}
