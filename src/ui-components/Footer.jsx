import React, { useEffect, useState } from 'react'

export const Footer = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setTime(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer);
        }
    });


    return (
        <>
            <footer className='footer'>
                <div>
                    &#128197;
                    {time.toLocaleString()}
                    &#9201;
                    {/*also can be showed simple weather data.... */}
                </div>
            </footer>
        </>
    )
}

