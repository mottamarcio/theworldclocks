import { useEffect, useState } from 'react';
import { cities } from '../data/cities';
import moment from 'moment-timezone';

interface CityWithTime {
    name: string;
    country: string;
    timezone: string;
    capital: string;
    flag: string;
    localTime: string;
}

const WorldClockTable = () => {
    const [cityData, setCityData] = useState<CityWithTime[]>([]);

    useEffect(() => {
        const updateTimes = () => {
            const currentGmtTime = moment.utc();
            const updatedCities = cities.map(city => {
                const localTime = currentGmtTime.clone().utcOffset(city.timezone).format('HH:mm');

                return { ...city, localTime };
            });

            setCityData(updatedCities);
        };

        updateTimes(); 
        const timer = setInterval(updateTimes, 1000); 

        return () => clearInterval(timer); 
    }, []);

    return (
        <div className="table-responsive mt-4">
            <table className="table table-striped table-dark text-center">
                <thead className="thead-dark">
                    <tr>
                        <th>Flag</th>
                        <th>Capital</th>
                        <th>Country</th>
                        <th>Timezone</th>
                        <th>Local Time</th>
                    </tr>
                </thead>
                <tbody>
                    {cityData.map((city, index) => (
                        <tr key={index}>
                            <td>{city.flag}</td>
                            <td>{city.capital}</td>
                            <td>{city.country}</td>
                            <td>{city.timezone}</td>
                            <td>{city.localTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WorldClockTable;
