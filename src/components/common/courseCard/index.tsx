"use client";
import { Tag } from "../tag";
import carrseul from "../../../../public/assets/carroseul.png";
import Image from "next/image";
import check from "../../../../public/assets/check.png";
import { Carrosseul } from "../carroseul";

import dex from "../../../../public/assets/dex.png"
import card1 from "../../../../public/assets/cards/criacaodex.png"
import card2 from "../../../../public/assets/cards/desenvolvimentodrex.png"
import card3 from "../../../../public/assets/cards/desenvolvimentoweb3.png"
import card4 from "../../../../public/assets/cards/dominandoarbitrum.png"
import card5 from "../../../../public/assets/cards/empregabilidade.png"
import card6 from "../../../../public/assets/cards/hyperledge.png"
import card7 from "../../../../public/assets/cards/iabuble.png"
import card8 from "../../../../public/assets/cards/iaparaempreendedores.png"
import card9 from "../../../../public/assets/cards/introducaosmartcontracts.png"
import card10 from "../../../../public/assets/cards/python.png"
import card11 from "../../../../public/assets/cards/rust101.png"
import card12 from "../../../../public/assets/cards/rwa.png"
import card13 from "../../../../public/assets/cards/tokenizacaoimboliaria.png"
import card14 from "../../../../public/assets/cards/vunerabilidadesnartcontracts.png"

interface CourseCardProps {
nameTag: string;
  title: string;
  text1: string;
  text2: string;
  imgAvatar: any[];
  namesProf?: string[];
  penultimateNameProf?: string;
  lastNameProf?: string;
  onlyOneName?: boolean;
}

export const CourseCard = ({
nameTag,
  title,
  text1,
  text2,
  imgAvatar,
  namesProf,
  penultimateNameProf,
  lastNameProf,
  onlyOneName
}: CourseCardProps) => {


  const cardsImages = [card1,card2,card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14]

  return (
    <div className="bg-gradient-to-b from-bgCourseCardFrom to-bgCourseCardTo bg-opacity-10 w-[85%]  rounded-lg flex flex-col laptop:flex-row-reverse items-center justify-between px-4 py-8 laptop:py-12  gap-8 max-w-[1200px] shadow-lg shadow-purple-500 ">
      <div className="flex flex-col items-center laptop:items-start gap-4 laptop:gap-8 laptop:w-[50%] ">
        <Tag text={nameTag} />
        <h2 className="text-white font-bold text-xl">{title}</h2>
        <p className="text-text-netraul text-sm laptop:w-[70%]">{text1}</p>
        <p className="text-text-netraul text-sm laptop:w-[70%]">{text2}</p>
        <div className="flex flex-col gap-4  tablet:flex-row tablet:justify-between tablet:items-center ">
            <div className="flex flex-col items-center tablet:items-start w-full">
          <div className="flex">
            {imgAvatar.map((avatar) => (
              <Image src={avatar} alt="" />
            ))}
          </div>

          <div className="w-full text-center tablet:text-start">
            <span className="text-text-netraul text-[10px]">Por</span>
            <span className="text-white text-[10px]">
              {" "}
              {namesProf?.map((nameProf) => (
                <span>{nameProf},</span>
              ))}
            </span>
            <span className="text-white text-[10px]">
              {" "}
              {penultimateNameProf}
            </span>
            <span className="text-text-netraul text-[10px]" hidden={onlyOneName}> e</span>
            <span className="text-white text-[10px]"> {lastNameProf}</span>
          </div>
          </div>
          <div className="flex items-center justify-center w-full tablet:justify-end tablet:w-[80%] gap-2 ">
            <Image src={check} alt="" />
            <p className="text-sm text-text-netraul  tablet:w-[90px]">Certificado de conclusão</p>
          </div>
        </div>
      </div>
      <div className="opacity-100 w-[50%] flex justify-center items-center">
        <Carrosseul cardsImage={cardsImages} />
        {/* <Image src={carrseul} alt="" /> */}
      </div>
    </div>
  );
};
