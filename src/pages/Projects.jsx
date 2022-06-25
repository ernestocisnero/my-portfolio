import React from 'react'
import { Card, Navbar } from '../ui-components';

export const Projects = () => {
    return (
        <>
            <Navbar />

            <h1 className='mt-5'>This is the Projects</h1>
            <hr />
            <div className="container d-flex flex-row flex-wrap">
                <Card />
                <Card />
                <Card />
                
            </div>
        </>
    )
}

