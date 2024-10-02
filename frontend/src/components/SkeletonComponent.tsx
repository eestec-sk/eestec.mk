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
    <div
      style={{
        display: "flex",
        width: "500px",
        height: "300px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: `
      0px 216px 60px 0px rgba(0, 0, 0, 0%),
      0px 138px 55px 0px rgba(0, 0, 0, 1%),
      0px 78px 47px 0px rgba(0, 0, 0, 5%),
      0px 35px 35px 0px rgba(0, 0, 0, 9%),
      0px 9px 19px 0px rgba(0, 0, 0, 10%)
      `,
        transition: "transform 0.3s ease-in-out",
      }}
      className="skeleton-card"
    >
      <div style={{ flex: "1 1 60%", background: "#eee" }}>
        <Image
          src={img}
          alt={"Event"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></Image>
      </div>
      <div
        style={{
          flex: "1 1 40%",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          color: "black",
          textAlign: "center",
        }}
      >
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
        <Link
          style={{
            padding: "8px 16px",
            background: "#e52a30",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          href={link}
          target="_blank"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
export default SkeletonComponent;
