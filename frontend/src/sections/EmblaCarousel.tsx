"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import Img from "../images/partners/brainster.png";
import Img2 from "../images/partners/haselt.png";
import Img3 from "../images/partners/it-labs.png";
import Img4 from "../images/partners/iw-connect.png";
import Img5 from "../images/partners/semos.png";
import Img6 from "../images/partners/dobra-voda-active.png";
import Img7 from "../images/partners/dobra-voda-wellness.png";
import Img8 from "../images/partners/red-bull.png";
import Img9 from "../images/partners/sano.png";
import Img10 from "../images/partners/sinalco.png";
import Line from "../images/logos_icons/red_line_full.svg";
import SubheadingComponent from "@/components/SubheadingComponent";

const images = [
  Img, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10
];

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <><SubheadingComponent text={"OUR PARTNERS AND SUPPORTERS"} img={Line}></SubheadingComponent><div className="embla" ref={emblaRef}>
      <div className="embla__container gap-3">
        {images.map((img, index) => (
          <div key={index} className="embla__slide flex justify-center items-center p-5">
            <Image src={img} alt={""} width={300}></Image>
          </div>
        ))}
      </div>
    </div></>
  );
}
