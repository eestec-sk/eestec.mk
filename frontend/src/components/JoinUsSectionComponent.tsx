"use client"

import Image from "next/image";
import JoinUsComponent from "./JoinUsComponent";

import Img from '../images/logos_icons/events.svg'
import Img2 from '../images/logos_icons/meeting people.svg'
import Img3 from '../images/logos_icons/development.svg'

const JoinUsSectionComponent = () => {
    return(
        <div className="m-2 grid">
            <div><h3 className="text-3xl text-black font-bold">Why Should you Join us?</h3></div>
            <div className="justify-self-start">
              <JoinUsComponent img={Img} heading={"International and local events"} text={"Be part of the organizing committee or simply attend an international workshop, exchange or motivational weekend. You will certainly not regret it!"}></JoinUsComponent>
            </div>
            <div className="justify-self-center">
                <JoinUsComponent img={Img2} heading={"Meeting new people"} text={"You will have the chance to meet new people from all over Europe and explore their culture, tradition and cuisine."}></JoinUsComponent>
            </div>
            <div className="justify-self-end">
               <JoinUsComponent img={Img3} heading={"Personal development"} text={"Improve your skills and qualities through training and set life goals that will improve your employment prospects."}></JoinUsComponent>
            </div>
        </div>
    );
}
export default JoinUsSectionComponent;