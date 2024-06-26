"use client";
import { ButtonCTA } from "@/components/common/buttonCTA";
import { ButtonCTATop } from "@/components/common/buttonCTATop";
import { CardSmall } from "@/components/common/cardSmall";
import { CourseCard } from "@/components/common/courseCard";
import { Tag } from "@/components/common/tag";
import { Header } from "@/components/header";
import Image from "next/image";

import { PiToggleRightFill } from "react-icons/pi";
import { MdOutlineToggleOff } from "react-icons/md";

import { CardMethodology } from "@/components/common/cardMethodology";
import { CardFAQ } from "@/components/common/cardFAQ";
import { FAQ } from "@/faq";
import { ButtonWhatsap } from "@/components/common/buttonWhatsapp";
import { Footer } from "@/components/footer";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Countdown from "@/components/counterDown";

export default function Home() {
  const [finish, setFinish] = useState(false);
  const faq = FAQ;

  const route = useRouter()

  const handleToPlans = () => {
    route.push('/#plan')
  }

  const listener = async (event: {
    origin: string;
    type: string;
    data: { video: string; message: string; currentTime: number };
  }) => {
    if (event.origin !== "https://player-vz-350c0f87-16f.tv.pandavideo.com.br")
      return;
    if (event.type != "message") return;

    if (
      event.data?.video !== "4466bf93-803d-4bcb-8656-285a811eb697" &&
      event.data?.video !== "9ea90f5c-f12b-4a91-a1f3-f615440229d9"
    ) {
      return;
    }
  
    if (finish) return;

    if (event.data?.message == "panda_ended") {
      console.log(`ended`);
      setFinish(true);
      setTimeout(() => {
        var element = document.getElementById("section-page");
        element?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      });
    }
  };

  const addListener = () => {
    if (typeof window !== "undefined") {
      window.addEventListener("message", listener, false);
    }
  };
  addListener();
  return (
    <div className="flex flex-col bg-gradient-to-tr from-bgDark to-bgLight min-w-[337px] ">
      <Header />
      <div
        className="flex justify-center items-start h-screen px-4 pb-10 "
        id="section-video"
      >
       
        <iframe
          id="panda-4466bf93-803d-4bcb-8656-285a811eb697"
          src="https://player-vz-350c0f87-16f.tv.pandavideo.com.br/embed/?v=4466bf93-803d-4bcb-8656-285a811eb697"
          style={{ border: "none" }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
          allowFullScreen={true}
        width="100%"
        height="100%"
         className="rounded-md laptop:max-w-[1080px] max-h-[720px] tablet:hidden "
          data-fetchpriority="high"
       
        ></iframe>



          <iframe
          id="panda-9ea90f5c-f12b-4a91-a1f3-f615440229d9"
          src="https://player-vz-350c0f87-16f.tv.pandavideo.com.br/embed/?v=9ea90f5c-f12b-4a91-a1f3-f615440229d9"
          style={{ border: "none" }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
          allowFullScreen={true}
          height="100%"
          width="100%"
          className=" rounded-md  laptop:max-w-[1080px] max-h-[720px] max-tablet:hidden "
          data-fetchpriority="high"
        ></iframe>  
      </div>
      {finish ? (
        <div>
          <div id="section-page" className="pt-12">
            <div>
              <div className="bg-white flex flex-col items-center justify-center gap-2 py-10 ">
                <ButtonCTATop btnName="QUERO ME INSCREVER" />
                <h2 className="text-black font-bold text-center w-[300px] text-lg tablet:text-xl tablet:w-[400px] laptop:text-2xl laptop:w-[450px] macair:text-3xl macair:w-[550px] desktop:text-4xl desktop:w-[600px] macair:mt-12 mt-8">
                  O único lugar capaz de levar a sua carreira para o próximo
                  nível.
                </h2>
                <p className="text-black text-xs text-center laptop:w-[480px] laptop:text-base macair:w-[550px] tablet:w-[350px] tablet:text-sm mobileL:w-[320px] w-[280px]">
                  A primeira escola do Brasil com um conteúdo prático e com foco
                  na formação dos profissionais mais bem pagos do mercado de
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
                  <ButtonCTA btnName="Quero me inscrever" />
                </div>
                <div className="flex flex-col items-center laptop:gap-14 gap-8">
                  <CourseCard
                    nameTag="Curso 1"
                    title="Tokenização"
                    text1="Descubra o poder da tokenização imobiliária e do desenvolvimento de ativos reais com nossos cursos pioneiros no Brasil."
                    text2="Aprenda a transformar propriedades em ativos digitais negociáveis e a criar ativos reais utilizando a tecnologia blockchain. Saia pronto para aplicar a tokenização em projetos reais, com habilidades que colocam você à frente."
                    imgAvatar={["reginaAvatar", "pedroAvatar"]}
                    penultimateNameProf="Regina Pedroso"
                    lastNameProf="Pedro Magalhões"
                    cards={["rwa", "tokenizacaoimboliaria"]}
                  />
                  <CourseCard
                    nameTag="Curso 2"
                    title="Smart Contracts"
                    text1="Imagine um mundo onde cada transação, cada acordo, é seguro, transparente e automatizado. Bem-vindo ao universo dos Smart Contracts. "
                    text2="Com os maiores nomes do mercado, você vai aprender na prática a criar contratos inteligentes que estão transformando o mundo dos negócios. Tá aí uma habilidade para um linkedin lotado de propostas."
                    imgAvatar={["lucasAvatar", "afonsoAvatar", "pedroAvatar"]}
                    namesProf={["Lucas Oliveira"]}
                    penultimateNameProf="Afonso Dalvi"
                    lastNameProf="Pedro Magalhões"
                    cards={[
                      "introducaosmartcontracts",
                      "vunerabilidadesnartcontracts",
                      "rust101",
                    ]}
                  />
                  <CourseCard
                    nameTag="Curso 3"
                    title="Apps Descentralizados (Dapps)"
                    text1="Imagine um mundo onde cada transação, cada acordo, é seguro, transparente e automatizado. Bem-vindo ao universo dos Smart Contracts.  "
                    text2="Com o especialista Afonso Dalvi, você vai aprender na prática com Solidity a criar contratos inteligentes que estão transformando o mundo dos negócios. Tá aí uma habilidade para um linkedin lotado de propostas."
                    imgAvatar={["pedroAvatar", "caioAvatar"]}
                    penultimateNameProf="Pedro Magalhões"
                    lastNameProf="Caio Mattos"
                    cards={[
                      "criacaodex",
                      "dominandoarbitrum",
                      "desenvolvimentoweb3",
                    ]}
                  />
                  <CourseCard
                    nameTag="Curso 4"
                    title="DREX (Real digital do Brasil)"
                    text1="A tecnologia que está redefinindo o dinheiro digital no Brasil. Este curso não é apenas uma oportunidade de aprendizado; é um investimento em sua carreira em uma economia que está prestes a explodir. "
                    text2="Domine as técnicas e ferramentas que definem a tecnologia DREX, desde a teoria por trás da moeda digital até sua aplicação prática."
                    imgAvatar={["lucasAvatar", "pedroAvatar"]}
                    penultimateNameProf="Lucas Oliveira"
                    lastNameProf="Pedro Magalhões"
                    cards={["desenvolvimentodrex", "hyperledge"]}
                  />
                </div>
              </div>
            </div>
            <div id="section-ia" className="flex flex-col items-center">
              <div className="flex flex-col py-10 gap-8 laptop:gap-12 items-center">
                <Tag text="Trilha 2" />
                <div className="flex flex-col items-center gap-8">
                  <h2 className="text-white font-bold text-3xl laptop:text-4xl macair:text-5xl">
                    Inteligência Artificial
                  </h2>
                  <p className="text-text-netraul text-center w-[300px]">
                    Domine a Inteligência Artificial e monetize seu conhecimento
                    na era digital.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-8 laptop:flex-row">
                  <CardSmall
                    font="fonte: glassdoor.com"
                    info="R$10.744/mês"
                    title="MÉDIA SALARIAL BRASIL"
                  />
                  <CardSmall
                    font="fonte: web3career.com"
                    info="R$46.600/mês"
                    title="MÉDIA SALARIAL EXTERIOR"
                  />
                  <ButtonCTA btnName="Quero me inscrever" />
                </div>
                <div className="flex flex-col items-center  laptop:gap-14 gap-8">
                  <CourseCard
                    nameTag="Curso 1"
                    title="Aplicativos em IA"
                    text1="Neste curso, você irá aprender a construir um aplicativo inovador que simplifica e transforma a interação com documentos."
                    text2="O melhor de tudo? Você fará isso usando soluções no-code, uma abordagem que elimina as barreiras técnicas, permitindo que qualquer pessoa, independentemente de sua experiência em programação."
                    imgAvatar={["vitorAvatar"]}
                    penultimateNameProf="Vitor Romão"
                    onlyOneName
                    cards={["iabuble"]}
                  />
                  <CourseCard
                    nameTag="Curso 2"
                    title="IA para empreendedores"
                    text1="Seja pioneiro na integração da IA no coração do seu negócio. Aprenda como a Inteligência Artificial pode ser o diferencial competitivo que todo empreendedor busca. "
                    text2="Aprimore suas operações, inove em seus produtos e acelere o crescimento com as soluções que a IA proporciona."
                    imgAvatar={["alexandreAvatar"]}
                    penultimateNameProf="Alexandre Messina"
                    onlyOneName
                    cards={["iaparaempreendedores"]}
                  />
                  <CourseCard
                    nameTag="Curso 3"
                    title="Programação em Python"
                    text1="Este curso é uma jornada prática para iniciantes e entusiastas, proporcionando uma introdução sólida à programação em Python. "
                    text2="Desde os fundamentos até conceitos mais avançados, os participantes irão explorar tópicos fundamentais para quem deseja desenvolver projetos em Python e trabalhar posteriormente com Inteligência Artificial (IA)"
                    imgAvatar={["lucasAvatar"]}
                    penultimateNameProf="Lucas Oliveira"
                    onlyOneName
                    cards={["python"]}
                  />
                </div>
              </div>
            </div>
            <div
              id="methods"
              className="bg-black flex flex-col items-center  py-16 laptop:py-24"
            >
              <h3 className="text-white text-xl font-bold text-center px-8 mb-8 laptop:mb-20 laptop:text-3xl laptop:w-[500px] ">
                Tudo isso ao seu alcance por menos de R$5,30/dia.
              </h3>

              <div className="grid grid-col-1 tablet:grid-cols-2 gap-4 laptop:gap-24 macair:gap-52 ">
                <CardMethodology
                  icon={"mentoria"}
                  text="Mentorias ao vivo quinzenais com tira dúvidas, temas atuais e relevantes."
                  title="Mentorias ao vivo"
                />
                <CardMethodology
                  icon={"cursos"}
                  text="17 cursos exclusivos com os melhores professores e totalmente inéditos no Brasil."
                  title="Cursos exclusivos"
                />
                <CardMethodology
                  icon={"suporte"}
                  text="Aulas em alta qualidade visual, resumos, exercícios, materiais de apoio e transcrições."
                  title="Apoio e Suporte"
                />
                <CardMethodology
                  icon={"comunidade"}
                  text="Faça networking, troque experiências e crie conexões valiosas."
                  title="Comunidade"
                />
                <CardMethodology
                  icon={"metodologia"}
                  text="Metodologia prática para aprender com desafios e projetos reais."
                  title="Metodologia Hands-on"
                />
                <CardMethodology
                  icon={"mercadoTrabalho"}
                  text="Você em contato direto com as maiores e melhores empresas do mercado."
                  title="Mercado de Trabalho"
                />
              </div>
            </div>
            <div className="flex flex-col items-center bg-white">
              <button
                onClick={handleToPlans}
                className="flex justify-center items-center w-[280px] laptop:w-[403px] h-[55px] laptop:h-[92px] bg-primary-default hover:bg-primary-hover font-bold text-white laptop:text-xl text-sm rounded-md -mt-[32px] laptop:-mt-[52px]"
              >
                QUERO ME INSCREVER
              </button>
            </div>
            <div className="bg-white flex flex-col items-center py-14 gap-10 ">
              <h2 className="font-bold text-center  w-[280px] laptop:w-[450px] laptop:text-3xl text-2xl ">
                Comprometimento Absoluto com seu Sucesso Profissional
              </h2>
              <div className="flex flex-col laptop:flex-row items-center gap-8 macair:w-[1110px] laptop:px-8">
                <div className="flex justify-center items-center w-[300px] h-[400px]  laptop:w-full">
                  <Image
                    src="https://nearxschool.s3.us-east-2.amazonaws.com/lp/selo.png"
                    alt=""
                    width={300}
                    height={400}
                  />
                </div>
                <div className="flex flex-col gap-8 w-[280px] tablet:w-[680px] laptop:w-full ">
                  <p className="text-justify font-bold">
                    Entendemos que sua confiança em nós exige mais do que
                    palavras - exige uma promessa inabalável.
                  </p>
                  <p className="text-justify">
                    Estamos 100% comprometidos com seu resultado e esperamos o
                    mesmo de você. Se você assistir todas as aulas e mentorias,
                    participar de todos exercícios - e se, mesmo assim, ao final
                    de um ano, sentir que não alcançou os resultados prometidos,
                    <strong>
                      {" "}
                      nós honraremos nosso compromisso com a mais completa
                      garantia do mercado e devolvemos 100% do seu dinheiro.
                    </strong>
                  </p>
                  <p className="text-justify">
                    Por que oferecemos isso? Porque cada elemento do nosso
                    programa foi meticulosamente desenhado para colocá-lo na
                    fronteira do conhecimento em blockchain, Web3 e tecnologias
                    emergentes. Nossa confiança é total - na qualidade do nosso
                    programa, na expertise dos nossos mentores e, o mais
                    importante, em você.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-black flex flex-col items-center py-8 gap-8 laptop:gap-14">
              <h3 className="text-white text-2xl px-6 text-center laptop:text-3xl font-bold">
                Parceiros comerciais, Stacks e Redes
              </h3>
              <p className="text-text-netraul text-justify px-8 laptop:w-[700px] laptop:text-center laptop:text-xl">
                Conheça as principais empresas que confiam em nossa plataforma e
                as principais redes e stacks que usamos.
              </p>
              <div className="flex flex-col gap-6 macair:flex macair:flex-row tablet:grid tablet:grid-cols-4 px-4 laptop:gap-8  ">
                <Image
                  src="https://nearxschool.s3.us-east-2.amazonaws.com/lp/openai.png"
                  alt=""
                  width={105}
                  height={28}
                />
                <Image
                  src="https://nearxschool.s3.us-east-2.amazonaws.com/lp/ethereum.png"
                  alt=""
                  width={105}
                  height={28}
                />
                <Image
                  src="https://nearxschool.s3.us-east-2.amazonaws.com/lp/polygon.png"
                  alt=""
                  width={105}
                  height={28}
                />
                <Image
                  src="https://nearxschool.s3.us-east-2.amazonaws.com/lp/optism.png"
                  alt=""
                  width={105}
                  height={28}
                />
                <Image
                  src="https://nearxschool.s3.us-east-2.amazonaws.com/lp/binance.png"
                  alt=""
                  width={105}
                  height={28}
                />
                <Image
                  src="https://nearxschool.s3.us-east-2.amazonaws.com/lp/inovabra.png"
                  alt=""
                  width={105}
                  height={28}
                />
                <Image
                  src="https://nearxschool.s3.us-east-2.amazonaws.com/lp/solana.png"
                  alt=""
                  width={105}
                  height={28}
                />
                <Image
                  src="https://nearxschool.s3.us-east-2.amazonaws.com/lp/icp.png"
                  alt=""
                  width={105}
                  height={28}
                />
              </div>
            </div>
            <div className="py-14 flex flex-col gap-8" id="plan">
              <h3 className="text-white text-2xl text-center laptop:text-4xl font-bold">
                Opções de assinaturas
              </h3>
              <div className="flex flex-col gap-8 items-center laptop:flex-row laptop:justify-center">
              
                <div className=" bg-gradient-to-b from-bgCourseCardFrom to-bgCourseCardTo bg-opacity-10 min-w-[280px]  mx-8 rounded-lg flex flex-col  items-center   gap-8 shadow-lg shadow-purple-500 tablet:min-w-[458px] max-w-[458px] h-[800px]">
            
                  <div className="bg-red-600 h-10 rounded-t-md w-full  flex justify-center items-center">
                    <span className="text-white font-bold">Plano com IA</span>
                  </div>
                  {/* <Countdown  /> */}
                  <div className="flex flex-col items-center justify-between h-full pb-8">
               
                    <div className="flex flex-col items-center">
                      <h4 className="text-white font-bold text-xl laptop:text-3xl">
                        Fênix
                      </h4>
                      <p className="text-text-netraul">Acesso anual à:</p>
                    </div>
                    <div className="flex flex-col gap-4 h-[300px]">
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">
                          Cursos e certificações
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">Mentorias quinzenais</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">
                          Atualizações e melhorias
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">Comunidade</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">Suporte</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">
                          Call de consultoria (60min)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">
                          Fênix (IA proprietária)
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center h-[150px]">
                      <p className="text-text-netraul text-sm line-through">
                        De: R$ 7.320,99
                      </p>
                      <small className="text-white text-xs">Por:</small>
                      <div className="flex flex-col items-center text-white gap-1">
                        <p className="font-bold text-4xl laptop:text-5xl">
                          R$ 259,99
                        </p>
                        <small className="text-text-netraul">
                          mensais no plano anual
                        </small>
                      </div>
                    </div>
                    <div>
                      <button>
                      <a
                        href="https://payment.nearx.com.br/checkout?planId=7"
                        className="text-white font-bold bg-primary-default hover:bg-primary-hover rounded-md px-6 py-3 laptop:px-10 laptop:py-4"
                      >
                        Assinar agora
                      </a>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" bg-gradient-to-b from-bgCourseCardFrom to-bgCourseCardTo bg-opacity-10  mx-8 min-w-[280px] rounded-lg flex flex-col  items-center   gap-8 shadow-lg shadow-purple-500 tablet:min-w-[458px] max-w-[458px] h-[800px]">
                  <div className="bg-primary-default h-10 rounded-t-lg w-full flex justify-center items-center">
                    <span className="text-white font-bold">
                      Plano mais popular
                    </span>
                  </div>
                {/* <div className="h-[30px]"></div> */}

                  <div className="flex flex-col items-center pb-8 justify-between h-full">
                    <div className="flex flex-col  items-center ">
                      <h4 className="text-white font-bold text-xl laptop:text-3xl">
                        Premium
                      </h4>
                      <p className="text-text-netraul">Acesso anual à:</p>
                    </div>
                    <div className="flex flex-col justify-center gap-4 h-[300px]">
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">
                          Cursos e certificações
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">Mentorias quinzenais</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">
                          Atualizações e melhorias
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">Comunidade</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PiToggleRightFill color="#7331fe" size={30} />
                        <span className="text-white">Suporte</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdOutlineToggleOff color="#7331fe" size={30} />
                        <span className="text-white line-through">
                          Call de consultoria (60min)
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center h-[100px]">
                      <p className="text-text-netraul text-sm line-through">
                        De: R$ 3.865,99
                      </p>
                      <small className="text-white text-xs">Por:</small>
                      <div className="flex flex-col items-center text-white gap-1">
                        <p className="font-bold text-4xl laptop:text-5xl">
                          R$ 159,99
                        </p>
                        <small className="text-text-netraul">
                          mensais no plano anual
                        </small>
                      </div>
                 
                    </div>
                    <div>
                      <button>
                      <a
                        href="https://payment.nearx.com.br/checkout?planId=8"
                        className="text-white font-bold bg-primary-default hover:bg-primary-hover rounded-md px-6 py-3 laptop:px-10 laptop:py-4"
                      >
                        Assinar agora
                      </a>
                      </button>
                    </div>
              
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center py-14 gap-12" id="faq">
              <h3 className="text-white text-2xl laptop:text-6xl font-bold">
                FAQ
              </h3>
              <div className="flex flex-col  w-full gap-4 max-w-[1110px] px-10">
                {faq.map(({ id, question, answer }) => (
                  <CardFAQ key={id} title={question} text={answer} />
                ))}
              </div>
            </div>
            <div className="py-10 flex flex-col items-center gap-8 px-8">
              <p className="text-text-netraul text-xl">Ficou alguma dúvida?</p>
              <ButtonWhatsap />
            </div>
          </div>

          <div className="py-10">
            <Footer />
          </div>
          <div className="flex flex-col items-center w-full ">
            <p className="text-text-netraul border-t-[0.03rem] border-gray-600 w-[90%] text-xs text-center py-4">
              NearX 2023 © Todos os direitos reservados
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
