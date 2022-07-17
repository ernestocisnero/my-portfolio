
import { SimpleForm } from '../ui-components';
import { BsGithub, BsTwitter } from "react-icons/bs";

import './style.css';



export const Contact = () => {


    return (
        <>
            <div className="container w-50 mt-5">
                <div className="row">
                    <SimpleForm />
                </div>

                <div className="d-flex justify-content-around mt-5">

                    <a href="https://twitter.com/__RNesto" target="_blank" rel='noreferrer'>
                    <BsTwitter className='socials-icons' />

                    </a>

                    <a href="https://github.com/ernestocisnero" target="_blank" rel='noreferrer'>

                    <BsGithub className='socials-icons' />
                    </a>
                </div>
                

            </div>
        </>
    )
}

