import { useState, useEffect } from 'react';

export default function ({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        let _timeout = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(_timeout);
        };
    }, [onTimeout, timeout]);

    useEffect(() => {
        console.log('SETTING INTERVAL');

        let interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <progress id="question-time" max={timeout} value={remainingTime} />
        </div>
    );
}