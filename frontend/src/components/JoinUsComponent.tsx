"use client"

import Image from "next/image";

interface JoinUsProps {
    img: string,
    heading: string,
    text: string
}

const JoinUsComponent = ({ img, heading, text } : JoinUsProps) => {
    return(
        <div className="m-4 p-4">
            <Image src={img} alt="Join Us Image"></Image>
            <div className="font-eestec">
                <h3 className="text-2xl text-eestec">{heading}</h3>
                <p className="text-black text-justify text-sm w-96">{text}</p>
            </div>
        </div>
    );
}
export default JoinUsComponent;