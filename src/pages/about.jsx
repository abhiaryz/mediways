import { Heading } from "../components";
import { AboutData } from "../data";
import AboutCard from "../components/about-card";

const About = () => {
  return (
    <div className="overflow-hidden pt-24">
      <div className="relative">
        <div className="">
          <img
            src="banner.jpg"
            className="h-[35rem] w-full object-cover brightness-50"
          />
        </div>
        <div className="absolute bottom-10 ml-8 w-[70%] space-y-2 bg-black/60 px-10 py-5">
          <h1 className="family-poppins text-4xl font-bold text-white">
            About us
          </h1>
          <p className="family-poppins text-xl font-normal text-white">
            Your gateway to high-quality healthcare services and an unparalleled
            holiday experience in India
          </p>
        </div>
      </div>
      <div className="verflow-hidden py-10">
        <Heading
          title={"About us"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa. "
          }
        />
        <div className="px-18 m-auto flex w-11/12 flex-wrap justify-center p-5 md:w-3/4">
          <p className="family-sora">
            Welcome to Mediways! your trusted partner in global healthcare
            solutions. We understand that seeking medical treatment away from
            home can be a daunting prospect, which is why we are here to guide
            you every step of the way.
            <br />
            <br /> At Mediways Asia, we are committed to providing personalized
            and seamless healthcare experiences to individuals seeking quality
            medical care abroad. Our mission is to bridge the gap between
            patients and world-class healthcare providers, offering access to
            cutting-edge treatments and renowned medical professionals around
            the globe.
            <br />
            <br /> With years of experience in the medical tourism industry, our
            dedicated team strives to ensure that every aspect of your medical
            journey is carefully planned and executed with precision. From
            initial consultation to post-treatment care, we prioritize your
            comfort, safety, and well-being above all else.
          </p>
          <div className="flex w-full flex-col flex-wrap gap-6 md:flex-row">
            {AboutData.map((item, index) => (
              <AboutCard
                key={index}
                title={item.title}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
