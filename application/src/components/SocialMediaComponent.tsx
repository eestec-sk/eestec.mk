"use client"

import Image from "next/image";
import Link from "next/link";
import IconComponent from "./IconComponent";
import { IconType } from "react-icons";

interface JoinUsProps {
    mediaLink: string,
    icon: IconType;
    text: string,
    size: string;
}

const SocialMediaComponent = ({ icon: Icon,  mediaLink, text, size } : JoinUsProps) => {
    return(
        <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
            <Link href={mediaLink}>
            <Icon color={"White"} size={size}/>
              <h3 className="text-center text-base underline decoration-2 
                            underline-offset-4 font-medium my-1 text-white">
                {text}
              </h3>
            </Link>
          </article>
    );
}
export default SocialMediaComponent;