import { useState, useEffect } from 'react';

export default function ({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        let _timeout = setTimeout(onTimeout, timeout);
        //clearTimeout(_timeout);
    }, [onTimeout, timeout]);

    useEffect(() => {
        let interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);

        //clearInterval(interval);
    }, []);

    return (
        <div>
            <progress id="question-time" max={timeout} value={remainingTime} />
        </div>
    );
}