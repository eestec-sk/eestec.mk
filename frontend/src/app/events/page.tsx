"use client";
import Image from "next/image";
import HeaderComponent from "@/components/HeaderComponent";
import SkeletonComponent from "@/components/SkeletonComponent";
import Link from "next/link";
import Img from "../../images/events-showcase/b2b.png";
import Img2 from "../../images/events-showcase/ea-robotics.png";
import Img3 from "../../images/events-showcase/gamedev.png";
import Img4 from "../../images/events-showcase/b2b.png";
import Img5 from "../../images/events-showcase/b2b.png";
import Img6 from "../../images/events-showcase/b2b.png";
import Img7 from "../../images/events-showcase/b2b.png";
import Img8 from "../../images/events-showcase/b2b.png";
import Img9 from "../../images/events-showcase/b2b.png";

const events = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div
        className="w-full p-10"
        style={{
          backgroundColor: `white`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <h3 className="my-[1.72rem] font-eestec text-center text-eestec lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-black">
          EESTEC EVENTS
        </h3>

        <div className="lg:flex gap-20 justify-center my-[4rem]">
          <div className="md:visible">
            <SkeletonComponent
              img={Img}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={"Lorem"}
              link={"123"}
            ></SkeletonComponent>
          </div>
          <div className=" max-md:hidden lg:visible">
            <SkeletonComponent
              img={Img2}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={"Lorem"}
              link={"123"}
            ></SkeletonComponent>
          </div>
          <div className=" max-md:hidden lg:visible">
            <SkeletonComponent
              img={Img3}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={"Lorem"}
              link={"123"}
            ></SkeletonComponent>
          </div>
        </div>
        <div className="lg:flex gap-20 justify-center my-[4rem]">
          <div className="md:visible">
            <SkeletonComponent
              img={Img4}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={"Lorem"}
              link={"123"}
            ></SkeletonComponent>
          </div>
          <div className=" max-md:hidden lg:visible">
            <SkeletonComponent
              img={Img5}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={"Lorem"}
              link={"123"}
            ></SkeletonComponent>
          </div>
          <div className=" max-md:hidden lg:visible">
            <SkeletonComponent
              img={Img6}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={"Lorem"}
              link={"123"}
            ></SkeletonComponent>
          </div>
        </div>
        {/* <div className="lg:flex gap-20 justify-center my-[4rem]">
          <div className="md:visible">
            <SkeletonComponent
              img={Img7}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={"Lorem"}
              link={"123"}
            ></SkeletonComponent>
          </div>
          <div className=" max-md:hidden lg:visible">
            <SkeletonComponent
              img={Img8}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={"Lorem"}
              link={"123"}
            ></SkeletonComponent>
          </div>
          <div className=" max-md:hidden lg:visible">
            <SkeletonComponent
              img={Img9}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={"Lorem"}
              link={"123"}
            ></SkeletonComponent>
          </div>
        </div> */}

        <div className="justify-center text-center">
          <Link href={"/"} className="button-drug p-1">
            Load More
          </Link>
        </div>
      </div>
      {/* <div className="md:flex justify-center bg-eestec">
        <article className="grid justify-items-center text-center lg:my-6">
          <Image src={Img} alt="Feature Image" className="my-[1.25rem]"></Image>
        </article>
      </div> */}
    </div>
  );
};
export default events;
