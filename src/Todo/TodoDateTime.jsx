import {useEffect, useState} from "react";

export const TodoDateTime = () => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            setDateTime(`${date.toLocaleDateString('en-US')} - ${date.toLocaleTimeString('en-US')}`);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <>
            <div className="date-time">
                <span>{dateTime}</span>
            </div>
        </>
    )
}
