import Image from 'next/image';
import React from 'react';


function PageHero({ children, background, mobileBackground }) {

    return (
        <div className='flex flex-col w-full h-full'>
            <div>
                <div className='relative  mb-7 w-full'>
                    <img src={background} layout="fill" className="hidden lg:flex w-full" />

                    <img src={mobileBackground} className='lg:hidden w-full' />
                    <div className='flex flex-col items-center  pt-20 top-0 absolute tb:top-[50px] w-full h-full lg:ml-[70px]'>
                        {children}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PageHero