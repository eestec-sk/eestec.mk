import React from "react";
import Image from "next/image";

import Img from '../images/logos_icons/flag_icon.svg'
import Img2 from '../images/logos_icons/bulb.svg'
import MissionComponent from "../components/MissionComponent";

const MissionVisionComponent = () => {
  return (
    <div className="lg:flex grid justify-center bg-eestec">
      <MissionComponent img={Img} heading={"Our Mission"} text={"Connecting EECS students and supporting them in their professional, academic and personal growth."} />
      <MissionComponent img={Img2} heading={"Our Vision"} text={"Empowering EECS students across Europe to reach their full potential in their academic, professional and social lives in a strong and recognizable network."} />
    </div>
  );
};
export default MissionVisionComponent;
