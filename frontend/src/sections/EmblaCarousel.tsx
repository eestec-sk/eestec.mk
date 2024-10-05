"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Line from "../../../frontend/public/images/logos_icons/red_line_full.svg";
import SubheadingComponent from "@/components/SubheadingComponent";

import partnerData from "@/dataFolder/partner.json";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      <SubheadingComponent
        text={"OUR PARTNERS AND SUPPORTERS"}
        img={Line}
      />
      <div className="embla" ref={emblaRef}>
        <div className="embla__container gap-3">
          {partnerData.map(
            (
              partner: { image: string | StaticImport; name: string },
              index: React.Key | null | undefined
            ) => (
              <div
                key={index}
                className="embla__slide flex justify-center items-center p-5"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={300}
                  height={300}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
