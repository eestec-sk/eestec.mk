"use client"
import Image, { StaticImageData } from "next/image";

interface FeatureProps {
    img: StaticImageData,
    heading: string,
    subheading: string
}
const MembersComponent = ({ img, heading, subheading } : FeatureProps) => {
    return(
        <article className="md:grid text-center justify-center flex m-3 my-5">
            <div className="items-center">
            <Image src={img} alt="Feature Image" height={200} width={200} 
            style={{ borderRadius: "50%", border: "5px solid #e52a30" }} 
            className="mt-8 mb-8 rounded-full"></Image> 
            
            <h3 className="text-2xl text-eestec font-bold">{heading}</h3>
            <h6 className="text-black text-xl">{subheading}</h6>
            </div>
        </article>
    );
}
export default MembersComponent;