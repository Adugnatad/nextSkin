import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"
import { TfiClose } from "react-icons/tfi"
import { useContext } from 'react'
import { Context } from '../../pages/_app'
import Headroom from 'react-headroom'
import Ratings from './ratings'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
    const { menuOpen, setMenuOpen } = useContext(Context);
    const router = useRouter()

    const handlePageChange = (event) => {
        setMenuOpen(false);
        console.log(router.asPath);
    }
    return (
        // <Headroom>
        <header>
            <Ratings />
            {menuOpen && <div className='tb:hidden bg-[#9686DA]  text-[#000] fixed z-20 top-[49px]   flex flex-col items-center justify-start menu h-full w-full'>
                <div className='flex flex-col justify-center xs:flex-row xs:justify-start items-center bg-[#7F73B1] w-full px-[10px]'>
                    <div className='flex flex-row items-center'>
                        <img src='/assets/googleSvg.svg' className='h-[50px]' />
                        <img src='/assets/starsSvg.svg' className='h-[23px] mr-2' />
                    </div>
                    <span className='text-white text-[14px] mt-[7px]  xs:mb-1'>4.5 rating of 25 reviews </span>
                </div>
                <div className='flex flex-col space-y-2 items-center w-full'>
                    <Link href="/">
                        <span onClick={() => handlePageChange("Home")} className="text-[#FFF] font-medium text-[18px] mt-3 cursor-pointer border-hidden border-b-[3px] border-b-[#fff] hover:mb-[-3px] p-1 w-fit flex flex-col items-center">HOME</span>
                    </Link>
                    <Link href="/treatments">
                        <span onClick={() => handlePageChange("Treatments")} className="text-[#FFFFFF80] text-[18px] mt-3 cursor-pointer border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] p-1 w-fit flex flex-col items-center">TREATMENTS</span>
                    </Link>
                    <Link href="/products">
                        <span onClick={() => handlePageChange("Products")} className="text-[#FFFFFF80] text-[18px] mt-3  cursor-pointer border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] p-1 w-fit flex flex-col items-center">PRODUCTS</span>
                    </Link>
                    <Link href="/contactus">
                        <span onClick={() => handlePageChange("Contact")} className="text-[#FFFFFF80] text-[18px] mt-3  cursor-pointer border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] p-1 w-fit flex flex-col items-center">CONTACT US</span>
                    </Link>
                    <Link href="/faq">
                        <span onClick={() => handlePageChange("Faq")} className="text-[#FFFFFF80] text-[18px] mt-3  cursor-pointer border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] p-1 w-fit flex flex-col items-center">FAQ</span>
                    </Link>
                </div>
                <div className='flex flex-col items-center absolute bottom-3 w-full'>
                    <div className='flex flex-row space-x-4'>
                        <img src='/assets/instagramSvg.svg' />
                        <img src='/assets/facebookSvg.svg' />
                        <img src='/assets/youtubeSvg.svg' />
                    </div>
                    <div className='flex items-center flex-col justify-center xs:flex-row  xs:justify-between bg-[#6C5EA4] text-white text-[12px]  px-4 py-1 my-3 w-full'>
                        <div className='flex flex-row space-x-3 items-center'>
                            <img src='/assets/mailSvg.svg' className='hover:cursor-pointer' />
                            <span className='hover:cursor-pointer' >support@aztreatments.com</span>
                        </div>
                        <div className='flex flex-row space-x-3 items-center'>
                            <span className='hover:cursor-pointer'>+44 020 7042 1880</span>
                            <img src='/assets/telephoneSvg.svg' className='hover:cursor-pointer' />
                        </div>
                    </div>
                    <span className='text-white text-[16px] mb-[49px]'>© AZ TREATMENTS 2022</span>
                </div>
            </div>
            }
            <div className='flex flex-row items-center justify-between absolute z-20 top-[70px] w-full mb-10 px-[35px]'>
                <div className='flex flex-row items-center space-x-3'>
                    <img src='/assets/logoSvg.svg' className='hidden tb:flex md:ml-[85px] ' />
                    <span className='hidden tb:flex text-white font-medium text-[22px] '>TREATMENTS</span>
                </div>
                <div className='hidden tb:flex flex-row items-center space-x-4 md:mr-[85px] xxl:absolute right-[100px]'>
                    <Link href="/">
                        <span onClick={() => handlePageChange("Home")} className='selectedPage '>HOME</span>
                    </Link>
                    <Link href="/treatments">
                        <span onClick={() => handlePageChange("Treatments")} className='unselectedPage'>TREATMENTS</span>
                    </Link>
                    <Link href="/products">
                        <span onClick={() => handlePageChange("Products")} className='unselectedPage'>PRODUCTS</span>
                    </Link>
                    <Link href="/contactus">
                        <span onClick={() => handlePageChange("Contacts")} className='unselectedPage'>CONTACT US</span>
                    </Link>
                    <Link href="/faq">
                        <span onClick={() => handlePageChange("Faq")} className='unselectedPage'>FAQ</span>
                    </Link>
                </div>
                <div className='bg-[#9686DA] tb:hidden flex flex-row items-center justify-between fixed top-0 left-0 z-20 pt-5 w-full' >
                    <div className='absolute flex flex-row justify-between top-0 px-4 py-3 bg-[#6C5EA4] w-full'>
                        <img src='/assets/logoSvg.svg' className=' tb:hidden' />
                        <div className='tb:hidden flex flex-row items-center space-x-3 ' >
                            <img src='/assets/ShoppingSvg.svg' />
                            {!menuOpen ?
                                <FaBars size={25} className="cursor-pointer" color='#fff' onClick={() => setMenuOpen(!menuOpen)} />
                                : <TfiClose size={25} className="cursor-pointer" color='#fff' onClick={() => setMenuOpen(!menuOpen)} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
        // </Headroom>
    )
}

export default Header