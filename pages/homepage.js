import Image from 'next/image'
import React from 'react'
import { Header } from '../src/components/header/header'
import { PageHero } from '../src/components/pageHero/pageHero'

const homepage = () => {
    return (
        <div className='w-full'>
            <Header />
            <PageHero />
        </div>
    )
}

export default homepage