import React from 'react'

import './card-component-styles.css';

export const Card = ( { path } ) => {
    return (
        <>

            <div className="card mt-5 cardComp">
                <img src={ path } alt="cardImage" className="card-img-top" />
                <div className="card-body">
                    <h5 className='card-title'>Card Title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='https://google.com' className='btn btn-info' target='_blank' rel='noreferrer'>Link</a>
                    <a href='https://google.com' className='btn btn-secondary'  target='_blank' rel='noreferrer'>Repo</a>
                </div>
            </div>
        </>
    )
}

