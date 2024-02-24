'use client'
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

interface Props {
  title: string;
  text: string;
}

export const CardFAQ = ({ title, text }: Props) => {
  const [toogleCard, setToogleCard] = useState(true);

  const handleToogleCard = () => {
    setToogleCard(!toogleCard);
  };

  return (
    <div className="px-4 py-4 w-full bg-bgNetraul flex justify-between rounded-md">
      <div>
        <p className="text-white text-sm">{title}</p>
        <p className="text-text-netraul text-xs pt-2" hidden={toogleCard}>{text}</p>
      </div>
      <div>
        <button onClick={handleToogleCard} hidden={!toogleCard}>
          <FaChevronDown color="white"/>
        </button>
        <button onClick={handleToogleCard} hidden={toogleCard}>
          <FaChevronUp color="white" />
        </button>
      </div>
    </div>
  );
};


