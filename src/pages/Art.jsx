import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Card from "../components/Card";
import Draggable from "react-draggable";
import logo from "./../assets/cursor.png";
import logo2 from "./../assets/logo2.png";
import logo3 from "./../assets/logo3.png";
import logo4 from "./../assets/logo4.png";
import logo5 from "./../assets/logo5.png";

function Art() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "ART?!?",
      desc: "s",
      imageSrc: logo3,
      zIndex: 1,
      position: { x: 200, y: 540 },
    },
    {
      id: 2,
      title: "ART?!?",
      desc: "s",
      imageSrc: logo2,
      zIndex: 1,
      position: { x: 100, y: 500 },
    },
    {
      id: 3,
      title: "ART?!?",
      desc: "s",
      imageSrc: logo,
      zIndex: 1,
      position: { x: 50, y: 600 },
    },
    {
      id: 4,
      title: "ART?!?",
      desc: "s",
      imageSrc: logo4,
      zIndex: 1,
      position: { x: 150, y: 630 },
    },
    {
      id: 5,
      title: "ART?!?",
      desc: "s",
      imageSrc: logo5,
      zIndex: 1,
      position: { x: 250, y: 600 },
    },
     {
      id: 6,
      title: "ART?!?",
      desc: "s",
      imageSrc: logo3,
      zIndex: 1,
      position: { x: 1150, y: 540 },
    },
    {
      id: 7,
      title: "ART?!?",
      desc: "s",
      imageSrc: logo2,
      zIndex: 1,
      position: { x: 1100, y: 500 },
    },
    {
      id: 8,
      title: "ART?!?",
      desc: "s",
      imageSrc: logo,
      zIndex: 1,
      position: { x: 1050, y: 600 },
    },
    {
      id: 9,
      title: "ART?!?",
      desc: "s",
      imageSrc: logo4,
      zIndex: 1,
      position: { x: 1000, y: 630 },
    },
    {
      id: 10,
      title: "ART?!?",
      desc: "s",
      imageSrc: logo5,
      zIndex: 1,
      position: { x: 950, y: 600 },
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
    <div>
      <motion.div
        variants={fadeIn("", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-4 right-5 gap-4 lg:px-16 bg-first">
        {cards.map((card) => (
          <Draggable key={card.id}>
            <div
              className="absolute text-end w-2/12"
              style={{
                zIndex: card.zIndex,
                left: `${card.position.x}px`,
                top: `${card.position.y}px`,
              }}
              onClick={() => handleCardClick(card.id)}>
              <Card
                imageSrc={card.imageSrc}
                title={card.title}
                alt={card.desc}
              />
            </div>
          </Draggable>
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn("", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-4 left-5 gap-4 lg:px-16 bg-first">
        {cards.map((card) => (
          <Draggable key={card.id}>
            <div
              className="absolute text-end w-2/12"
              style={{
                zIndex: card.zIndex,
                left: `${card.position.x}px`,
                top: `${card.position.y}px`,
              }}
              onClick={() => handleCardClick(card.id)}>
              <Card
                imageSrc={card.imageSrc}
                title={card.title}
                alt={card.desc}
              />
            </div>
          </Draggable>
        ))}
      </motion.div>
    </div>
  );
}

export default Art;
