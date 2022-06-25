import React from 'react'
import { Navbar } from '../ui-components'

import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { ImHtmlFive } from "react-icons/im";
import { DiCss3Full } from "react-icons/di";
import { BsGithub } from "react-icons/bs";

import './style.css';

export const About = () => {
    return (
        <>
            <Navbar />

            <div class="container about-container">
                <div class="row">
                    <div class="col-sm">
                        <h1>Hi, my name is Ernesto</h1>
                        <h5>Web Developer and Automation Engineer.</h5>
                    </div>
                    <div class="col-sm">
                        <p>Hello, I’m an automation engineer, and self-taught web developer.
                            But to be fair I like to see myself as a guy that love coding and turn ideas into projects then into solutions.
                            Currently I'm porsuing my most near goal, becoming full time developer in a team that allows me to share my knowledge and skills with them to grow together </p>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-row flex-wrap justify-content-around about-techs">
                <ImHtmlFive className='techs-icons' />
                <DiCss3Full className='techs-icons' />
                <TbBrandJavascript className='techs-icons' />
                <GrReactjs className='techs-icons' />
                <BsGithub className='techs-icons'/>
            </div>
            
        </>
    )
}

