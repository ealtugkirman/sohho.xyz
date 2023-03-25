// import React from "react";
// import Card from "../components/Card";
// import bir from "../assets/1.png";
// import iki from "../assets/2.png";
// import uc from "../assets/3.png";
// import dort from "../assets/4.png";
// import bes from "../assets/5.png";
// import alti from "../assets/6.png";
// import yedi from "../assets/7.png";
// import sekiz from "../assets/8.png";
// import Draggable from "react-draggable";

// function Hero() {
//   return (
//     <div className="grid grid-cols-4 gap-4 lg:px-16 bg-first">
//       <Draggable>
//         <div className="relative">
//           <Card title="naber" imageSrc={bir} />
//         </div>
//       </Draggable>
//           <Draggable>
              
//       <div className="relative">
//         <Card title="naber" imageSrc={iki} />
//       </div>
//           </Draggable>
//           <Draggable>
//       <div className="relative">
//         <Card title="naber" imageSrc={uc} />
//       </div>
//           </Draggable>
//           <Draggable>
//       <div className="relative">
//         <Card title="naber" imageSrc={dort} />
//       </div>
//           </Draggable>
//           <Draggable>
//       <div className="relative">
//         <Card title="naber" imageSrc={bes} />
//       </div>
//           </Draggable>
//           <Draggable>
//       <div className="relative">
//         <Card title="naber" imageSrc={alti} />
//       </div>
//           </Draggable>
//           <Draggable>
//       <div className="relative">
//         <Card title="naber" imageSrc={yedi} />
//       </div>
//           </Draggable>
//           <Draggable>
//       <div className="relative">
//         <Card title="naber" imageSrc={sekiz} />
//       </div>
//           </Draggable>
          
//     </div>
//   );
// }

// export default Hero;
import React, { useState } from "react";
import Card from "../components/Card";
import Draggable from "react-draggable";
import bir from "../assets/1.png";
import iki from "../assets/2.png";
import uc from "../assets/3.png";
import dort from "../assets/4.png";
import bes from "../assets/5.png";
import alti from "../assets/6.png";
import yedi from "../assets/7.png";
import sekiz from "../assets/8.png";

function Hero() {
  const [cards, setCards] = useState([
    { id: 1, title: "naber", imageSrc: bir, zIndex: 1 },
    { id: 2, title: "naber", imageSrc: iki, zIndex: 1 },
    { id: 3, title: "naber", imageSrc: uc, zIndex: 1 },
    { id: 4, title: "naber", imageSrc: dort, zIndex: 1 },
    { id: 5, title: "naber", imageSrc: bes, zIndex: 1 },
    { id: 6, title: "naber", imageSrc: alti, zIndex: 1 },
    { id: 7, title: "naber", imageSrc: yedi, zIndex: 1 },
    { id: 8, title: "naber", imageSrc: sekiz, zIndex: 1 },
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
    <div className="grid grid-cols-4  gap-4 lg:px-16 bg-first">
      {cards.map((card) => (
        <Draggable key={card.id}>
          <div
            className="relative hover:scale-150"
            style={{ zIndex: card.zIndex }}
            onClick={() => handleCardClick(card.id)}
          >
            <Card title={card.title} className="animate-spin hover:scale-150  delay-1000" imageSrc={card.imageSrc} />
          </div>
        </Draggable>
      ))}
    </div>
  );
}

export default Hero;
