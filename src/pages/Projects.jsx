import React from 'react'
import { Card, Navbar } from '../ui-components';

export const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="container d-flex flex-row flex-wrap mt-4">
                <Card
                    ImgPath={"/assets/images/weatherApp.png"}
                    projectTitle={"Weather app:"}
                    projectDescription={"Simple weather app that shows you the main forecast conditions of any city."}
                    urlProject={"https://thesimplestweatherapp.netlify.app"}
                    urlRepo={"https://github.com/ernestocisnero/weatherpage_v1"}
                />

                <Card
                    ImgPath={"/assets/images/coding-screen.jpg"}
                    projectTitle={"Example:"}
                    projectDescription={"Example text..."}
                    urlProject={"https://google.com"}
                    urlRepo={"https://google.com"} 
                    />
                <Card
                    ImgPath={"/assets/images/coding-screen.jpg"}
                    projectTitle={"Example:"}
                    projectDescription={"Example text..."}
                    urlProject={"https://google.com"}
                    urlRepo={"https://google.com"} 
                    />
                <Card
                    ImgPath={"/assets/images/coding-screen.jpg"}
                    projectTitle={"Example:"}
                    projectDescription={"Example text..."}
                    urlProject={"https://google.com"}
                    urlRepo={"https://google.com"} 
                    />
                <Card
                    ImgPath={"/assets/images/coding-screen.jpg"}
                    projectTitle={"Example:"}
                    projectDescription={"Example text..."}
                    urlProject={"https://google.com"}
                    urlRepo={"https://google.com"} 
                    />
            </div>
        </>
    )
}

