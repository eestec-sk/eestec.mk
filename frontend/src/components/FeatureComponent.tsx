"use client"
import Image from "next/image";

interface FeatureProps {
    img: string,
    heading: string,
    subheading: string
}
const FeatureComponent = ({ img, heading, subheading } : FeatureProps) => {
    return(
        <article className="md:grid items-center text-center flex m-3 my-5 p-4 items-center">
            <Image src={img} alt="Feature Image" height={150} width={150} className="p-4"></Image> 
            <div className="m-2">
                <h3 className="text-5xl text-eestec font-bold">{heading}</h3>
                <h6 className="text-black text-sm">{subheading}</h6>
            </div>
        </article>
    );
}
export default FeatureComponent;