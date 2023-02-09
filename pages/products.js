import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper";
import { useSwiper, useSwiperSlide } from 'swiper/react';
import PageHero from "../src/components/pageHero";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { useState } from "react";

const Products = () => {
    const [activeSlide, setActiveSlide] = useState(1);


    const Slide1 = () => {

        const swiperSlide = useSwiperSlide();
        if (swiperSlide.isActive) {
            setActiveSlide(1);
        }
        return (
            <div className='self-center md:self-start md:ml-[70px]'>
                <div className='self-center text-center md:text-start md:self-start  md:pl-[28px] mt-3 md:mt-4 w-full'>
                    <span className='text-white text-[60px] tb:text-[75px] font-bold leading-none'>ALL YOU NEED <br />TO BE EPIC</span>
                    <p className='md:max-w-[550px] text-[17px] md:text-[20px] text-white mt-10 px-4 md:px-[0px] md:mt-5'>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
                </div>
            </div>
        )
    }

    const Slide2 = () => {
        const swiperSlide = useSwiperSlide();
        if (swiperSlide.isActive) {
            setActiveSlide(2);
        }
        return (
            <div className='self-center md:self-start md:ml-[70px]' >
                <div className='self-center text-center md:text-start md:self-start  md:pl-[20px] mt-3 md:mt-4 w-full'>
                    <span className='text-white text-[60px] tb:text-[75px] font-bold leading-none'>PERFECTION <br />TO BE EPIC</span>
                    <p className='md:max-w-[550px] text-[17px] md:text-[20px] text-white mt-10 px-3 md:px-[0px] md:mt-5'>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
                </div>
                <div className='flex flex-col flex-wrap  items-center'>
                    <div className='flex flex-col md:flex-row flex-wrap  items-center w-full justify-center md:justify-start md:pl-[13px] mt-10 ft:mt-[80px]'>
                        <button className='bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] border-[1px] md:border-[0] font-bold hover:bg-[#ddd] md:mr-[30px] mb-[30px]'>VIEW TREATMENTS</button>
                        <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 w-[249.61px] font-bold hover:bg-gradient-to-l md:mr-[30px] mb-[30px]'>VIEW PRODUCTS</button>
                    </div>
                </div>
            </div>
        )
    }
    const Slide3 = () => {
        const swiperSlide = useSwiperSlide();
        if (swiperSlide.isActive) {
            setActiveSlide(3);
        }
        return (
            <div className='self-center md:self-start md:ml-[70px]' >
                <div className='self-center text-center md:text-start md:self-start  md:pl-[20px] mt-3 md:mt-4 w-full'>
                    <span className='text-white text-[60px] tb:text-[75px] font-bold leading-none'>AMAZEMENT <br />TO BE EPIC</span>
                    <p className='md:max-w-[550px] text-[17px] md:text-[20px] text-white mt-10 px-3 md:px-[0px] md:mt-5'>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
                </div>
                <div className='flex flex-col flex-wrap  items-center'>
                    <div className='flex flex-col md:flex-row flex-wrap  items-center w-full justify-center md:justify-start md:pl-[13px] mt-10 ft:mt-[80px]'>
                        <button className='bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] border-[1px] md:border-[0] font-bold hover:bg-[#ddd] md:mr-[30px] mb-[30px]'>VIEW TREATMENTS</button>
                        <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 w-[249.61px] font-bold hover:bg-gradient-to-l md:mr-[30px] mb-[30px]'>VIEW PRODUCTS</button>
                    </div>
                </div>
            </div>
        )
    }

    const SliderControl = () => {
        const swiper = useSwiper();
        return (
            <div className='w-full flex flex-col items-center justify-center pb-3  px-3 absolute bottom-0 left-0 tb:bottom-20 tb:w-[60%] z-50'
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: "0",
                    right: "0",
                    textAlign: "center",
                }}>
                <div className='flex  flex-row items-center justify-between space-x-2 mt-[10px] md:mt-[100px] tb:mt-[200px] w-full'>
                    {<a onClick={() => swiper.slidePrev()} href="#carouselExampleControls" data-slide="prev" className='carousel-control-prev'><BsChevronLeft size={25} className=' border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] hover:text-[#E8C229] navigationIcons mobile' /></a>}
                    <div className='flex flex-row items-center space-x-3'>
                        <img src={activeSlide === 1 ? '/assets/selectedEllipse.svg' : '/assets/ellipse.svg'} />
                        <img src={activeSlide === 2 ? '/assets/selectedEllipse.svg' : '/assets/ellipse.svg'} />
                        <img src={activeSlide === 3 ? '/assets/selectedEllipse.svg' : '/assets/ellipse.svg'} />
                    </div>
                    {<a onClick={() => swiper.slideNext()} href="#carouselExampleControls" data-slide="next" className='carousel-control-next'> <BsChevronRight size={25} className='border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] navigationIcons mobile' /></a>}

                </div>
            </div>)
    }


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
                    <PageHero background='/assets/productsHero.svg' mobileBackground='./assets/mobileBackgroundSvg.svg'>
                        <Slide1 />

                    </PageHero>

                </SwiperSlide>
                <SwiperSlide>
                    <PageHero background='/assets/homepageHeroSvg.svg' mobileBackground='/assets/mobileBackgroundSvg.svg'>
                        <Slide2 />
                    </PageHero>
                </SwiperSlide>
                <SwiperSlide>
                    <PageHero background='/assets/homepageHeroSvg.svg' mobileBackground='/assets/mobileBackgroundSvg.svg'>
                        <Slide3 />
                    </PageHero>
                </SwiperSlide>

                <SliderControl />
            </Swiper>
            <div className='flex flex-col items-center md:mt-[20px] w-full'>
                <div className='flex flex-col items-center my-5'>
                    <span className='text-[36px] font-bold mb-2 uppercase'>aftercare products</span>
                    <img src='/assets/colorfulBorder.svg' />
                </div>
                <div className="flex flex-row overflow-x-auto scrolling-touch scrollbar-hide p-3 w-full tb:w-fit tb:grid tb:grid-cols-3">
                    <div className='flex flex-row items-center mr-[25px]'>
                        <div className='flex flex-col items-start  w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C] mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer'>
                            <img src='/assets/aftercareProduct.svg' className='mb-3' />
                            <span className='text-[20px] font-bold uppercase'>Revolax</span>
                            <span className='text-[#000] text-[14px]'>deep with Lidocaine</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.svg' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[19px]'>£249.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>£199.99</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row space-x-4 items-center mr-[25px]'>
                        <div className='flex flex-col items-start w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer'>
                            <img src='/assets/aftercareProduct.svg' className='mb-3' />
                            <span className='text-[20px] font-bold uppercase'>Revolax</span>
                            <span className='text-[#000] text-[14px]'>deep with Lidocaine</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.svg' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[19px]'>£249.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>£199.99</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row space-x-4 items-center md:pr-4 pr-1'>
                        <div className='flex flex-col items-start w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer'>
                            <img src='/assets/aftercareProduct.svg' className='mb-3' />
                            <span className='text-[20px] font-bold uppercase'>Revolax</span>
                            <span className='text-[#000] text-[14px]'>deep with Lidocaine</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.svg' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[19px]'>£249.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>£199.99</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row space-x-4 items-center md:pr-4 pr-1'>
                        <div className='flex flex-col items-start w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer'>
                            <img src='/assets/aftercareProduct.svg' className='mb-3' />
                            <span className='text-[20px] font-bold uppercase'>REVOLAX</span>
                            <span className='text-[#000] text-[14px]'>deep with Lidocaine</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.svg' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[19px]'>£249.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>£199.99</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Products