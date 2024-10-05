import React from "react";
import Image from "next/image";

import Img from '../images/logos_icons/flag_icon.svg'
import Img2 from '../images/logos_icons/bulb.svg'

const MissionVisionComponent = () => {
  return (
    <div className="md:flex gap-[10rem] justify-center bg-eestec">
    <div className="flex justify-center bg-eestec">
       <Image src={Img} alt="Feature Image" className="p-3 m-2"/>
      <article className="md:grid justify-items-center text-center flex m-3 my-5">
        <div>
          <h3 className="text-5xl font-bold text-left">Our Mission</h3>
          <h6 className="text-justify w-[22rem]">
            Connecting EECS students and supporting them in their professional,
            academic and personal growth.
          </h6>
        </div>
      </article>
      </div>

    <div className="flex justify-center bg-eestec">
      <Image src={Img2} alt="Feature Image" className="p-3 m-2"/>
      <article className="md:grid justify-items-center text-center flex m-3 my-5">
        
        <div>
          <h3 className="text-5xl font-bold text-left">Our Vision</h3>
          <h6 className="text-justify w-[23rem]">
            Empowering EECS students across Europe to reach their full potential
            in their academic, professional and social lives in a strong and
            recognizable network.
          </h6>
        </div>
      </article>
      
    </div>
    </div>
  );
};
export default MissionVisionComponent;
