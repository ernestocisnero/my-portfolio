import React from 'react'
import { Card, Navbar } from '../ui-components';

export const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="container d-flex flex-row flex-wrap mt-4">
                <Card path={"/assets/images/weatherApp.png"}/>
                <Card path={"/assets/images/coding-screen.jpg"}/>
                <Card path={"/assets/images/coding-screen.jpg"}/>
                <Card path={"/assets/images/coding-screen.jpg"}/> 
            </div>
        </>
    )
}

