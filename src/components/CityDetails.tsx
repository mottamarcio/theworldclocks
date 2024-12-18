import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CityDetails = ({ is24HourFormat, toggleTimeFormat }: { is24HourFormat: boolean; toggleTimeFormat: () => void }) => {
    const location = useLocation();
    const { timezone, country, city } = location.state || {}; // Recebe timezone, country e city via state

    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const calculateTimeWithOffset = (offset: string) => {
        // Converte o offset "+08:00" ou "-03:00" em minutos
        const [hours, minutes] = offset.split(':').map(Number);
        const totalOffsetMinutes = hours * 60 + (hours >= 0 ? minutes : -minutes);
    
        // Obtém o horário UTC atual
        const nowUTC = new Date(Date.now() + new Date().getTimezoneOffset() * 60 * 1000);
    
        // Calcula o horário local com base no offset
        const localTime = new Date(nowUTC.getTime() + totalOffsetMinutes * 60 * 1000);
    
        return {
            time: localTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: !is24HourFormat,
            }),
            date: localTime.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
        };
    };
    

    useEffect(() => {
        if (!timezone) return;

        const updateTime = () => {
            const { time, date } = calculateTimeWithOffset(timezone);
            setTime(time);
            setDate(date);
        };

        // Atualiza imediatamente
        updateTime();
        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer);
    }, [timezone, is24HourFormat]);

    return (
        <>
            <h1 className="text-center text-white my-2" id="location">
                Time in <strong>{city}, {country}</strong> now is:
            </h1>
            <h2
                className="text-center text-white"
                id="clock"
                onClick={toggleTimeFormat}
                title="Click to toggle time format"
                style={{ cursor: 'pointer' }}
            >
                {time}
            </h2>
            <h4 className="text-center text-white" id="date">{date}</h4>
            <h4 className="text-center text-white" id="timezone">{timezone}</h4>
            <br />
        </>
    );
};

export default CityDetails;
