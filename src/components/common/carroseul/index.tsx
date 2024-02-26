// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";

interface CarrosseulProps {
  cardsImage: any[];
}

export const Carrosseul = ({ cardsImage }: CarrosseulProps) => {
    
  return (
    <div className="tablet:w-[500px] w-[300px] ">
      <Swiper
        spaceBetween={4}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={cardsImage.length > 2 ? (cardsImage.length / 2): 0}
       
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        speed={600}
        preventClicks={true}
        modules={[EffectCoverflow, Pagination]}
        pagination={true}
        
        className="w-[270px] tablet:w-full laptop:w-[80%] macair:w-full "
      >
    
          {cardsImage.map((card) => (
            <SwiperSlide className="swiper-slide">
              <Image src={card} alt="" className="swiper-slide-image" />
            </SwiperSlide>
          ))}
    
      </Swiper>
    </div>
  );
};
