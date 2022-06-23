import React from 'react'
import { Navbar, Footer } from '../ui-components'

import './style.css';

export const About = () => {
    return (
        <>
            <Navbar />

            <div class="container about-container">
                <div class="row">
                    <div class="col-sm">
                        <h1>Hi, my name is Ernesto</h1>
                        <h4>Web Developer and Automation Engineer.</h4>
                    </div>
                    <div class="col-sm">
                        <p>Hello, I’m an automation engineer, and self-taught web developer.
                            But to be fair I like to see myself as a guy that love coding and turn ideas into projects then into solutions.
                            Currently I'm porsuing my most near goal, becoming full time developer in a team that allows me to share my knowledge and skills with them to grow together </p>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-row justify-content-around about-techs">
                <div class="p-2"><i class="fa-brands fa-html5 fa-5x"></i></div>
                <div class="p-2"><i class="fa-brands fa-css3-alt fa-5x"></i></div>
                <div class="p-2"><i class="fa-brands fa-js fa-5x"></i></div>
                <div class="p-2"><i class="fa-brands fa-react fa-5x"></i></div>
            </div>

            <Footer />
        </>
    )
}

