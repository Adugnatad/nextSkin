import Image from 'next/image'
import React, { useState } from 'react'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <div className="flex flex-row justify-between items-center bg-[#6C5EA4] w-full px-3 py-4">
                <div className=''>
                    <Image height="30" width="30" src={'/assets/logo.svg'} />
                </div>
                <div className='flex flex-row items-center space-x-5'>
                    <div className='cursor-pointer'>
                        <Image height="30" width="30" src={'/assets/shoppingCart.svg'} />
                        <Image height="30" width="30" src={'/assets/cartCounter.svg'} />
                    </div>
                    <div className="ml-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        <Image height="30" width="30" src={menuOpen ? '/assets/close.svg' : '/assets/menuBar.svg'} />
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center bg-[#7F73B1]">
                <div className=''>
                    <Image height={55} width={55} src={'/assets/googleIcon.svg'} />
                </div>
                <div className='flex flex-row space-x-1 mr-5'>
                    <div>
                        <Image height={27} width={27} src={'/assets/fullStar.svg'} />
                    </div>
                    <div>
                        <Image height={27} width={27} src={'/assets/fullStar.svg'} />
                    </div>
                    <div>
                        <Image height={27} width={27} src={'/assets/fullStar.svg'} />
                    </div>
                    <div>
                        <Image height={27} width={27} src={'/assets/fullStar.svg'} />
                    </div>
                    <div>
                        <Image height={27} width={27} src={'/assets/halfStar.svg'} />
                    </div>
                </div>
                <span className='text-white text-[18px] mb-1'>4.5 rating of 255 reviews</span>
            </div>
        </div>
    )
}
