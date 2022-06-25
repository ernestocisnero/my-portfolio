import React from 'react'

import './card-component-styles.css';

export const Card = () => {
    return (
        <>

            <div className="cardComp">
                <img src="/assets/images/coding-screen.jpg" alt="cardImage" className="cardComp-image" />
                <h3 className="cardComp-title">Card Text</h3>
            </div>
        </>
    )
}

