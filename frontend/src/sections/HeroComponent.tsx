"use client"

import Image from "next/image";
import HeroImage from "../images/yearbook-photo.jpeg"

const HeroComponent = () => {
    return(
        <div className="w-full p-10" style={{ 
            backgroundImage: `linear-gradient(0deg, #e52a30 0%, rgba(38, 38, 38, 0.5) 100%), url(${HeroImage.src})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`
            }}>
            <div className="container">
                <h3 className="font-eestec text-white lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-black">Power your future, <br/> Be an EESTECer</h3>
                <p className="font-eestec text-md text-white">Invoking Passion, Pursuing Development, Empowering Collaboration</p>
            </div>
        </div>
    );
}
export default HeroComponent;