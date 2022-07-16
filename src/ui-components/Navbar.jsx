import { NavLink } from "react-router-dom";

import "./style.css";

export const Navbar = () => {

    return (
        <>
            <nav className="navbar row d-flex flex-nowrap justify-content-between navbar-expand-lg navbar-dark bg-dark px-3 text-uppercase">

                    <div className="col-6">
                        <div className="container mb-2">
                            <NavLink className="nav-item nav-link" to="/">
                                <b>Ernesto Cisnero</b>
                            </NavLink>
                        </div>

                    </div>

                    <div className="col-6 mx-5">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarToggler"
                            aria-controls="navbarToggler"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarToggler">
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

                    </div>
                
            </nav>
        </>
    );
};
