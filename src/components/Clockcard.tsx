import { useEffect, useState } from 'react'
import fetchLocation from '../api/fetchLocation';

function Clockcard() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('Fetching location...');
    const [timezone, setTimezone] = useState<string>('Fetching timezone...');
    const [gmtOffset, setGmtOffset] = useState<string>('Fetching GMT...');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
            setDate(now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));  
        }

        updateTime();
        const timer = setInterval(updateTime, 1000); // Update every second

        return () => clearInterval(timer); // Cleanup on unmount        
    }, []);

    useEffect(() => {
        const getLocation = async () => {
            const result = await fetchLocation();
            setLocation(result.address);
            setTimezone(result.timezone);
            setGmtOffset(result.gmtOffset);
        };

        getLocation();
    }, []);

    useEffect(() => {
        document.title = `TheWorldClocks | ${time || 'Loading...'}`;
    }, [time]);

    return (
        <div className="card text-center my-5 border-0 min-vh-100">
            <div className="card-body bg-dark">
                <p className="clock text-white">{time}</p>
                <p className="card-title text-white">{date}</p>
                <p className="card-text text-white">{location}</p>
                <p className="card-text text-white">{`${timezone} (${gmtOffset})`}</p>
            </div>
        </div>
    )
}

export default Clockcard