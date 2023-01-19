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
        </div>
    )
}
