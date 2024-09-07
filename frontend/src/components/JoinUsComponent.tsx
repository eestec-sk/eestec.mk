"use client"

import Image from "next/image";

interface JoinUsProps {
    img: string,
    heading: string,
    text: string
}

const JoinUsComponent = ({ img, heading, text } : JoinUsProps) => {
    return(
        <div className="m-4 p-4 block md:flex justify-self-start md:my-16">
            <Image src={img} alt="Join Us Image" className="p-4 mx-4"></Image>
            <div className="font-eestec">
                <h3 className="text-xl md:text-3xl text-eestec">{heading}</h3>
                <p className="text-black text-justify md:text-xl sm:w-96 w-full">{text}</p>
            </div>
        </div>
    );
}
export default JoinUsComponent;