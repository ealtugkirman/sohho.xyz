import { useState } from "react";
import bir from "../assets/1.png";
import iki from "../assets/2.png";
import uc from "../assets/3.png";
import dort from "../assets/4.png";
import bes from "../assets/5.png";
import alti from "../assets/6.png";
import yedi from "../assets/7.png";
import sekiz from "../assets/8.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Draggable from "react-draggable";
import Card from "../components/Card";

function Events() {
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
  <motion.div
    variants={fadeIn("", 0.9)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.1 }}
    className="grid grid-cols-4 gap-4 lg:px-16 bg-first max-w-screen-xl">
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
</div>

  );
}

export default Events;
