"use client";
import Image from "next/image";
import Img from "../../images/logos_icons/lightning.svg";
import HeaderComponent from "@/components/HeaderComponent";
import SkeletonComponent from "@/components/SkeletonComponent";
import Link from "next/link";

const events = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div
        className="w-full p-10"
        style={{
          backgroundColor: `#e52a30`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <h3 className="my-[1.72rem] font-eestec text-center text-white lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-black">
          Events coming soon!
        </h3>

        <div className="lg:flex gap-20 justify-center my-[4rem]">
            <div className=" max-md:hidden lg:visible">
            <SkeletonComponent></SkeletonComponent>
            </div>
            <div className=" max-md:hidden lg:visible">
            <SkeletonComponent></SkeletonComponent>
            </div>
            <div className=" max-md:hidden lg:visible">
            <SkeletonComponent></SkeletonComponent>
            </div>
            <div className="md:visible">
            <SkeletonComponent></SkeletonComponent>
            </div>
        </div>

        <div className="justify-center text-center">
          <Link href={"/"} className="button text-white p-1">
          GO BACK
          </Link>
        </div>

        
      </div>
      <div className="md:flex justify-center bg-eestec">
        <article className="grid justify-items-center text-center lg:my-6">
          <Image src={Img} alt="Feature Image" className="my-[1.25rem]"></Image>
        </article>
      </div>
    </div>
  );
};
export default events;
