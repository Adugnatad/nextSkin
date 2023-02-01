import React from 'react'
import Footer from './footer'
import Menu from './Menu'
import RatingHeader from './ratingHeader'

const PageContainer = ({ children }) => {
    return (
        <div className='w-full'>
            <RatingHeader />
            <Menu />
            {children}
            <Footer />
        </div >
    )
}

export default PageContainer