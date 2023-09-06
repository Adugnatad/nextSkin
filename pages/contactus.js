import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import PageHero from "../src/components/pageHero";
import Image from "next/image";
import Slider from "../components/slider";

const Contact = () => {
  return (
    <>
      {/* <Slider main={"Contact"} /> */}

      <PageHero
        background={"/assets/contactHero.svg"}
        mobileBackground="/assets/mobileBackgroundSvg.svg"
      >
        <div className="self-center md:self-start md:ml-[70px]">
          <div className="self-center text-center md:text-start md:self-start  md:pl-[28px] mt-3 md:mt-4 w-full">
            <span className="text-white text-[60px] tb:text-[75px] font-bold leading-none uppercase">
              Contact us <br />
              if you need help
            </span>
            <p className="md:max-w-[550px] text-[17px] md:text-[17px] text-white mt-10 px-4 md:px-[0px] md:mt-5">
              We may have already answered your questions in our FAQ section,
              but if you can&apos;t find the answer you&apos;re looking for,
              please get in touch with us.
            </p>
          </div>
          <div className="flex flex-col flex-wrap  items-center">
            <div className="flex flex-col md:flex-row flex-wrap  items-center w-full justify-center md:justify-start md:pl-[30px] mt-10 ft:mt-[80px]">
              <button className="bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] border-[1px] md:border-[0] font-bold hover:bg-[#ddd] md:mr-[30px] mb-[30px] uppercase">
                Track order
              </button>
              <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 font-bold hover:bg-gradient-to-l md:mr-[30px] mb-[30px] uppercase">
                Reschedule appointment
              </button>
            </div>
          </div>
        </div>
      </PageHero>

      <div className="grid grid-cols-1 tb:grid-cols-2 text-center w-full">
        <div className="flex flex-col items-start tb:ml-20 tb:mr-10 px-10 p-5">
          <div className="flex flex-col items-center mb-5">
            <span className="text-[36px] font-bold mb-2">SUBMIT ENQUIRY</span>
            <img src="/assets/colorfulBorder.svg" />
          </div>
          <div className="flex flex-col space-y-[20px] w-full">
            <div className="flex flex-col items-start w-full">
              <span className="mb-2 font-[500] color-[#3E3E3E] text-[14px]">
                Title
              </span>
              <select className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-2">
                <option>Mr</option>
                <option>Mrs.</option>
              </select>
            </div>
            <div className="flex flex-col items-start w-full">
              <span className="mb-2 font-[500] color-[#3E3E3E] text-[14px]">
                First name
              </span>
              <input
                type="text"
                className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-2"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <span className="mb-2 font-[500] color-[#3E3E3E] text-[14px]">
                Last name
              </span>
              <input
                type="text"
                className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-2"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <span className="mb-2 font-[500] color-[#3E3E3E] text-[14px]">
                E-mail
              </span>
              <input
                type="text"
                className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-2"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <span className="mb-2 font-[500] color-[#3E3E3E] text-[14px]">
                Type
              </span>
              <select className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-2">
                <option>Treatment enquiry</option>
                <option>Service enquiry</option>
              </select>
            </div>
            <div className="flex flex-col items-start w-full">
              <span className="mb-2 font-[500] color-[#3E3E3E] text-[14px]">
                Reference number (optional)
              </span>
              <input
                type="text"
                className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-2"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <span className="mb-2 font-[500] color-[#3E3E3E] text-[14px]">
                Message
              </span>
              <textarea
                type="text"
                className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-2 h-[150px]"
                placeholder="I would like some new treatment..."
              />
            </div>
            <button className=" bg-gradient-to-r from-[#9D90D5] to-[#796AB8] text-white rounded-lg w-[225px] py-2 hover:bg-gradient-to-l">
              SUBMIT
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start tb:mr-20 tb:ml-10 px-10 p-5">
          <img src={"/assets/map.svg"} alt="" height="100%" width="100%" />
          <div className="flex flex-col items-start mt-4">
            <span className="uppercase text-[19px] font-bold">
              Visit our clinic
            </span>
            <div className="flex flex-row items-center space-x-3">
              <img src="/assets/mapArrow.svg" alt="" />
              <span>Jln. Pelabuhan Ratu , Skabumi, Jawa Barat, Idonesoa</span>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2 w-full">
            <span className="font-medium mt-7 mb-2">OPENING HOURS:</span>
            <div className="flex flex-row justify-between w-full px-3 py-2 bg-[#F5F5F5] rounded-[10px]">
              <span className="text-[#796AB8] text-[18px] font-medium">
                Monday
              </span>
              <span>9:00 - 17:00</span>
            </div>
            <div className="flex flex-row justify-between w-full px-3 py-2 bg-[#F5F5F5] rounded-[10px]">
              <span className="text-[#796AB8] text-[18px] font-medium">
                Monday
              </span>
              <span>9:00 - 17:00</span>
            </div>
            <div className="flex flex-row justify-between w-full px-3 py-2 bg-[#F5F5F5] rounded-[10px]">
              <span className="text-[#796AB8] text-[18px] font-medium">
                Monday
              </span>
              <span>9:00 - 17:00</span>
            </div>
            <div className="flex flex-row justify-between w-full px-3 py-2 bg-[#F5F5F5] rounded-[10px]">
              <span className="text-[#796AB8] text-[18px] font-medium">
                Monday
              </span>
              <span>9:00 - 17:00</span>
            </div>
            <div className="flex flex-row justify-between w-full px-3 py-2 bg-[#F5F5F5] rounded-[10px]">
              <span className="text-[#796AB8] text-[18px] font-medium">
                Monday
              </span>
              <span>9:00 - 17:00</span>
            </div>
            <button
              className=" bg-gradient-to-r from-[#9D90D5] to-[#796AB8] text-white rounded-lg w-[225px] py-2 hover:bg-gradient-to-l uppercase"
              style={{ marginTop: "30px", marginBottom: "15px" }}
            >
              open in Google MAPS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
