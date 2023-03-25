import React from "react";

const Card = ({
  title,
  imageSrc,
  mahmut,
  ego,
  menu1,
  menu2,
  menu3,
  menu4,
  menu5,
  menu6,
  menu7,
  desc,
  head,
  zenon1,
  zenon2,
  zenon3,
}) => {
  return (
    <div className="bg-second border-4 m-4 lg:m-6 border-second flex flex-col">
      <div className="pb-1">
        <div className="font-soho bg-first text-lg text-second">{title}</div>

        <div className="font-soho bg-second text-lg text-first">{mahmut}</div>
        <div className="font-soho bg-first text-lg border-2 text-second">{zenon1}</div>
        <div className="font-soho bg-first text-lg border-2 text-second">{zenon2}</div>
        <div className="font-soho bg-first text-lg border-2 text-second">{zenon3}</div>
        <div className="font-soho   text-lg">{menu1}</div>
        <div className="font-soho  text-lg">{menu2}</div>
        <div className="font-soho  text-lg">{menu3}</div>
        <div className="font-soho  text-lg">{menu4}</div>
        <div className="font-soho  text-lg">{menu5}</div>
        <div className="font-soho  text-lg">{menu6}</div>
        <div className="font-soho  text-lg">{menu7}</div>
      </div>
      <div className="font-soho text-xs lg:text-lg">{head}</div>
      <div className="font-soho text-xxs">{desc}</div>

      <img src={imageSrc} alt={desc} className="w-full hover:scale-125" />
    </div>
  );
};

export default Card;

//  <div className="relative w-200 h-1000">
//       <div className="absolute w-60 h-32 bg-red-500 border-8 top-2 right-2"/>
//       <div className="absolute w-32 h-32 bg-blue-500 border-4 top-4 right-4 "/>
//       <div className="absolute w-64 h-64 bg-gray-100 border-4 top-8 right-10"/>
//     </div>
