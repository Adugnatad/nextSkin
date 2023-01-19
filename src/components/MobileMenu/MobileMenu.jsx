import Image from 'next/image'
import React from 'react'
import { Header } from '../header/header'

export const MobileMenu = () => {
    return (
        <div className="w-full h-[100vh] bg-gradient-to-r from-[#9D90D5] to-[#796AB8] fixed top-0">
            <Header />
            <div className="flex flex-col items-center text-[#fff]">
                <div className="flex flex-row flex-wrap justify-center items-center bg-[#7F73B1] w-full sm:justify-start">
                    <div className=''>
                        <Image height={55} width={55} src={'/assets/googleIcon.svg'} />
                    </div>
                    <div className='flex flex-row space-x-1 mr-5'>
                        <div>
                            <Image height={24} width={24} src={'/assets/fullStar.svg'} />
                        </div>
                        <div>
                            <Image height={24} width={24} src={'/assets/fullStar.svg'} />
                        </div>
                        <div>
                            <Image height={24} width={24} src={'/assets/fullStar.svg'} />
                        </div>
                        <div>
                            <Image height={24} width={24} src={'/assets/fullStar.svg'} />
                        </div>
                        <div>
                            <Image height={24} width={24} src={'/assets/halfStar.svg'} />
                        </div>
                    </div>
                    <span className='text-white text-[16px] mb-1'>4.5 rating of 255 reviews</span>
                </div>
                <ul className='mt-10 flex flex-col items-center space-y-5 text-[#FFFFFF80]'>
                    <li className='hover:text-[#fff] hover:font-medium cursor-pointer'>HOME</li>
                    <li className='hover:text-[#fff] hover:font-medium cursor-pointer'>TREATMENTS</li>
                    <li className='hover:text-[#fff] hover:font-medium cursor-pointer'>PRODUCTS</li>
                    <li className='hover:text-[#fff] hover:font-medium cursor-pointer'>CONTACT US</li>
                    <li className='hover:text-[#fff] hover:font-medium cursor-pointer'>FAQ</li>
                </ul>
                <div className="flex flex-col items-center space-y-3 w-full absolute bottom-[25px]">
                    <div className='flex flex-row items-center space-x-6'>
                        <div>
                            <Image src={'/assets/instagram.svg'} alt="" height={30} width={30} />
                        </div>
                        <div>
                            <Image src={'/assets/facebook.svg'} alt="" height={30} width={30} />
                        </div>
                        <div>
                            <Image src={'/assets/youtube.svg'} alt="" height={30} width={30} />
                        </div>

                    </div>
                    <div className='flex flex-row flex-wrap justify-center items-center bg-[#6C5EA4] py-2 px-3 w-full sm:justify-between'>
                        <div className='flex flex-row items-center space-x-2'>
                            <div className='self-end'>
                                <img src="/assets/mail.svg" alt="" className='h-[20px] w-[20px]' />
                            </div>
                            <div className='flex flex-row items-center text-[13px]'>support@aztreatments.com</div>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <div className='flex flex-row items-center text-[13px]'>+44 020 7042 1880</div>
                            <div className='self-end'>
                                <img src="/assets/telephone.svg" alt="" className='h-[20px] w-[20px]' />
                            </div>
                        </div>
                    </div>
                    <div className='text-[14px]'>
                        © AZ TREATMENTS 2022
                    </div>
                </div>
            </div>

        </div>
    )
}
