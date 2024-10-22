"use client"
import Image from "next/image";

interface FeatureProps {
    img: string,
    heading: string,
    name: string,
    info: string,
    text: string
}
const SponsorsComponent = ({ img, heading, name, info, text } : FeatureProps) => {
    return(
        <article className="md:grid items-center text-center flex m-3 my-5 p-4 items-center">
            <div className="m-2">
           <h3 className="text-3xl text-eestec font-bold">{heading}</h3>
                <Image src={img} alt="Feature Image" height={150} width={150} className="p-4"></Image> 
                <h6 className="text-black text-sm">{name}</h6>
                <h6 className="text-black text-sm">{info}</h6>
            </div>
        </article>
    );
}
export default SponsorsComponent;