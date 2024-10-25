"use client"
import Image from "next/image";

interface SubheadingProps {
    text: string,
    img: string,
}

const SubheadingComponent = ({ text, img } : SubheadingProps) => {
    return(
        <div className="ustify-self-start grid justify-items-center">
        <h3 className="font-eestec text-center font-bold text-2xl md:text-4xl text-black capitalize my-5">{text}</h3>
        <Image src={img} alt="Feature Image" width={100} height={100} className="w-72 md:w-auto"/> 
        </div>
    );
}
export default SubheadingComponent;