import React from 'react'
import { BiChevronRight } from "react-icons/bi"

const Footer = () => {
    return (

        <div className='flex flex-col  relative w-full'>
            <img src='/assets/Footer.svg' className='hidden ft:flex w-full ' />
            <div className='flex flex-row flex-wrap items-center ft:items-start  bg-[#3F3F3F] p-3 ft:py-0 px-4 border-t-[5px] border-[#E8C229] ft:border-hidden ft:bg-transparent  bottom-[0px] justify-center ft:justify-between w-full'>
                <div className='flex flex-col items-center ft:items-start w-full ft:w-fit ft:absolute top-[190px] xxl:top-[220px] left-[85px] xxl:left-[125px]'>
                    <img src='/assets/logoSvg2.svg' className='w-[60%] md:w-[40%] ft:hidden self-start md:self-center mb-5 mt-4' />
                    <p className='text-white text-[14px] font-semibold max-w-[522px] mb-7 md:mb-10'>You will be charged if you don't arrive in time or cancel your appointment within 24 h prior to your booking.</p>
                    <div className='flex flex-row items-center justify-between bg-[#FFFFFF0F] p-3 w-full md:w-[300px] cursor-pointer mb-10 rounded-lg'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-[16px] text-[#E8C229]'>Talk To Our Support</span>
                            <span className='text-white'>+44 7711111111</span>
                        </div>
                        <img src='/assets/callCenterIconSvg.svg' />
                    </div>
                </div>

                <div className='flex flex-col space-y-5 md:space-y-0 sm:flex-row flex-wrap  justify-center w-full ft:w-fit  md:mb-[100px] ft:absolute top-[70px] right-[80px]'>
                    <div className='flex flex-col items-start text-start mr-7'>
                        <div className='mb-7'>
                            <h1 className='text-white font-semibold text-[14px] md:text-[17px]'>CUSTOMER CARE</h1>
                            <hr className='w-[75px] h-[2px] mt-1 bg-[#E8C229]' />
                        </div>
                        <div className='text-white text-[13px] md:text-[15px] flex flex-col items-start space-y-3 ml-[-8px]'>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Contact us</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>How to order</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>FAQ</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Discounts</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Terms of service</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Privacy policy</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start text-start mr-7'>
                        <div className='mb-7'>
                            <h1 className='text-white font-semibold text-[14px] md:text-[17px]'>ABOUT US</h1>
                            <hr className='w-[75px] h-[2px] mt-1 bg-[#E8C229]' />
                        </div>
                        <div className='text-white text-[13px] md:text-[15px] flex flex-col items-start space-y-3 ml-[-8px]'>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>About us</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Partners</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Career</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start text-start md:mr-7'>
                        <div className='mb-7'>
                            <h1 className='text-white font-semibold text-[14px] md:text-[17px]'>MY ACCOUNT</h1>
                            <hr className='w-[75px] h-[2px] mt-1 bg-[#E8C229]' />
                        </div>
                        <div className='text-white text-[13px] md:text-[15px] flex flex-col items-start space-y-3 ml-[-8px]'>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Track order</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Change appointment</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Subscribe for news</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Login</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer