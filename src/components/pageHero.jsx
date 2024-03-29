import Image from "next/image";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";

function PageHero({ background, mobileBackground, page }) {
  const swiper = useSwiper();
  return (
    <div className="flex flex-col w-full h-full">
      <div>
        <div className="relative h-screen   mb-7">
          <div className="relative h-full absolute">
            <Image
              src={background}
              alt="hero"
              priority={true}
              fill={true}
              className="hidden object-cover bg:flex"
            />
          </div>
          <div className=" w-full bg-red-100 ">
            <Image
              src={mobileBackground}
              alt="mobile_hero"
              priority={true}
              fill={true}
              className="flex bg:hidden object-cover"
            />
          </div>

          {background !== "/assets/contactHero.svg" ? (
            <div className="flex flex-col items-center  pt-20 top-0 absolute tb:top-[50px] w-full h-full lg:ml-[70px]">
              <div className="self-center text-center md:text-start md:self-start  md:pl-[20px] mt-3 md:mt-4 w-full">
                <span className="text-white text-[60px] tb:text-[75px] font-bold leading-none">
                  {page === "Homepage" ? (
                    <>
                      ALL YOU NEED <br />
                      TO BE EPIC{" "}
                    </>
                  ) : page === "Treatement" ? (
                    <>
                      PROMOTION <br /> DERMAL FILLERS
                    </>
                  ) : page === "Product" ? (
                    <>
                      REVOLAX <br />
                      DEEP WITH LIDOCAINE{" "}
                    </>
                  ) : (
                    <> </>
                  )}
                </span>
                <p className="md:max-w-[550px] text-[17px] md:text-[20px] text-white mt-10 px-4 md:px-[0px] md:mt-5">
                  If your skin has started to show wear and tear from sun,
                  aging, acne or other skin conditions there is much that can be
                  done.
                </p>
              </div>
              {background !== "/assets/productsHero.svg" &&
                background !== "/assets/contactHero.svg" && (
                  <div className="flex flex-col flex-wrap  items-center md:self-start">
                    <div className="flex flex-col md:flex-row flex-wrap  items-center w-full justify-center md:justify-start md:pl-[13px] mt-10 ft:mt-[80px]">
                      <button className="bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] border-[1px] md:border-[0] font-bold hover:bg-[#ddd] md:mr-[30px] mb-[30px]">
                        VIEW TREATMENTS
                      </button>
                      <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 w-[249.61px] font-bold hover:bg-gradient-to-l md:mr-[30px] mb-[30px]">
                        VIEW PRODUCTS
                      </button>
                    </div>
                  </div>
                )}
            </div>
          ) : (
            <div className="flex flex-col  pt-20 top-0 absolute tb:top-[50px] w-full h-full lg:ml-[70px]">
              <div className="self-center text-center md:text-start md:self-start  md:pl-[28px] mt-3 md:mt-4 w-full">
                <span className="text-white text-[60px] tb:text-[75px] font-bold leading-none uppercase">
                  Contact us <br />
                  if you need help
                </span>
                <p className="md:max-w-[550px] text-[17px] md:text-[17px] text-white mt-10 px-4 md:px-[0px] md:mt-5">
                  We may have already answered your questions in our FAQ
                  section, but if you can&apos;t find the answer you&apos;re
                  looking for, please get in touch with us.
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
          )}

          {background !== "/assets/contactHero.svg" && (
            <div
              className="w-full flex flex-col items-center justify-center pb-3  px-3 absolute bottom-0 left-0 tb:bottom-20 tb:w-[60%] "
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                left: "0",
                right: "0",
                textAlign: "center",
              }}
            >
              <div className="flex  flex-row items-center justify-between space-x-2 w-full">
                {
                  <a
                    onClick={() => swiper.slidePrev()}
                    href="#carouselExampleControls"
                    data-slide="prev"
                    className="carousel-control-prev"
                  >
                    <BsChevronLeft
                      size={25}
                      className=" border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] hover:text-[#E8C229] navigationIcons bg-white mobile"
                    />
                  </a>
                }
                <div className="flex flex-row items-center space-x-3">
                  <div>
                    <Image
                      src="/assets/selectedEllipse.svg"
                      alt="circle"
                      width={23}
                      height={23}
                    />
                  </div>
                  <div>
                    <Image
                      src="/assets/ellipse.svg"
                      alt="circle"
                      width={15}
                      height={15}
                    />
                  </div>
                  <div>
                    <Image
                      src="/assets/ellipse.svg"
                      alt="circle"
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
                {
                  <a
                    onClick={() => swiper.slideNext()}
                    href="#carouselExampleControls"
                    data-slide="next"
                    className="carousel-control-next"
                  >
                    <BsChevronRight
                      size={25}
                      className="border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] navigationIcons mobile bg-white"
                    />
                  </a>
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageHero;
