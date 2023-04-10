import Card from "../components/Card";
import crowd from "../assets/crowd.jpg";
import Draggable from "react-draggable";
import Info from "./Info";

import sa from "../assets/AS.png";
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

function Banner() {

  return (
    <div className="bg-first" style={{ height: "900px" }}>
      <motion.div variants={fadeIn('', 0.1)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.1}} className="flex-row flex">
        <h1 className="text-second text-8xl font-soho">S</h1>
        <img className="animate-reverse-spin" src={sa} alt="hi" />
        <h1 className="text-second text-8xl font-soho">HH</h1>
        <img className="animate-spin" src={sa} alt="hi" />
      </motion.div>

     

      <motion.div variants={fadeIn('', 0.7)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.1}} className="bg-first">
        <Draggable>
          <div className="absolute top-2 w-2/6 right-16">
            <Card
              title="Good to see you"
              imageSrc={crowd}
              head="SOHO DURINGTHE NYFW SS18"
              desc="Get ready for an amazing DJ performance this Friday night at SOHO! We welcome anyone who wants to have a night filled with fun and dancing. You'll be able to listen to the most popular songs during the DJ set, dance with your friends, and have a great time. The event wontinue throughout the night."
              style={{ zIndex: 3 }}
            />
          </div>
        </Draggable>
        <Draggable>
          <div className="absolute top-16 w-2/6 right-8">
            <Card
              title="Good to see you"
              imageSrc={crowd}
              head="SOHO DURINGTHE NYFW SS18"
              desc="Join us at SOHO this Saturday nighdfsdfdsfwdt for an unforgettable DJ experience! We're bringing in one of the hottest DJs in the city to spin the latest tracks and keep you dancing all night long. Whether you're coming with a group of friends or flying solo, you're guaranteed to have a great time."
              style={{ zIndex: 2, marginTop: "-5rem" }}
            />
          </div>
        </Draggable>
        <Draggable>
          <div className="absolute top-24 w-2/6 right-32">
            {" "}
            <Card
              title="Good to see you"
              imageSrc={crowd}
              head="SOHO DURINGTHE NYFW SS18"
              desc="Join us at SOHO this Saturday night for an unforgettable DJ experience! We're bringing in one of the hottest DJs in the city to spin the latest tracks and keep you dancing all night long. Whether you're coming with a group of friends or flying solo, you're guaranteed to have a great time."
              style={{ zIndex: 4, marginTop: "-10rem" }}
            />
          </div>
        </Draggable>

        <Draggable>
          <div className="absolute top-12 w-2/6 right-24">
            {" "}
            <Card
              title="Good to see you"
              imageSrc={crowd}
              head="SOHO DURINGTHE NYFW SS18"
              desc="Join us at SOHO this Saturday night for an unforgettable DJ experience! We're bringing in one of the hottest DJs in the city to spin the latest tracks and keep you dancing all night long. Whether you're coming with a group of friends or flying solo, you're guaranteed to have a great time."
              style={{ zIndex: 1, marginTop: "-10rem" }}
            />
          </div>
        </Draggable>
      </motion.div>
        <motion.div variants={fadeIn('', 0.5)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.1}} className="right-8 top-5">
        <Info />
        </motion.div>
        {/* <h1 className="text-second mt-96 text-4xl font-soho">SOHO</h1> */}
    </div>
  );
}
export default Banner;

// import React from 'react';

// const Banner = () => {
//   return (
//      <div className="relative w-200 h-1000">
//       <div className="absolute w-60 h-32 bg-red-500 border-8 top-2 right-2"/>
//       <div className="absolute w-32 h-32 bg-blue-500 border-4 top-4 right-4 "/>
//       <div className="absolute w-64 h-64 bg-gray-100 border-4 top-8 right-10"/>
//     </div>
//   );
// };

// export default Banner;
