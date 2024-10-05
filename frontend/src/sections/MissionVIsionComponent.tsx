import React from "react";
import Image from "next/image";

import MissionComponent from "../components/MissionComponent";

const MissionVisionComponent = () => {
  return (
    <div className="lg:flex grid justify-center bg-eestec">
      <MissionComponent
        img={"/images/logos_icons/flag_icon.svg"}
        heading={"Our Mission"}
        text={
          "Connecting EECS students and supporting them in their professional, academic and personal growth."
        }
      />
      <MissionComponent
        img={"/images/logos_icons/bulb.svg"}
        heading={"Our Vision"}
        text={
          "Empowering EECS students across Europe to reach their full potential in their academic, professional and social lives in a strong and recognizable network."
        }
      />
    </div>
  );
};
export default MissionVisionComponent;
