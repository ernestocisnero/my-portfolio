import React from 'react'
import { Card, Navbar } from '../ui-components';

export const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="container d-flex flex-row flex-wrap mt-4">
                <Card />
                <Card />
                <Card />  
            </div>
        </>
    )
}

