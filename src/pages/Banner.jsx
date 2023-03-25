import { useState } from "react";
import Card from "../components/Card";
import crowd from "../assets/crowd.jpg";
import Draggable from "react-draggable";
import Info from "./Info";
import bir from "../assets/1.png";
import iki from "../assets/2.png";
import uc from "../assets/3.png";
import dort from "../assets/4.png";
import bes from "../assets/5.png";
import alti from "../assets/6.png";
import yedi from "../assets/7.png";
import sekiz from "../assets/8.png";
import sa from "../assets/AS.png";
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

function Banner() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "naber",
      imageSrc: bir,
      zIndex: 1,
      position: { x: 1100, y: 500 },
    },
    {
      id: 2,
      title: "naber",
      imageSrc: iki,
      zIndex: 1,
      position: { x: 1030, y: 550 },
    },
    {
      id: 3,
      title: "naber",
      imageSrc: uc,
      zIndex: 1,
      position: { x: 970, y: 450 },
    },
    {
      id: 4,
      title: "naber",
      imageSrc: dort,
      zIndex: 1,
      position: { x: 900, y: 500 },
    },
    {
      id: 5,
      title: "naber",
      imageSrc: bes,
      zIndex: 1,
      position: { x: 830, y: 470 },
    },
    {
      id: 6,
      title: "naber",
      imageSrc: alti,
      zIndex: 1,
      position: { x: 750, y: 540 },
    },
    {
      id: 7,
      title: "naber",
      imageSrc: yedi,
      zIndex: 1,
      position: { x: 700, y: 490 },
    },
    {
      id: 8,
      title: "naber",
      imageSrc: sekiz,
      zIndex: 1,
      position: { x: 650, y: 510 },
    },
  ]);

  const handleCardClick = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, zIndex: 2 };
      } else {
        return { ...card, zIndex: 1 };
      }
    });
    setCards(updatedCards);
  };

  return (
    <div className="bg-first" style={{ height: "900px" }}>
      <motion.div variants={fadeIn('', 0.1)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.1}} className="flex-row flex">
        <h1 className="text-second text-8xl font-soho">S</h1>
        <img className="animate-reverse-spin" src={sa} alt="hi" />
        <h1 className="text-second text-8xl font-soho">HH</h1>
        <img className="animate-spin" src={sa} alt="hi" />
      </motion.div>

      <motion.div variants={fadeIn('', 0.9)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.1}} className="grid grid-cols-4 gap-4 lg:px-16 bg-first">
        {cards.map((card) => (
          <Draggable key={card.id}>
            <div
              className="absolute w-2/12"
              style={{
                zIndex: card.zIndex,
                left: `${card.position.x}px`,
                top: `${card.position.y}px`,
              }}
              onClick={() => handleCardClick(card.id)}>
              <Card
                title={card.title}
                className="animate-spin delay-1000"
                imageSrc={card.imageSrc}
              />
            </div>
          </Draggable>
        ))}
      </motion.div>

      <motion.div variants={fadeIn('', 0.7)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.1}} className="bg-first">
        <Draggable>
          <div className="absolute top-2 w-2/6 right-16">
            <Card
              title="selamunaleykum"
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
              title="selamunaleykum"
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
              title="selamunaleykum"
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
              title="selamunaleykum"
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
