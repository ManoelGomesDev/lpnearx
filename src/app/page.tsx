import { ButtonCTA } from "@/components/common/buttonCTA";
import { Header } from "@/components/header";
import Image from "next/image";

export default function Home() {

  return (
    <div className="bg-gradient-to-tr from-bgDark to-bgLight ">
      <Header />
      <div className="flex justify-center h-screen items-center " id="section-video">
        <iframe
          id="panda-224758e4-4a95-4622-ab07-153ef8583e62"
          src="https://player-vz-350c0f87-16f.tv.pandavideo.com.br/embed/?v=224758e4-4a95-4622-ab07-153ef8583e62"
          style={{ border: "none" }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
          allowFullScreen={true}
          className="h-[140px] w-[280px] tablet:h-[360px] tablet:w-[720px] macair:w-[1240px] macair:h-[720px] desktop:h-[720px] desktop:w-[1440px] rounded-md "
          data-fetchpriority="high"
        ></iframe>
      </div>
      <div id="section-page" className="hidden">
        <div>
          <div className="bg-white flex flex-col items-center justify-center gap-4 py-10 ">
            <ButtonCTA />
            <h2 className="text-black font-bold">O único lugar capaz de levar a sua carreira para o próximo nível.</h2>
            <p className="text-black text-sm">A primeira escola do Brasil com um conteúdo prático e com foco na
formação dos profissionais mais bem pagos do mercado de tecnologia.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
