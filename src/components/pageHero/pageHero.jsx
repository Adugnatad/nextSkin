import React from 'react'
import Image from 'next/image'
import { IoChevronBack, IoChevronForwardSharp } from 'react-icons/io5';

export const PageHero = () => {
    return (
        <div className='w-full bg-blue-100 relative'>
            <img src='/assets/mobileHomepageBackground.svg' className='w-full' />
            <div className="flex flex-col items-center absolute top-0 my-10 text-white mx-7 space-y-[50px]">
                <div className="text-[50px] font-bold text-center leading-none">
                    ALL YOU NEED TO BE EPIC
                </div>
                <div className="text-center">
                    If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.
                </div>
                <div className="flex flex-col items-center space-y-4 w-full">
                    <button className='w-[80%] bg-[#fff] hover:bg-[#ddd] text-[#9D90D5] font-semibold py-3 rounded-[10px]'>VIEW TREATMENTS</button>
                    <button className='w-[80%] bg-gradient-to-r from-[#E1C75C] to-[#C2A013] hover:from-[#C2A013] hover:to-[#E1C75C] font-semibold py-3 rounded-[10px]'>VIEW PRODUCTS</button>
                </div>

            </div>
            <div className='flex flex-row justify-between w-full absolute bottom-[20px] b-red-100'>
                <button className='bg-white p-2 ml-5 rounded-full'>
                    <IoChevronBack size={20} color="#C6C6C6" />
                </button>
                <div className="div flex flex-row items-center space-x-2">
                    <img src='/assets/currentPage.svg' className='' />
                    <img src='/assets/pageIndicator.svg' className='' />
                    <img src='/assets/pageIndicator.svg' className='' />
                </div>
                <button className='bg-white p-2 mr-5 rounded-full'>
                    <IoChevronForwardSharp size={20} color="#C6C6C6" />
                </button>
            </div>
        </div>
    )
}