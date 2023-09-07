import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper";
import { useSwiper } from "swiper/react";
import PageHero from "../src/components/pageHero";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "../components/slider";

const Treatments = () => {
  return (
    <>
      <Slider main={"Treatement"} />
      <div className="flex flex-col items-center md:mt-[20px] w-full">
        <div className="countryBack1 p-4 w-[90%] text-center">
          <span className="uppercase text-[#796AB8] font-semibold">
            london, united kingdom
          </span>
        </div>
        <div className="flex flex-col items-center my-5">
          <span className="text-[36px] font-bold mb-2">TREATMENTS</span>
          <img src="/assets/colorfulBorder.svg" />
        </div>
        <p className="text-center w-[85%]">
          Treatments are only performed by our own fully qualified nurses.
          Treatments can be given at the end of the initial consultation if
          agreed by the client. The home consultations is £150, and at the
          clinic is £49, but you can redeem it against any treatment purchase
          higher then 249£. The payment for any home treatment it’s requested
          upfront and it’s non-renfundable, unless we fail to deliver the
          consulation in the specific day.
        </p>
        <p className="my-5">
          Any purchase of treatments above 249£ comes with free consultation.
        </p>
        <div className="flex flex-row overflow-x-auto scrolling-touch tb:scrollbar-hide md:scrollbar-show px-3 w-full tb:w-fit tb:grid tb:grid-cols-3">
          <div className="flex flex-row items-center mr-[25px]">
            <div className="flex flex-col items-start  md:w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C] mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/lipFiller.svg" className="mb-3" />
              <span className="text-[20px] font-bold">LIP FILLER</span>
              <span className="text-[#C6C6C6] text-[14px]">
                SPF50+ PA++++-P
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">$1,799.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  $1,149.99
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center mr-[25px]">
            <div className="flex flex-col items-start md:w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/lipFiller.svg" className="mb-3" />
              <span className="text-[20px] font-bold">LIP FILLER</span>
              <span className="text-[#C6C6C6] text-[14px]">
                SPF50+ PA++++-P
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">$1,799.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  $1,149.99
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center md:pr-4 pr-1">
            <div className="flex flex-col items-start md:w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/lipFiller.svg" className="mb-3" />
              <span className="text-[20px] font-bold">LIP FILLER</span>
              <span className="text-[#C6C6C6] text-[14px]">
                SPF50+ PA++++-P
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">$1,799.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  $1,149.99
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center md:pr-4 pr-1">
            <div className="flex flex-col items-start md:w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/needles.svg" className="mb-3" />
              <span className="text-[20px] font-bold">ARMPIT FILLER</span>
              <span className="text-[#C6C6C6] text-[14px]">
                SPF50+ PA++++-P
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">$1,799.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  $1,149.99
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[20px] w-full">
        <div className="countryBack2 p-4 w-[90%] text-center">
          <span className="uppercase text-[#DA4B4B] font-semibold">
            london, united kingdom
          </span>
        </div>
        <div className="flex flex-col items-center my-5">
          <span className="text-[36px] font-bold mb-2">TREATMENTS</span>
          <img src="/assets/colorfulBorder.svg" />
        </div>
        <p className="text-center w-[85%]">
          Treatments are only performed by our own fully qualified nurses.
          Treatments can be given at the end of the initial consultation if
          agreed by the client. The home consultations is £150, and at the
          clinic is £49, but you can redeem it against any treatment purchase
          higher then 249£. The payment for any home treatment it’s requested
          upfront and it’s non-renfundable, unless we fail to deliver the
          consulation in the specific day.
        </p>
        <p className="my-5">
          Any purchase of treatments above 249£ comes with free consultation.
        </p>
        <div className="flex flex-row overflow-x-auto scrolling-touch tb:scrollbar-hide md:scrollbar-show px-3 w-full tb:w-fit tb:grid tb:grid-cols-3">
          <div className="flex flex-row items-center mr-[25px]">
            <div className="flex flex-col items-start  md:w-[400px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C] mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/DENTAL.svg" className="mb-3 self-center" />
              <span className="text-[20px] font-bold uppercase">
                Dental treatments COnsultation
              </span>
              <span className="text-[#C6C6C6] text-[14px]">
                SPF50+ PA++++-P
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">$1,799.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  $1,149.99
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center mr-[25px]">
            <div className="flex flex-col items-start md:w-[400px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/BREAST.svg" className="mb-3 self-center" />
              <span className="text-[20px] font-bold uppercase">
                Breast implants COnsultation
              </span>
              <span className="text-[#C6C6C6] text-[14px]">
                SPF50+ PA++++-P
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">$1,799.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  $1,149.99
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center md:pr-4 pr-1">
            <div className="flex flex-col items-start md:w-[400px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/BUTT.svg" className="mb-3 self-center" />
              <span className="text-[20px] font-bold uppercase">
                Brazilian Bum Lift COnsultation
              </span>
              <span className="text-[#C6C6C6] text-[14px]">
                SPF50+ PA++++-P
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">$1,799.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  $1,149.99
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center md:pr-4 pr-1">
            <div className="flex flex-col items-start md:w-[400px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/HAIR.svg" className="mb-3 self-center" />
              <span className="text-[20px] font-bold uppercase">
                hair transplant COnsultation
              </span>
              <span className="text-[#C6C6C6] text-[14px]">
                SPF50+ PA++++-P
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">$1,799.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  $1,149.99
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Treatments;

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
