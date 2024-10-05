"use client";
import { useState } from "react";
import HeaderComponent from "@/components/HeaderComponent";
import SkeletonComponent from "@/components/SkeletonComponent";
import eventsData from "./events.json";
const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [eventList, setEventList] = useState(eventsData);

  const filteredEvents = eventList.filter(
    (event) =>
      (selectedTag === "all" || event.tag === selectedTag) &&
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <HeaderComponent/>
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
            className="p-3 border border-gray-300 rounded-lg bg-eestec text-white placeholder-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              className={`p-3 border rounded-lg bg-eestec text-white ${
                selectedTag === "all" ? "bg-red-700" : ""
              }`}
              onClick={() => setSelectedTag("all")}
            >
              All
            </button>
            <button
              className={`p-3 border rounded-lg bg-eestec text-white ${
                selectedTag === "local" ? "bg-red-700" : ""
              }`}
              onClick={() => setSelectedTag("local")}
            >
              Local
            </button>
            <button
              className={`p-3 border rounded-lg bg-eestec text-white ${
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
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
