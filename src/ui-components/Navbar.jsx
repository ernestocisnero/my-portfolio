import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { DarkLightMode } from './DarkLightMode';
import { Datetime } from './Datetime';


import './style.css';

export const Navbar = () => {

    const [darkModeState, setdarkModeState] = useState(false);

    
    const handleDarkMode = ()=>{
        setdarkModeState(!darkModeState);
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-dark px-3 text-uppercase">
                <div className="container">
                    <NavLink className="nav-item nav-link" to="/"><b>Ernesto Cisnero</b></NavLink>
                </div>

                <Datetime />

                <div className="navbar-collapse ">
                    <div className="navbar-nav ">
                        <NavLink className="nav-item nav-link underline" to="/">
                            About
                        </NavLink>

                        <NavLink className="nav-item nav-link underline" to="/projects">
                            Projects
                        </NavLink>

                        <NavLink className="nav-item nav-link underline" to="/contact">
                            Contact
                        </NavLink>
                    </div>
                </div>

                <div onClick={ handleDarkMode }>
                    <DarkLightMode darkModeRender={ darkModeState }/>
                </div>
            </nav>
        </>
    )
}
