import { ButtonCTA } from "@/components/common/buttonCTA";
import { ButtonCTATop } from "@/components/common/buttonCTATop";
import { CardSmall } from "@/components/common/cardSmall";
import { CourseCard } from "@/components/common/courseCard";
import { Tag } from "@/components/common/tag";
import { Header } from "@/components/header";
import Image from "next/image";

import reginaAvatar from "../../public/assets/reginaAvatar.png";
import pedroAvatar from "../../public/assets/pedroAvatar.png";
import lucasAvatar from "../../public/assets/lucasAvatar.png";
import afonsoAvatar from "../../public/assets/afonsoAvatar.png";
import alexandreAvatar from "../../public/assets/alexandreAvatar.png";
import caioAvatar from "../../public/assets/caioAvatar.png";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-bgDark to-bgLight ">
      <Header />
      <div
        className="flex justify-center items-center h-screen -mt-[100px] "
        id="section-video"
      >
        <iframe
          id="panda-224758e4-4a95-4622-ab07-153ef8583e62"
          src="https://player-vz-350c0f87-16f.tv.pandavideo.com.br/embed/?v=224758e4-4a95-4622-ab07-153ef8583e62"
          style={{ border: "none" }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
          allowFullScreen={true}
          className="h-[auto] w-[auto] tablet:h-[360px] tablet:w-[720px] macair:w-[1240px] macair:h-[720px] desktop:h-[720px] desktop:w-[1440px] rounded-md "
          data-fetchpriority="high"
        ></iframe>
      </div>
      <div id="section-page" className="">
        <div>
          <div className="bg-white flex flex-col items-center justify-center gap-8 py-10 ">
            <ButtonCTATop btnName="QUERO ME INSCREVER" />
            <h2 className="text-black font-bold text-center w-[300px] text-base tablet:text-xl tablet:w-[400px] laptop:text-2xl laptop:w-[450px] macair:text-3xl macair:w-[550px] desktop:text-4xl desktop:w-[600px] macair:mt-12 mt-8">
              O único lugar capaz de levar a sua carreira para o próximo nível.
            </h2>
            <p className="text-black text-xs text-center laptop:w-[480px] laptop:text-base macair:w-[550px] tablet:w-[350px] tablet:text-sm mobileL:w-[320px] w-[280px]">
              A primeira escola do Brasil com um conteúdo prático e com foco na
              formação dos profissionais mais bem pagos do mercado de
              tecnologia.
            </p>
          </div>
        </div>
        <div id="section-blockchain" className="flex flex-col items-center">
          <div className="flex flex-col py-10 gap-8 laptop:gap-12 items-center">
            <Tag text="Trilha 1" />
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-white font-bold text-3xl laptop:text-4xl macair:text-5xl">
                Blockchain
              </h2>
              <p className="text-text-netraul text-center w-[300px]">
                Comece do zero e alcance as maiores remunerações do mercado!
              </p>
            </div>
            <div className="flex flex-col items-center gap-8 laptop:flex-row">
              <CardSmall
                font="fonte: glassdoor.com"
                info="R$20.640/mês"
                title="MÉDIA SALARIAL BRASIL"
              />
              <CardSmall
                font="fonte: web3career.com"
                info="R$62.500/mês"
                title="MÉDIA SALARIAL EXTERIOR"
              />
              <ButtonCTA btnName="Assinar agora" />
            </div>
            <div className="flex flex-col laptop:gap-14 gap-8">
              <CourseCard
                nameTag="Curso 1"
                title="Tokenização"
                text1="Descubra o poder da tokenização imobiliária e do desenvolvimento de ativos reais com nossos cursos pioneiros no Brasil."
                text2="Aprenda a transformar propriedades em ativos digitais negociáveis e a criar ativos reais utilizando a tecnologia blockchain. Saia pronto para aplicar a tokenização em projetos reais, com habilidades que colocam você à frente."
                imgAvatar={[reginaAvatar, pedroAvatar]}
                penultimateNameProf="Regina Pedroso"
                lastNameProf="Pedro Magalhões"
              />
              <CourseCard
                nameTag="Curso 2"
                title="Smart Contracts"
                text1="Imagine um mundo onde cada transação, cada acordo, é seguro, transparente e automatizado. Bem-vindo ao universo dos Smart Contracts. "
                text2="Com os maiores nomes do mercado, você vai aprender na prática a criar contratos inteligentes que estão transformando o mundo dos negócios. Tá aí uma habilidade para um linkedin lotado de propostas."
                imgAvatar={[lucasAvatar, afonsoAvatar, pedroAvatar]}
                namesProf={["Lucas Oliveira"]}
                penultimateNameProf="Afonso Dalvi"
                lastNameProf="Pedro Magalhões"
              />
              <CourseCard
                nameTag="Curso 3"
                title="Apps Descentralizados (Dapps)"
                text1="Imagine um mundo onde cada transação, cada acordo, é seguro, transparente e automatizado. Bem-vindo ao universo dos Smart Contracts.  "
                text2="Com o especialista Afonso Dalvi, você vai aprender na prática com Solidity a criar contratos inteligentes que estão transformando o mundo dos negócios. Tá aí uma habilidade para um linkedin lotado de propostas."
                imgAvatar={[pedroAvatar, caioAvatar]}
                penultimateNameProf="Pedro Magalhões"
                lastNameProf="Caio Mattos"
              />
              <CourseCard
                nameTag="Curso 4"
                title="DREX (Real digital do Brasil)"
                text1="A tecnologia que está redefinindo o dinheiro digital no Brasil. Este curso não é apenas uma oportunidade de aprendizado; é um investimento em sua carreira em uma economia que está prestes a explodir. "
                text2="Domine as técnicas e ferramentas que definem a tecnologia DREX, desde a teoria por trás da moeda digital até sua aplicação prática."
                imgAvatar={[lucasAvatar, pedroAvatar]}
                penultimateNameProf="Lucas Oliveira"
                lastNameProf="Pedro Magalhões"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
