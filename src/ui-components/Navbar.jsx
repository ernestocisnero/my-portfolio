import React from 'react'
import { NavLink } from 'react-router-dom';
import { Datetime } from './Datetime';


import './style.css';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-dark px-3 text-uppercase">
                <div className="container">
                    <NavLink className="nav-item nav-link" to="/">Ernesto Cisnero</NavLink>
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
            </nav>
        </>
    )
}
