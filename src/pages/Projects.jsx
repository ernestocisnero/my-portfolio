import React from 'react'
import { Card } from '../ui-components';

export const Projects = () => {
    return (
        <>
            <div className="container d-flex flex-row flex-wrap mt-4">
                <Card
                    ImgPath={"/assets/images/weatherApp.png"}
                    projectTitle={"Weather app:"}
                    projectDescription={"Simple weather app that shows you the main weather conditions of any city."}
                    urlProject={"https://clima-te.netlify.app"}
                    urlRepo={"https://github.com/ernestocisnero/climate-app"}
                />

                <Card
                    ImgPath={"/assets/images/electro-shop.png"}
                    projectTitle={"Electro-Shop:"}
                    projectDescription={"Online shop, where you can find hardware products to develop you next automation project."}
                    urlProject={"https://electroshopp.netlify.app/"}
                    urlRepo={"https://github.com/ernestocisnero/electroShop"} 
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

