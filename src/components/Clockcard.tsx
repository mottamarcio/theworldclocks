import { useEffect, useState } from 'react'

function Clockcard() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
            setDate(now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));  
        }

        updateTime();
        const timer = setInterval(updateTime, 1000); // Update every second

        return () => clearInterval(timer); // Cleanup on unmount        
    }, []);

    return (
        <div className="card text-center my-5" style={{ width: '100%' }}>
            <div className="card-body">
                <h1 className="card-title">{time}</h1>
                <p className="card-title">{date}</p>
                <p className="card-text">Location details will be shown here.</p>
            </div>
        </div>
    )
}

export default Clockcard