import React from 'react'

import './card-component-styles.css';

export const Card = ( { ImgPath,projectTitle, projectDescription, urlProject, urlRepo } ) => {
    return (
        <>

            <div className="card mt-5 cardComp">
                <img src={ ImgPath } alt="cardImage" className="card-img-top" />
                <div className="card-body">
                    <h5 className='card-title'>{ projectTitle }</h5>
                    <p className="card-text">{ projectDescription }</p>
                    <a href={ urlProject } className='btn btn-info' target='_blank' rel='noreferrer'>Link</a>
                    <a href={ urlRepo } className='btn btn-secondary'  target='_blank' rel='noreferrer'>Repo</a>
                </div>
            </div>
        </>
    )
}

