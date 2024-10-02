"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderComponent from "@/components/HeaderComponent";
import SkeletonComponent from "@/components/SkeletonComponent";
import Img from "../../images/events-showcase/lht.svg";
import Img2 from "../../images/events-showcase/ea-robotics.png";
import Img3 from "../../images/events-showcase/ssa.png";
import Img4 from "../../images/events-showcase/challenge.png";
import Img5 from "../../images/events-showcase/calu.png";
import Img6 from "../../images/events-showcase/b2b.png";

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
          <div>
            <SkeletonComponent
              img={Img}
              title={"Learn How To"}
              date={"01.01.1970"}
              info={
                "Learn How to develop Apps and Improve Your Coding Skills with EESTEC LC Skopje!"
              }
              link={"https://lht.eestec.mk/"}
            ></SkeletonComponent>
          </div>
          <div>
            <SkeletonComponent
              img={Img2}
              title={"EESTEC ACADEMY"}
              date={"01.01.1970"}
              info={"Stay on top of popular technologies with EESTEC ACADEMY!"}
              link={"https://academy.eestec.mk/"}
            ></SkeletonComponent>
          </div>
          <div>
            <SkeletonComponent
              img={Img3}
              title={"SOFT SKILLS ACADEMY"}
              date={"01.01.1970"}
              info={
                "A series of free trainings aimed at improving the soft skills of students."
              }
              link={"https://www.instagram.com/ssa_skopje/"}
            ></SkeletonComponent>
          </div>
        </div>
        <div className="lg:flex gap-20 justify-center my-[4rem]">
          <div>
            <SkeletonComponent
              img={Img4}
              title={"EESTech Challenge"}
              date={"01.01.1970"}
              info={
                "EESTech Challenge  is the students’ international competition organized by EESTEC."
              }
              link={"https://www.instagram.com/eestech_challenge_lc_skopje/"}
            ></SkeletonComponent>
          </div>
          <div>
            <SkeletonComponent
              img={Img5}
              title={"Code Up, Level Up"}
              date={"01.01.1970"}
              info={"Level Up Your Coding Skills"}
              link={"https://calu.eestec.mk/"}
            ></SkeletonComponent>
          </div>
          <div>
            <SkeletonComponent
              img={Img6}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={
                "Free lecture series on the basics of structured programming!"
              }
              link={"https://www.instagram.com/b2b_skopje/"}
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
          <div>
            <SkeletonComponent
              img={Img8}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={"Lorem"}
              link={"123"}
            ></SkeletonComponent>
          </div>
          <div>
            <SkeletonComponent
              img={Img9}
              title={"Back to Basics"}
              date={"01.01.1970"}
              info={"Lorem"}
              link={"123"}
            ></SkeletonComponent>
          </div>
        </div> */}

        {/* <div className="justify-center text-center">
          <Link href={"/"} className="button-drug p-1">
            Load More
          </Link>
        </div> */}
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
