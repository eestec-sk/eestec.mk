"use client";

import Image from "next/image";
import Typewriter from 'typewriter-effect'; 

const HeroComponent = () => {
  return (
    <div
      className="w-full p-10"
      style={{
        backgroundImage: `linear-gradient(0deg, #e52a30 0%, rgba(38, 38, 38, 0.1) 70%), url(/yearbook-photo.jpeg)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        height: "50rem",
      }}
    >
      <div className="container ">
        <h3 className="font-eestec text-white lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-black"
        style={{"paddingTop": "35rem"}}>
          Power your future, <br /> 
        
        <Typewriter 
        onInit={(typewriter) => { 
          typewriter.typeString('Be an EESTECer!') 
            .callFunction(() => { 
              console.log('String typed out!'); 
            }) 
            .pauseFor(2500) 
            .deleteAll() 
            .callFunction(() => { 
              console.log('All strings were deleted'); 
            }) 
            .start(); 
        }}
        options={{ loop: true }} 
      /> 
      </h3>
        <p className="font-eestec text-md text-white">
          Invoking Passion, Pursuing Development, Empowering Collaboration
        </p>
      </div>
    </div>
  );
};
export default HeroComponent;
