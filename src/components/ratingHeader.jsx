import React from 'react'

const RatingHeader = () => {
    return (
        <div className='hidden tb:flex flex-row items-center justify-between bg-[#3F3F3F42] w-[88%] rounded-b-lg px-3 mr-[50px] z-10 absolute'
            style={{
                marginLeft: "auto",
                marginRight: "auto",
                left: "0",
                right: "0",
                textAlign: "center",
            }}
        >
            <div className='flex flex-row items-center space-x-2'>
                <img src='/assets/googleSvg.svg' />
                <img src='/assets/starsSvg.svg' />
                <span className='text-white text-[16px]'>4.5 rating of 25 reviews </span>
            </div>

            <div className='flex flex-row items-center space-x-4'>
                <span className='text-white text-[16px] hover:cursor-pointer' >support@aztreatments.com</span>
                <img src='/assets/mailSvg.svg' className='hover:cursor-pointer' />
                <span className='text-white text-[16px] hover:cursor-pointer'>+44 020 7042 1880</span>
                <img src='/assets/telephoneSvg.svg' className='hover:cursor-pointer' />
                <img src='/assets/line.png' />
                <img src='/assets/ShoppingSvg.svg' className='hover:cursor-pointer' />
            </div>
        </div >
    )
}

export default RatingHeader