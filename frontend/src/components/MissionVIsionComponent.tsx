import React from "react";
import Image from "next/image";

import Img from '../images/logos_icons/flag_icon.svg'
import Img2 from '../images/logos_icons/bulb.svg'
import MissionComponent from "./MissionComponent";

const MissionVisionComponent = () => {
  return (
    <div className="lg:flex grid justify-center bg-eestec">
      {/* <article className="md:grid justify-items-center text-center flex m-3 my-5">
        <Image src={Img} alt="Feature Image" className="p-3 m-2"></Image> 
        <div>
          <h3 className="text-5xl font-bold">Our Mission</h3>
          <h6 className="text-justify">
            Connecting EECS students and supporting them in their professional,
            academic and personal growth.
          </h6>
        </div>
      </article>
      <article className="md:grid justify-items-center text-center flex m-3 my-5">
        <Image src={Img2} alt="Feature Image" className="p-3 m-2"></Image> 
        <div>
          <h3 className="text-5xl font-bold">Our Vision</h3>
          <h6 className="text-justify ">
            Empowering EECS students across Europe to reach their full potential
            in their academic, professional and social lives in a strong and
            recognizable network.
          </h6>
        </div>
      </article> */}
      <MissionComponent img={Img} heading={"Our Mission"} text={"Connecting EECS students and supporting them in their professional, academic and personal growth."} />
      <MissionComponent img={Img2} heading={"Our Vision"} text={"Empowering EECS students across Europe to reach their full potential in their academic, professional and social lives in a strong and recognizable network."} />
    </div>
  );
};
export default MissionVisionComponent;
