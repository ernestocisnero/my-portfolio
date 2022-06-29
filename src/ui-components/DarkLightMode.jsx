import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

import './style.css';

export const DarkLightMode = ( {darkModeRender} ) => {



    if (darkModeRender) return <BsSun className='dark-light-mode-icon' />

    return <BsMoon className='dark-light-mode-icon' />
        
}
