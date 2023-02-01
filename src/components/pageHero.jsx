import React from 'react';


function PageHero({ children, background, mobileBackground }) {

    return (
        <div className='flex flex-col w-full h-full'>
            <div>
                <div className='relative  mb-7 w-full'>
                    <img src={background} className='hidden md:flex w-full' />
                    <img src={mobileBackground} className='md:hidden w-full' />
                    <div className='flex flex-col items-center  pt-20 top-0 absolute tb:top-[50px] w-full h-full'>
                        {children}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PageHero