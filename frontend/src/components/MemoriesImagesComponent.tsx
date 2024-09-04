"use client";

import Image from "next/image";

interface MemoriesProps {
  img: string;
  text: string;
}

const MemoriesImagesComponent = ({ img, text }: MemoriesProps) => {
  return (
    <Image
      src={img}
      alt={text}
      style={{ border: "5px solid #e52a30", borderRadius: "5%" }}
      height={500}
      width={500}
      className="mt-8 mb-8 "
    ></Image>
  );
};
export default MemoriesImagesComponent;
