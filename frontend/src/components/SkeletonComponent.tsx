import React from "react";
import Image, { StaticImageData } from "next/image";
import Img from "../images/events-showcase/b2b.png";
import Link from "next/link";

interface EventProps {
  img: StaticImageData;
  title: string;
  date: string;
  info: string;
  link: string;
}

const SkeletonComponent = ({ img, title, date, info, link }: EventProps) => {
  return (
    <div className="skeleton-card desktop-event">
      <div style={{ flex: "1 1 60%", background: "#eee" }}>
        <Image
          src={img}
          alt={"Event"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></Image>
      </div>
      <div className="text-event">
        <div>
          <h2 className="font-bold text-2xl" style={{ margin: "0 0 8px 0" }}>
            {title}
          </h2>
          <p
            className="text-sm"
            style={{ margin: "0 0 16px 0", color: "#888" }}
          >
            {date}
          </p>
          <p className="text-sm" style={{ margin: "0 0 16px 0" }}>
            {info}
          </p>
        </div>
        <Link className="link-event" href={link} target="_blank">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default SkeletonComponent;
