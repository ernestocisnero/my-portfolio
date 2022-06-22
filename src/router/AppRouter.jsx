import React from 'react'
import { Routes, Route } from "react-router-dom";
import { About, Contact, Projects } from '../pages';


export const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </>
    )
}

