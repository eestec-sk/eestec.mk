"use client"

import Image from "next/image";
import JoinUsComponent from "./JoinUsComponent";

const JoinUsSectionComponent = () => {
    return(
        <div className="m-2 grid">
            <div className="justify-self-start">
              <JoinUsComponent img={""} heading={"International and local events"} text={"Be part of the organizing committee or simply attend an international workshop, exchange or motivational weekend. You will certainly not regret it!"}></JoinUsComponent>
            </div>
            <div className="justify-self-center">
                <JoinUsComponent img={""} heading={"Meeting new people"} text={"You will have the chance to meet new people from all over Europe and explore their culture, tradition and cuisine."}></JoinUsComponent>
            </div>
            <div className="justify-self-end">
               <JoinUsComponent img={""} heading={"Personal development"} text={"Improve your skills and qualities through training and set life goals that will improve your employment prospects."}></JoinUsComponent>
            </div>
        </div>
    );
}
export default JoinUsSectionComponent;