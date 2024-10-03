"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeaderComponent from "@/components/HeaderComponent";
import SkeletonComponent from "@/components/SkeletonComponent";
import Img from "../../images/events-showcase/lht.svg";
import Img2 from "../../images/events-showcase/ea-robotics.png";
import Img3 from "../../images/events-showcase/ssa.png";
import Img4 from "../../images/events-showcase/challenge.png";
import Img5 from "../../images/events-showcase/calu.png";
import Img6 from "../../images/events-showcase/b2b.png";
import Img7 from "../../images/events-showcase/sprint.jpeg";
import Img8 from "../../images/events-showcase/egw.png";
import Img9 from "../../images/events-showcase/robomac.png";
import Img10 from "../../images/events-showcase/lrm.jpg";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const eventList = [
    {
      img: Img,
      title: "Learn How To",
      date: "01.01.1970",
      info: "Learn How to develop Apps and Improve Your Coding Skills with EESTEC LC Skopje!",
      link: "https://lht.eestec.mk/",
      tag: "local",
    },
    {
      img: Img2,
      title: "EESTEC ACADEMY",
      date: "01.01.1970",
      info: "Stay on top of popular technologies with EESTEC ACADEMY!",
      link: "https://academy.eestec.mk/",
      tag: "local",
    },
    {
      img: Img3,
      title: "SOFT SKILLS ACADEMY",
      date: "01.01.1970",
      info: "A series of free trainings aimed at improving the soft skills of students.",
      link: "https://www.instagram.com/ssa_skopje/",
      tag: "international",
    },
    {
      img: Img4,
      title: "EESTech Challenge",
      date: "01.01.1970",
      info: "EESTech Challenge  is the students’ international competition organized by EESTEC.",
      link: "https://www.instagram.com/eestech_challenge_lc_skopje/",
      tag: "international",
    },
    {
      img: Img5,
      title: "Code Up, Level Up",
      date: "01.01.1970",
      info: "Level Up Your Coding Skills",
      link: "https://calu.eestec.mk/",
      tag: "international",
    },
    {
      img: Img6,
      title: "Back to Basics",
      date: "01.01.1970",
      info: "Free lecture series on the basics of structured programming!",
      link: "https://www.instagram.com/b2b_skopje/",
      tag: "local",
    },
    {
      img: Img7,
      title: "IT Sprint",
      date: "01.01.1970",
      info: "Free lecture series on the basics of structured programming!",
      link: "https://www.instagram.com/b2b_skopje/",
      tag: "international",
    },
    {
      img: Img8,
      title: "EESTECers Gone Wild",
      date: "01.01.1970",
      info: "Free lecture series on the basics of structured programming!",
      link: "https://www.instagram.com/b2b_skopje/",
      tag: "international",
    },
    {
      img: Img9,
      title: "Robomac",
      date: "01.01.1970",
      info: "Free lecture series on the basics of structured programming!",
      link: "https://www.instagram.com/b2b_skopje/",
      tag: "local",
    },
    {
      img: Img10,
      title: "Live Regional Meeting",
      date: "01.01.1970",
      info: "Free lecture series on the basics of structured programming!",
      link: "https://www.instagram.com/b2b_skopje/",
      tag: "international",
    },
  ];

  const filteredEvents = eventList.filter(
    (event) =>
      (selectedTag === "all" || event.tag === selectedTag) &&
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 my-4">
          <input
            type="text"
            placeholder="Search events..."
            className="p-2 border border-gray-300 rounded-lg bg-eestec text-white placeholder-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              className={`p-2 border rounded-lg bg-eestec text-white ${
                selectedTag === "all" ? "bg-red-700" : ""
              }`}
              onClick={() => setSelectedTag("all")}
            >
              All
            </button>
            <button
              className={`p-2 border rounded-lg bg-eestec text-white ${
                selectedTag === "local" ? "bg-red-700" : ""
              }`}
              onClick={() => setSelectedTag("local")}
            >
              Local
            </button>
            <button
              className={`p-2 border rounded-lg bg-eestec text-white ${
                selectedTag === "international" ? "bg-red-700" : ""
              }`}
              onClick={() => setSelectedTag("international")}
            >
              International
            </button>
          </div>
        </div>

        <div className="lg:flex gap-20 justify-center my-[4rem] flex-wrap">
          {filteredEvents.map((event, index) => (
            <div key={index} className="event-card">
              <SkeletonComponent
                img={event.img}
                title={event.title}
                date={event.date}
                info={event.info}
                link={event.link}
              ></SkeletonComponent>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
