import { useEffect, useState } from 'react'
import fetchLocation from '../api/fetchLocation';

function Clockcard({ is24HourFormat, toggleTimeFormat }:{ is24HourFormat: boolean; toggleTimeFormat: () => void } ) {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('Fetching location...');
    const [timezone, setTimezone] = useState<string>('Fetching timezone...');
    const [gmtOffset, setGmtOffset] = useState<string>('Fetching GMT...');
    
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: !is24HourFormat,
            }));
            setDate(now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }));
        };
        
        updateTime();
        const timer = setInterval(updateTime, 1000);
    
        return () => clearInterval(timer);
    }, [is24HourFormat]);    
    
    useEffect(() => {
        const getLocation = async () => {
            const result = await fetchLocation();
            setLocation(result.address);
            setTimezone(result.timezone);
            setGmtOffset(result.gmtOffset);
        };
        
        getLocation();
    }, []);
    
    // useEffect(() => {
    //     document.title = `TheWorldClocks | ${time || 'Loading...'}`;
    // }, [time]);
    
    
    return (
        <>
            <h1 className="text-center text-white my-2" id="location">Time in <strong>{location}</strong> now is:</h1>
            <h2 className="text-center text-white" id="clock" onClick={toggleTimeFormat} title="Click to toggle time format" style={{ cursor: 'pointer' }}>{time}</h2>
            <h4 className="text-center text-white" id="date">{date}</h4>
            <h4 className="text-center text-white" id="timezone">{`${timezone} (${gmtOffset})`}</h4>
            <br/>
        </>
    )
}

export default Clockcard