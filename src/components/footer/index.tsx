'use client'
import Image from "next/image";
import imgLogo from '../../../public/assets/logoImg.png'

import { LiaYoutube } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { RiDiscordLine, RiTwitterXLine } from "react-icons/ri";
import { LiaWhatsapp } from "react-icons/lia";
import Link from "next/link";

export const Footer = function () {

    const handleWhatsappClick = () => {
        const phoneNumber = '+5521965478031';
        const message = 'Olá, quero saber mais sobre a plataforma!'; // Substitua pelo número de telefone desejado
    
        // Abre o link do WhatsApp no navegador
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
      };

    return (
        <div className="flex flex-col items-center w-full   ">
            <div className="flex flex-col items-center gap-8 laptop:flex-row tablet:justify-between tablet:my-4  max-w-[1110px] w-full ">

            
            <div className="tablet:flex tablet:flex-col tablet:items-center">
            <div className="w-[18.75rem]">
                <Image src={imgLogo} alt=""  />
            </div>
            <div className="flex flex-row gap-10 justify-center">
                <a href="https://www.youtube.com/@Nearxschool" target="_blank"><LiaYoutube color="white" size={24} /></a>
            <a href="https://www.instagram.com/nearxschool?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"> <LiaInstagram color="white" size={24} /></a>
           <a href="https://twitter.com/nearxschool" target="_blank"><RiTwitterXLine color="white" size={24} /></a>
           <a href="https://discord.gg/nearx" target="_blank"><RiDiscordLine color="white" size={24} /></a>
            <button onClick={handleWhatsappClick}><LiaWhatsapp color="white" size={24} /></button>
            
            </div>

            </div>
 

            <div className="flex   gap-8 py-10 tablet:py-0 ">
            <div className="flex flex-col items-start gap-4">
                <p className="text-sm text-white">NOSSAS TRILHAS</p>
                <p className="text-text-netraul text-sm"><a href="/#section-blockchain">Blockchain</a></p>
                <p className="text-text-netraul text-sm"><a href="/#section-ia">Inteligência Artificial</a></p>
                {/* <p className="text-text-netraul text-sm"><a href="/plan#ia">Web3</a></p>
                <p className="text-text-netraul text-sm"><a href="/plan#ia">Desenvolvimento 3D e Games</a></p> */}
            </div>
            <div className="flex flex-col items-start gap-4">
                <p className="text-sm text-white">SOBRE A NEARX</p>
               
                {/* <p className="text-text-gray">Blog</p> */}
                <p className="text-text-netraul text-sm"><a href="https://nearx.com.br/about" target="_blank">Quem somos</a></p>
               <Link href="/#faq"> <p className="text-text-netraul text-sm">FAQ</p></Link>
               
            </div>
            </div>
            </div>
         
        </div>
    )
}
