import { useState, useEffect } from 'react';

export default function ({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        let timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
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
            <progress 
            id="question-time" 
            max={timeout} 
            value={remainingTime} 
            className={mode}
            />
        </div>
    );
}