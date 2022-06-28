import React, { useEffect, useState } from 'react'

export const Datetime = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setTime(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer);
        }
    });


    return (
        <>
            <div className='date-time'>
                <div>
                    &#128197;{' '}
                    <b>
                        {time.toLocaleString()}

                    </b>{' '}
                    &#9201;
                    {/*also can be showed simple weather data.... */}
                </div>
            </div>
        </>
    )
}

