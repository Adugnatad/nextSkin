import React, { useContext } from "react";
import PageHero from "../src/components/pageHero";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "../components/slider";

const Homepage = () => {
  //   const NavigationControls = () => {
  //     return (
  //       <>
  //         <div className="flex flex-col flex-wrap  items-center w-full">
  //           <div className="flex flex-col lg:flex-row flex-wrap  items-center w-full justify-start mt-10 ft:mt-[80px]">
  //             <button className="bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] border-[1px] md:border-[0] font-bold hover:bg-[#ddd] md:mr-[30px] mb-[30px]">
  //               VIEW TREATMENTS
  //             </button>
  //             <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 w-[249.61px] font-bold hover:bg-gradient-to-l md:mr-[30px] mb-[30px]">
  //               VIEW PRODUCTS
  //             </button>
  //           </div>
  //         </div>
  //         <div
  //           className="w-full flex flex-col items-center justify-center pb-3  px-3 absolute bottom-0 left-0 tb:bottom-20 tb:w-[60%] "
  //           style={{
  //             marginLeft: "auto",
  //             marginRight: "auto",
  //             left: "0",
  //             right: "0",
  //             textAlign: "center",
  //           }}
  //         >
  //           <div className="flex  flex-row items-center justify-between space-x-2 mt-[10px] md:mt-[100px] tb:mt-[200px] w-full">
  //             {
  //               <a
  //                 onClick={() => swiper.slidePrev()}
  //                 href="#carouselExampleControls"
  //                 data-slide="prev"
  //                 className="carousel-control-prev"
  //               >
  //                 <BsChevronLeft
  //                   size={25}
  //                   className=" border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] hover:text-[#E8C229] navigationIcons mobile"
  //                 />
  //               </a>
  //             }
  //             <div className="flex flex-row items-center space-x-3">
  //               <img src="/assets/ellipse.svg" />
  //               <img src="/assets/ellipse.svg" />
  //               <img src="/assets/selectedEllipse.svg" />
  //             </div>
  //             {
  //               <a
  //                 onClick={() => swiper.slideNext()}
  //                 href="#carouselExampleControls"
  //                 data-slide="next"
  //                 className="carousel-control-next"
  //               >
  //                 {" "}
  //                 <BsChevronRight
  //                   size={25}
  //                   className="border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] navigationIcons mobile"
  //                 />
  //               </a>
  //             }
  //           </div>
  //         </div>
  //       </>
  //     );
  //   };

  return (
    <>
      <Slider main="Homepage" />
      <div className="flex flex-col items-center md:mt-[20px] w-full">
        <section className="w-full">
          <div className="flex flex-col items-center mb-5">
            <span className="text-[36px] font-bold mb-2">BRANDS</span>
            <img src="/assets/colorfulBorder.svg" />
          </div>
          <div className="flex flex-col md:flex-row justify-between flex-wrap items-center w-full  md:pl-[100px] md:pr-[100px] mb-10 tb:mb-10 tb:mt-10">
            <img
              src="/assets/Brand1.svg"
              className="hover:shadow-xl rounded-lg w-[225px]"
            />
            <img
              src="/assets/Brand2.svg"
              className="hidden md:flex hover:shadow-xl rounded-lg"
            />
            <img
              src="/assets/Brand3.svg"
              className="hover:shadow-xl rounded-lg"
            />
            <img
              src="/assets/Brand4.svg"
              className="hover:shadow-xl rounded-lg"
            />
            <img
              src="/assets/Brand5.svg"
              className="hidden md:flex hover:shadow-xl rounded-lg"
            />
            <img
              src="/assets/Brand6.svg"
              className="hidden md:flex hover:shadow-xl rounded-lg pr-3"
            />
          </div>
        </section>

        <section className=" mb-[-90px] z-10 flex flex-col items-center md:px-[100px] w-full px-4">
          <div className="flex flex-col items-center  mb-[60px]">
            <span className="text-[36px] font-bold mb-2">WHY US</span>
            <img src="/assets/colorfulBorder.svg" />
          </div>
          <div className=" flex flex-row overflow-x-auto  scrolling-touch tb:scrollbar-hide items-center justify-start tb:justify-between w-full  pb-5">
            <div className="flex flex-row space-x-4 items-center md:pr-4 pl-1">
              <div className="flex-none md:flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer hover:bg-[#796AB81A] mr-4">
                <img src="/assets/homeTreatmentSvg.svg" />
                <div className="mt-[-20px]">
                  <span className="font-semibold text-[17px] text-[#3F3F3F]">
                    Home treatments
                  </span>
                  <p className="text-[14px] text-[#3F3F3F] mt-3">
                    We are focused on bringing affordable, and quality
                    healthcare to your doorstep,
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-4 items-center md:pr-4 pr-1">
              <div className="flex-none md:flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer hover:bg-[#796AB81A] mr-4">
                <img src="/assets/homeTreatmentSvg.svg" />
                <div className="mt-[-20px]">
                  <span className="font-semibold text-[17px] text-[#3F3F3F]">
                    Home treatments
                  </span>
                  <p className="text-[14px] text-[#3F3F3F] mt-3">
                    We are focused on bringing affordable, and quality
                    healthcare to your doorstep,
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-4 items-center md:pr-4 pr-1">
              <div className="flex-none md:flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer hover:bg-[#796AB81A] mr-4">
                <img src="/assets/homeTreatmentSvg.svg" />
                <div className="mt-[-20px]">
                  <span className="font-semibold text-[17px] text-[#3F3F3F]">
                    Home treatments
                  </span>
                  <p className="text-[14px] text-[#3F3F3F] mt-3">
                    We are focused on bringing affordable, and quality
                    healthcare to your doorstep,
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-4 items-center md:pr-4">
              <div className="flex-none md:flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer hover:bg-[#796AB81A] mr-4">
                <img src="/assets/homeTreatmentSvg.svg" />
                <div className="mt-[-20px]">
                  <span className="font-semibold text-[17px] text-[#3F3F3F]">
                    Home treatments
                  </span>
                  <p className="text-[14px] text-[#3F3F3F] mt-3">
                    We are focused on bringing affordable, and quality
                    healthcare to your doorstep,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col ft:flex-row items-center justify-between  md:mx-[94px] md:px-[50px] bg-[#FBFBFB] rounded-[25px] pt-[110px] pb-[50px] px-5  mb-10">
          <img
            src="/assets/treatmentHomeSvg.svg"
            className="md:w-fit w-full mb-5 md:mb-0 mx-[20px] md:mr-[50px]"
          />

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center self-start ml-10 mb-8">
              <span className="text-[36px] font-bold mb-2">
                Home Treatments
              </span>
              <img src="/assets/colorfulBorder.svg" />
            </div>
            <div className="flex flex-row items-center  mb-20 mx-[9px] md:mx-0">
              <img
                src="/assets/separatorSvg.svg"
                className="hidden md:flex h-[180px] mr-5"
              />
              <p className=" w-full md:px-4">
                We can offer your treatments at your house. Just look for the
                treatment you wish and book your favourite day and hour to get
                it done.
                <br /> <br />{" "}
                <span className="font-bold text-[20px]">Note! </span>
                <br /> The treatments at your house tent to be more expensive
                then in the clinic. For{" "}
                <span className="font-bold">traveling outside of London </span>
                will be <span className="font-bold">
                  additional charges{" "}
                </span>{" "}
                in top of the treatment/s price.
              </p>
            </div>
            <div className="flex flex-row justify-center md:justify-start w-full">
              <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[19px] md:w-[325px] py-3 px-3 rounded-lg hover:bg-gradient-to-l ">
                CHECK TREATMENTS
              </button>
            </div>
          </div>
        </section>

        <section className=" flex flex-col items-center mb-10 w-full md:w-[91%] px-4 md:px-0">
          <div className="flex flex-col items-center mb-10">
            <span className="text-[36px] font-bold mb-2">PRODUCTS</span>
            <img src="/assets/colorfulBorder.svg" />
          </div>
          <div className="flex flex-row items-center justify-center w-fit space-x-3 bg-[#F6F6F6] py-3 px-4 mb-10 rounded-lg">
            <button className="bg-[#fff] text-[#3F3F3F]  from-[#E1C75C] to-[#C2A013] font-medium text-[18px] md:w-[225px] px-4 py-3 rounded-lg hover:text-white hover:bg-gradient-to-r">
              NEW ARRIVALS
            </button>
            <button className="bg-[#fff]  text-[#3F3F3F]  from-[#E1C75C] to-[#C2A013] font-medium text-[18px] md:w-[225px] px-4 py-3 rounded-lg hover:text-white hover:bg-gradient-to-r">
              MOST POPULAR
            </button>
          </div>
          <div className=" flex flex-row overflow-x-auto scrolling-touch tb:scrollbar-hide md:scrollbar-show items-center justify-start tb:justify-between w-full mx-[30px] pb-5">
            <div className="flex flex-row items-center mr-[25px]">
              <BsChevronLeft
                size={25}
                className="hidden md:flex border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] hover:text-[#E8C229] navigationIcons mr-5"
              />
              <div className="flex flex-col items-start  w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C] mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
                <img src="/assets/sunScreenSvg.svg" className="mb-3" />
                <span className="text-[20px] font-bold">
                  BIO WATERY SUN CREAM
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
              <div className="flex flex-col items-start w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
                <img src="/assets/sunScreenSvg.svg" className="mb-3" />
                <span className="text-[20px] font-bold">
                  BIO WATERY SUN CREAM
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
              <div className="flex flex-col items-start w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
                <img src="/assets/sunScreenSvg.svg" className="mb-3" />
                <span className="text-[20px] font-bold">
                  BIO WATERY SUN CREAM
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
              <BsChevronRight
                size={25}
                className="hidden md:flex border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] hover:text-[#E8C229] navigationIcons ml-5"
              />
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center mb-5 px-4">
            <span className="text-[30px] md:text-[36px] font-bold mb-2">
              CUSTOMER REVIEWS
            </span>
            <img src="/assets/colorfulBorder.svg" />
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative flex flex-col items-center md:items-start w-[92%] md:w-[88%] rounded-[20px] py-4 mb-5">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full pr-2 px-3">
                <img src="/assets/Jessica L SVG.svg" />
                <span className="md:hidden text-[20px] absolute right-[10px]">
                  3 h ago
                </span>
                <div className="flex flex-row items-start justify-center md:justify-between w-full">
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-[25px] md:text-[32px] font-bold">
                      Jessica L.
                    </span>
                    <div className="flex flex-row items-center self-start space-x-3 mb-2">
                      <img src="/assets/checkMark.svg" className="h-fit" />
                      <span className="text-[#A1A1A1] text-[20px]">
                        Verified Buyer
                      </span>
                    </div>
                    <div className="flex flex-row self-start space-x-3 mb-4">
                      <img src="/assets/fullStars.svg" />
                      <span>5/5</span>
                    </div>
                    <p className="mb-[20px] md:mb-[100px] text-[16px] md:text-[20px]">
                      These is the best product I bought so far! I love how they
                      grab color too. So excited about this products!
                    </p>
                  </div>
                  <span className="hidden md:flex text-[20px]">3 h ago</span>
                </div>
              </div>
              <button className="self-center bg-gradient-to-r from-[#9D90D5] to-[#796AB8] text-white rounded-lg w-[225px] py-3 hover:bg-gradient-to-l">
                VISIT PRODUCT
              </button>
            </div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative flex flex-col items-center md:items-start w-[92%] md:w-[88%] rounded-[20px] py-4 mb-5">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full pr-2 px-3">
                <img src="/assets/Jessica L SVG.svg" />
                <span className="md:hidden text-[20px] absolute right-[10px]">
                  3 h ago
                </span>
                <div className="flex flex-row items-start justify-center md:justify-between w-full">
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-[25px] md:text-[32px] font-bold">
                      Jessica L.
                    </span>
                    <div className="flex flex-row items-center self-start space-x-3 mb-2">
                      <img src="/assets/checkMark.svg" className="h-fit" />
                      <span className="text-[#A1A1A1] text-[20px]">
                        Verified Buyer
                      </span>
                    </div>
                    <div className="flex flex-row self-start space-x-3 mb-4">
                      <img src="/assets/fullStars.svg" />
                      <span>5/5</span>
                    </div>
                    <p className="mb-[20px] md:mb-[100px] text-[16px] md:text-[20px]">
                      These is the best product I bought so far! I love how they
                      grab color too. So excited about this products!
                    </p>
                  </div>
                  <span className="hidden md:flex text-[20px]">3 h ago</span>
                </div>
              </div>
              <button className="self-center bg-gradient-to-r from-[#9D90D5] to-[#796AB8] text-white rounded-lg w-[225px] py-3 hover:bg-gradient-to-l">
                VISIT PRODUCT
              </button>
            </div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative flex flex-col items-center md:items-start w-[92%] md:w-[88%] rounded-[20px] py-4 mb-5">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full pr-2 px-3">
                <img src="/assets/Jessica L SVG.svg" />
                <span className="md:hidden text-[20px] absolute right-[10px]">
                  3 h ago
                </span>
                <div className="flex flex-row items-start justify-center md:justify-between w-full">
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-[25px] md:text-[32px] font-bold">
                      Jessica L.
                    </span>
                    <div className="flex flex-row items-center self-start space-x-3 mb-2">
                      <img src="/assets/checkMark.svg" className="h-fit" />
                      <span className="text-[#A1A1A1] text-[20px]">
                        Verified Buyer
                      </span>
                    </div>
                    <div className="flex flex-row self-start space-x-3 mb-4">
                      <img src="/assets/fullStars.svg" />
                      <span>5/5</span>
                    </div>
                    <p className="mb-[20px] md:mb-[100px] text-[16px] md:text-[20px]">
                      These is the best product I bought so far! I love how they
                      grab color too. So excited about this products!
                    </p>
                  </div>
                  <span className="hidden md:flex text-[20px]">3 h ago</span>
                </div>
              </div>
              <button className="self-center bg-gradient-to-r from-[#9D90D5] to-[#796AB8] text-white rounded-lg w-[225px] py-3 hover:bg-gradient-to-l">
                VISIT PRODUCT
              </button>
            </div>
          </div>
          <button className="self-center bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white rounded-lg w-[91%] md:w-[299.72px] py-3 my-7 mb-10 font-semibold hover:bg-gradient-to-l">
            LOAD MORE COMMENTS
          </button>
        </section>
      </div>
    </>
  );
};

export default Homepage;

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
