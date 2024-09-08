"use client"
import Image from "next/image";
import {CountUp} from "countup.js";
import { useEffect } from "react";

interface FeatureProps {
    img: string,
    heading: string,
    subheading: string,
    id: number
}
const FeatureComponent = ({ img, id, heading, subheading } : FeatureProps) => {
    useEffect(() => {
        const options = {
            duration: 15,
            };
        const count1 = new CountUp(id.toString(), id, options);
    
            count1.start();
    }, [id]);
    return(
        <article className="md:grid items-center text-center flex m-3 my-5 p-4 items-center">
            <Image src={img} alt="Feature Image" height={150} width={150} className="p-4 mx-1"></Image> 
            <div className="items-center text-center">
                <div className="flex items-center text-center">
                    <h3 className="text-5xl text-eestec font-bold pl-6" id={id.toString()}></h3>
                    <h3 className="text-5xl text-eestec font-bold">{heading}</h3>
                </div>
                <h6 className="text-black text-sm">{subheading}</h6>
            </div>
        </article>
    );
}
export default FeatureComponent;