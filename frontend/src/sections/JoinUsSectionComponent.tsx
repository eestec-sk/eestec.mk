"use client";

import Image from "next/image";
import JoinUsComponent from "../components/JoinUsComponent";

import SubheadingComponent from "@/components/SubheadingComponent";

const JoinUsSectionComponent = () => {
  return (
    <div
      className="w-full p-10"
      style={{
        backgroundImage: `url(/images/testing/bg.png)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        height: "67rem",
      }}
    >
      <div className="m-2 grid justify-items-center">
        <div className="grid justify-self-start">
          <SubheadingComponent
            text="Why Should you Join us?"
            img={"/images/logos_icons/red_line.svg"}
          />
        </div>
        <div className="grid justify-self-start">
          <JoinUsComponent
            img={"/images/logos_icons/events.svg"}
            heading={"International and local events"}
            text={
              "Be part of the organizing committee or simply attend an international workshop, exchange or motivational weekend. You will certainly not regret it!"
            }
          />
        </div>
        <div className="grid justify-self-center">
          <JoinUsComponent
            img={"/images/logos_icons/meeting people.svg"}
            heading={"Meeting new people"}
            text={
              "You will have the chance to meet new people from all over Europe and explore their culture, tradition and cuisine."
            }
          />
        </div>
        <div className="grid justify-self-end" style={{ justifySelf: "right" }}>
          <JoinUsComponent
            img={"/images/logos_icons/development.svg"}
            heading={"Personal development"}
            text={
              "Improve your skills and qualities through training and set life goals that will improve your employment prospects."
            }
          />
        </div>
      </div>
    </div>
  );
};
export default JoinUsSectionComponent;
