import React, { useState, useContext } from 'react'
import Homepage from './homepage'
import { Context } from './_app'

const Index = () => {
    const { page } = useContext(Context);
    return (
        <Homepage />

    )
}

export default Index