import Image from 'next/image'
import React from 'react'
import { Header } from '../src/components/header/header'
import { MobileMenu } from '../src/components/MobileMenu/MobileMenu'
import { PageHero } from '../src/components/pageHero/pageHero'

const homepage = () => {
    return (
        <div className='w-full'>
            <PageHero />
            <MobileMenu />
        </div>
    )
}

export default homepage