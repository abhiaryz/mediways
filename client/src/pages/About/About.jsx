import React,{useEffect} from "react";
import "./About.scss";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  return (
    <section id="about" className="flex flex-col w-full">
      <div className="relative w-full flex items-end justify-center">
        <img
          src="./assets/images/aboutimg.png"
          alt=""
          className="object-cover w-full object-top md:hidden"
          style={{ height: "95vh" }}
        />{" "}
        <img
          src="./assets/images/aboutimgphone.png"
          alt=""
          className="object-cover w-full hidden md:block"
          style={{ height: "95vh" }}
        />
        <div className="flex flex-col absolute px-8 md:gap-4 md:py-6 md:w-11/12 py-4 items-center about-div">
          <p className="about-div-title">INDIA Health Experience</p>
          <p className="about-title-subheading">
            Your gateway to high-quality healthcare services and an unparalleled
            holiday experience in Dubai
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-16 w-full items-center justify-center">
        <div className="w-4/5 md:w-11/12 flex flex-col gap-6 ">
          <p className="about-title">
            About<span className="text-[#700619] font-semibold">Mediways</span>
          </p>
          <p className="about-description">
            India has also been rapidly emerging as a prominent destination for
            medical tourism, with its state-of-the-art facilities, highly
            skilled medical professionals, and affordable treatment options
            attracting patients from around the world.
            <br />
            <br /> India's healthcare sector offers a wide range of specialized
            treatments including cardiac surgery, organ transplants, orthopedic
            procedures, cosmetic surgery, and alternative therapies such as
            Ayurveda and yoga. Cities like Delhi, Mumbai, Chennai, and Bangalore
            have become hubs for medical tourism, offering world-class
            healthcare infrastructure and services.
            <br />
            <br /> The Indian government has been actively promoting medical
            tourism by simplifying visa procedures, improving infrastructure,
            and providing incentives for healthcare providers to maintain
            international standards. Organizations like the Ministry of Tourism
            and the Federation of Indian Chambers of Commerce & Industry (FICCI)
            play key roles in promoting India as a preferred destination for
            medical travelers.
            <br />
            <br /> Additionally, India offers a rich cultural experience and
            diverse tourist attractions, making it an attractive destination for
            combining medical treatment with leisure travel. Patients can
            explore historical monuments, enjoy scenic landscapes, and indulge
            in culinary delights while recuperating from their medical
            procedures.
            <br /> <br />
            In conclusion, India's burgeoning medical tourism industry, coupled
            with its cultural richness and hospitality, positions the country as
            a top choice for individuals seeking quality healthcare and a
            memorable travel experience.
          </p>
        </div>
      </div>
    </section>
  );
}
