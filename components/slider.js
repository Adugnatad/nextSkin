import React from "react";
import { EffectFade } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import PageHero from "../src/components/pageHero";

const Slider = ({ main }) => {
  const backgrounds = {
    Product: "/assets/productsHero.svg",
    Homepage: "/assets/homepageHeroSvg.svg",
    Treatement: "/assets/treatementsHeroSvg.svg",
    Contact: "/assets/contactHero.svg",
  };

  return (
    <>
      <Swiper
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"fade"}
        modules={[EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PageHero
            background={backgrounds[main]}
            mobileBackground="/assets/mobileBackgroundSvg.svg"
          ></PageHero>
        </SwiperSlide>
        <SwiperSlide>
          <PageHero
            background="/assets/treatementsHeroSvg.svg"
            mobileBackground="/assets/mobileBackgroundSvg.svg"
          ></PageHero>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
