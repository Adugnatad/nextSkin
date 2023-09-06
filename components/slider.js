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
  const Slide1 = () => {
    return (
      <div className="self-center md:self-start md:ml-[70px]">
        <div className="self-center text-center md:text-start md:self-start  md:pl-[20px] mt-3 md:mt-4 w-full">
          <span className="text-white text-[60px] tb:text-[75px] font-bold leading-none">
            ALL YOU NEED <br />
            TO BE EPIC
          </span>
          <p className="md:max-w-[550px] text-[17px] md:text-[20px] text-white mt-10 px-4 md:px-[0px] md:mt-5">
            If your skin has started to show wear and tear from sun, aging, acne
            or other skin conditions there is much that can be done.
          </p>
        </div>
      </div>
    );
  };

  const Slide2 = () => {
    return (
      <div className="self-center md:self-start md:ml-[70px]">
        <div className="self-center text-center md:text-start md:self-start  md:pl-[20px] mt-3 md:mt-4 w-full">
          <span className="text-white text-[60px] tb:text-[75px] font-bold leading-none">
            PERFECTION <br />
            TO BE EPIC
          </span>
          <p className="md:max-w-[550px] text-[17px] md:text-[20px] text-white mt-10 px-3 md:px-[0px] md:mt-5">
            If your skin has started to show wear and tear from sun, aging, acne
            or other skin conditions there is much that can be done.
          </p>
        </div>
      </div>
    );
  };
  const Slide3 = () => {
    return (
      <div className="self-center md:self-start md:ml-[70px]">
        <div className="self-center text-center md:text-start md:self-start  md:pl-[20px] mt-3 md:mt-4 w-full">
          <span className="text-white text-[60px] tb:text-[75px] font-bold leading-none">
            AMAZEMENT <br />
            TO BE EPIC
          </span>
          <p className="md:max-w-[550px] text-[17px] md:text-[20px] text-white mt-10 px-3 md:px-[0px] md:mt-5">
            If your skin has started to show wear and tear from sun, aging, acne
            or other skin conditions there is much that can be done.
          </p>
        </div>
      </div>
    );
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
          >
            <Slide1 />
          </PageHero>
        </SwiperSlide>
        <SwiperSlide>
          <PageHero
            background="/assets/homepageHeroSvg.svg"
            mobileBackground="/assets/mobileBackgroundSvg.svg"
          >
            <Slide2 />
          </PageHero>
        </SwiperSlide>
        <SwiperSlide>
          <PageHero
            background="/assets/homepageHeroSvg.svg"
            mobileBackground="/assets/mobileBackgroundSvg.svg"
          >
            <Slide3 />
          </PageHero>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
