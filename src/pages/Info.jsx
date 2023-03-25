import React, { useState } from "react";
import Card from "../components/Card";
import Draggable from "react-draggable";

function Info() {
  const [cards, setCards] = useState([
    {
      id: 1,
      mahmut: "CONTACT",
      zenon1: "INFO",
      zenon2: "RESERVATION",
      zenon3: "NABER",
      zIndex: 1,
      position: { x: 200, y: 140 },
      title: "",
    },
    {
      id: 2,
      title: "ADRESS",
      menu1: "394 W",
      menu2: "Broadway",
      menu3: "New York",
      menu4: "NY 10012",
      zIndex: 1,
      position: { x: 250, y: 220 },
      desc: "",
    },
    {
      id: 3,
      title: "HOURS",
      menu1: "MON  4PM-11PM",
      menu2: "TUE  2PM-11PM",
      menu3: "WED  2PM-11PM",
      menu4: "THU  4PM-11PM",
      menu5: "FRI  4PM-11PM",
      menu6: "SAT  4PM-11PM",
      menu7: "SUN  4PM-11PM",
      desc: "",
      zIndex: 1,
      position: { x: 100, y: 100 },
    },
    {
        id: 4,
        title: "SOCİAL",
        menu1: "FACEBOOK",
        menu2: "INSTAGRAM",
        menu3: "TWITTER",
      menu: "naber",
      zIndex: 1,
      position: { x: 150, y: 300 },
      desc: "",
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
    <div className="grid grid-cols-4 right-5 gap-4 lg:px-16 bg-first">
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
              head={card.head}
              mahmut={card.mahmut}
              title={card.title}
              menu1={card.menu1}
              menu2={card.menu2}
              menu3={card.menu3}
              menu4={card.menu4}
              menu5={card.menu5}
              menu6={card.menu6}
              menu7={card.menu7}
              zenon1={card.zenon1}
              zenon2={card.zenon2}
              zenon3={card.zenon2}
            />
          </div>
        </Draggable>
      ))}
    </div>
  );
}

export default Info;
