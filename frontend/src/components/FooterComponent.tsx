"use client";
import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaSquareFacebook,
  FaXTwitter,
} from "react-icons/fa6";

import Img from "../images/logos_icons/logo_white.svg";
import Link from "next/link";
import IconComponent from "./IconComponent";

const FooterComponent = () => {
  return (
    <div className="md:flex xl:gap-80 gap-20 justify-center bg-eestec p-4">
      <nav className="flex md:justify-between items-center justify-center">
        <div className="md:grid grid-cols-4 justify-center items-center ">
          <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
            <Link href={"https://www.instagram.com/eesteclcskopje/"}>
              <IconComponent
                icon={FaInstagram}
                size="4rem"
                color="white"
              ></IconComponent>
              <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">
                {"Instagram"}
              </h3>
            </Link>
          </article>
          <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
            <Link href={"https://www.facebook.com/EESTECLCSkopje"}>
              <IconComponent
                icon={FaSquareFacebook}
                size="4rem"
                color="white"
              ></IconComponent>
              <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">
                {"Facebook"}
              </h3>
            </Link>
          </article>
          <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
            <Link href={"https://x.com/EESTEC_Skopje"}>
              <IconComponent
                icon={FaXTwitter}
                size="4rem"
                color="white"
              ></IconComponent>
              <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">
                {"Twitter"}
              </h3>
            </Link>
          </article>
          <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
            <Link
              href={
                "https://www.linkedin.com/company/eestec-lcskopje/?originalSubdomain=mk"
              }
            >
              <IconComponent
                icon={FaLinkedin}
                size="4rem"
                color="white"
              ></IconComponent>
              <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">
                {"LinkedIn"}
              </h3>
            </Link>
          </article>
        </div>
      </nav>
      <article className="grid justify-items-center text-center m-3 my-5">
        <Image src={Img} alt="Feature Image" className=" m-2"></Image>
        <div>
          <h6 className="text-center text-white">
            <strong>E</strong>lectrical <strong>E</strong>ngineering{" "}
            <strong>ST</strong>udents&apos; <br /> <strong>E</strong>uropean
            asso<strong>C</strong>iation
          </h6>
        </div>
      </article>
      <article className="md:grid justify-items-center text-center flex justify-center m-3 my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.55183979883628!2d21.406651475247948!3d42.00520273125226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354144327581731%3A0x6c4349f5875b2625!2sEESTEC%20LC%20Skopje!5e0!3m2!1sen!2smk!4v1709081052322!5m2!1sen!2smk"
          width="500"
          height="250"
          loading="lazy"
        />
      </article>
    </div>
  );
};
export default FooterComponent;
