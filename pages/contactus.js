import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import PageHero from "../src/components/pageHero";
import Image from "next/image";

const Contact = () => {


    return (
        <>
            <PageHero background='/assets/contactHero.svg' mobileBackground='./assets/mobileBackgroundSvg.svg'>
                <div className='self-center md:self-start md:ml-[70px]'>
                    <div className='self-center text-center md:text-start md:self-start  md:pl-[28px] mt-3 md:mt-4 w-full'>
                        <span className='text-white text-[60px] tb:text-[75px] font-bold leading-none uppercase'>Contact us <br />if you need help</span>
                        <p className='md:max-w-[550px] text-[17px] md:text-[17px] text-white mt-10 px-4 md:px-[0px] md:mt-5'>We may have already answered your questions in our FAQ section, but if you can't find the answer you're looking for, please get in touch  with us.</p>
                    </div>
                    <div className='flex flex-col flex-wrap  items-center'>
                        <div className='flex flex-col md:flex-row flex-wrap  items-center w-full justify-center md:justify-start md:pl-[30px] mt-10 ft:mt-[80px]'>
                            <button className='bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] border-[1px] md:border-[0] font-bold hover:bg-[#ddd] md:mr-[30px] mb-[30px] uppercase'>Track order</button>
                            <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 font-bold hover:bg-gradient-to-l md:mr-[30px] mb-[30px] uppercase'>Reschedule appointment</button>
                        </div>
                    </div>
                </div>

            </PageHero>

            <div className="grid grid-cols-1 tb:grid-cols-2 text-center w-full">
                <div className="flex flex-col items-start tb:ml-20 tb:mr-10 px-10 p-5">
                    <div className='flex flex-col items-center mb-5'>
                        <span className='text-[36px] font-bold mb-2'>SUBMIT ENQUIRY</span>
                        <img src='/assets/colorfulBorder.svg' />
                    </div>
                    <div className="space-y-3 w-full">
                        <div className="flex flex-col items-start w-full">
                            <span className="mb-2 color-[#3E3E3E] text-[14px]">Title</span>
                            <select className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-1">
                                <option>Mr</option>
                                <option>Mrs.</option>
                            </select>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <span className="mb-2 color-[#3E3E3E] text-[14px]">First name</span>
                            <input type="text" className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-1" />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <span className="mb-2 color-[#3E3E3E] text-[14px]">Last name</span>
                            <input type="text" className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-1" />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <span className="mb-2 color-[#3E3E3E] text-[14px]">E-mail</span>
                            <input type="text" className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-1" />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <span className="mb-2 color-[#3E3E3E] text-[14px]">Type</span>
                            <select className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-1">
                                <option>Treatment enquiry</option>
                                <option>Service enquiry</option>
                            </select>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <span className="mb-2 color-[#3E3E3E] text-[14px]">Reference number (optional)</span>
                            <input type="text" className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-1" />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <span className="mb-2 color-[#3E3E3E] text-[14px]">Message</span>
                            <textarea type="text" className="w-full border-[1px] border-[#ddd] rounded-[5px] px-2 py-1 h-[150px]" placeholder="I would like some new treatment..." />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start tb:mr-20 tb:ml-10 px-10 p-5">
                    <div>
                        <Image src={'/assets/map.svg'} alt="" height={500} width={500} />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="uppercase text-[19px] font-bold">Visit our clinic</span>
                        <div className="flex flex-row items-center space-x-3">
                            <img src="/assets/mapArrow.svg" alt="" />
                            <span>Jln. Pelabuhan Ratu , Skabumi, Jawa Barat, Idonesoa</span>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Contact