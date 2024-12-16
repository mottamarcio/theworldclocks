import React, { useEffect, useState } from 'react';
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

const WorldClockTable = ({ is24HourFormat }: { is24HourFormat: boolean }) => {
    const [cityData, setCityData] = useState<CityWithTime[]>([]);
    const [sortConfig, setSortConfig] = useState<{ key: keyof CityWithTime; direction: 'asc' | 'desc' } | null>(null);

    useEffect(() => {
        const updateTimes = () => {
            const currentGmtTime = moment.utc();

            const updatedCities = cities.map(city => {
                const localTime = currentGmtTime
                    .clone()
                    .utcOffset(city.timezone)
                    .format(is24HourFormat ? 'HH:mm (ddd)' : 'hh:mm A (ddd)');
                return { ...city, localTime };
            });

            setCityData(updatedCities);
        };

        updateTimes();
        const timer = setInterval(updateTimes, 1000);

        return () => clearInterval(timer);
    }, [is24HourFormat]);

    const handleSort = (key: keyof CityWithTime) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = React.useMemo(() => {
        if (!sortConfig) return cityData;

        return [...cityData].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return sortConfig.direction === 'asc'
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }

            return 0;
        });
    }, [cityData, sortConfig]);

    const getSortIndicator = (key: keyof CityWithTime) => {
        if (sortConfig?.key === key) {
            return sortConfig.direction === 'asc' ? '↑' : '↓';
        }
        return '';
    };

    return (
        <div className="table-responsive mt-4">
            <table className="table table-striped table-dark text-center">
                <thead className="thead-dark">
                    <tr>
                        <th onClick={() => handleSort('flag')}>
                            Flag {getSortIndicator('flag')}
                        </th>
                        <th onClick={() => handleSort('name')}>
                            Capital {getSortIndicator('name')}
                        </th>
                        <th onClick={() => handleSort('country')}>
                            Country {getSortIndicator('country')}
                        </th>
                        <th onClick={() => handleSort('timezone')}>
                            Timezone {getSortIndicator('timezone')}
                        </th>
                        <th onClick={() => handleSort('localTime')}>
                            Local Time {getSortIndicator('localTime')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((city, index) => (
                        <tr key={index}>
                            <td>{city.flag}</td>
                            <td>{city.name}</td>
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
