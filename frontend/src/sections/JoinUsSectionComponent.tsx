"use client";

import Image from "next/image";
import JoinUsComponent from "../components/JoinUsComponent";

import Img from "../images/logos_icons/events.svg";
import Img2 from "../images/logos_icons/meeting people.svg";
import Img3 from "../images/logos_icons/development.svg";
import SubheadingComponent from "@/components/SubheadingComponent";
import HeroImage from "../images/testing/bg.png";
import Line from "../images/logos_icons/red_line.svg";

const JoinUsSectionComponent = () => {
  return (
    <div
      className="w-full p-10"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        height: "67rem",
       
      }}
    >
      <div className="m-2 grid justify-items-center">
        <div className="grid justify-self-start">
          <SubheadingComponent text="Why Should you Join us?" img={Line} />
        </div>
        <div className="grid justify-self-start">
          <JoinUsComponent
            img={Img}
            heading={"International and local events"}
            text={
              "Be part of the organizing committee or simply attend an international workshop, exchange or motivational weekend. You will certainly not regret it!"
            }
          ></JoinUsComponent>
        </div>
        <div className="grid justify-self-center">
          <JoinUsComponent
            img={Img2}
            heading={"Meeting new people"}
            text={
              "You will have the chance to meet new people from all over Europe and explore their culture, tradition and cuisine."
            }
          ></JoinUsComponent>
        </div>
        <div className="grid justify-self-end" style={{justifySelf: "right"}}>
          <JoinUsComponent
            img={Img3}
            heading={"Personal development"}
            text={
              "Improve your skills and qualities through training and set life goals that will improve your employment prospects."
            }
          ></JoinUsComponent>
        </div>
      </div>
    </div>
  );
};
export default JoinUsSectionComponent;
