import moment from 'moment-timezone';

interface City {
    name: string;
    country: string;
    timezone: string;
    capital: string;
    flag: string;
}

export const cities: City[] = [
  { name: 'New York', country: 'United States', timezone: moment.tz('America/New_York').format('Z'), capital: 'Washington, D.C.', flag: '🇺🇸' },
  { name: 'London', country: 'United Kingdom', timezone: moment.tz('Europe/London').format('Z'), capital: 'London', flag: '🇬🇧' },
  { name: 'Tokyo', country: 'Japan', timezone: moment.tz('Asia/Tokyo').format('Z'), capital: 'Tokyo', flag: '🇯🇵' },
  { name: 'Sydney', country: 'Australia', timezone: moment.tz('Australia/Sydney').format('Z'), capital: 'Canberra', flag: '🇦🇺' },
  { name: 'São Paulo', country: 'Brazil', timezone: moment.tz('America/Sao_Paulo').format('Z'), capital: 'Brasília', flag: '🇧🇷' },
  { name: 'Paris', country: 'France', timezone: moment.tz('Europe/Paris').format('Z'), capital: 'Paris', flag: '🇫🇷' },
  { name: 'Rome', country: 'Italy', timezone: moment.tz('Europe/Rome').format('Z'), capital: 'Rome', flag: '🇮🇹' },
  { name: 'Berlin', country: 'Germany', timezone: moment.tz('Europe/Berlin').format('Z'), capital: 'Berlin', flag: '🇩🇪' },
  { name: 'Moscow', country: 'Russia', timezone: moment.tz('Europe/Moscow').format('Z'), capital: 'Moscow', flag: '🇷🇺' },
  { name: 'Beijing', country: 'China', timezone: moment.tz('Asia/Shanghai').format('Z'), capital: 'Beijing', flag: '🇨🇳' },
  { name: 'Seoul', country: 'South Korea', timezone: moment.tz('Asia/Seoul').format('Z'), capital: 'Seoul', flag: '🇰🇷' },
  { name: 'Madrid', country: 'Spain', timezone: moment.tz('Europe/Madrid').format('Z'), capital: 'Madrid', flag: '🇪🇸' },
  { name: 'Amsterdam', country: 'Netherlands', timezone: moment.tz('Europe/Amsterdam').format('Z'), capital: 'Amsterdam', flag: '🇳🇱' },
  { name: 'Vienna', country: 'Austria', timezone: moment.tz('Europe/Vienna').format('Z'), capital: 'Vienna', flag: '🇦🇹' },
  { name: 'Bangkok', country: 'Thailand', timezone: moment.tz('Asia/Bangkok').format('Z'), capital: 'Bangkok', flag: '🇹🇭' },
  { name: 'Dubai', country: 'United Arab Emirates', timezone: moment.tz('Asia/Dubai').format('Z'), capital: 'Abu Dhabi', flag: '🇦🇪' }, 
  { name: 'Istanbul', country: 'Turkey', timezone: moment.tz('Europe/Istanbul').format('Z'), capital: 'Ankara', flag: '🇹🇷' },
  { name: 'Singapore', country: 'Singapore', timezone: moment.tz('Asia/Singapore').format('Z'), capital: 'Singapore', flag: '🇸🇬' },
  { name: 'Los Angeles', country: 'United States', timezone: moment.tz('America/Los_Angeles').format('Z'), capital: 'Washington, D.C.', flag: '🇺🇸' },
  { name: 'Toronto', country: 'Canada', timezone: moment.tz('America/Toronto').format('Z'), capital: 'Ottawa', flag: '🇨🇦' },
  { name: 'Mexico City', country: 'Mexico', timezone: moment.tz('America/Mexico_City').format('Z'), capital: 'Mexico City', flag: '🇲🇽' },
  { name: 'Buenos Aires', country: 'Argentina', timezone: moment.tz('America/Argentina/Buenos_Aires').format('Z'), capital: 'Buenos Aires', flag: '🇦🇷' },
  { name: 'New Delhi', country: 'India', timezone: moment.tz('Asia/Kolkata').format('Z'), capital: 'New Delhi', flag: '🇮🇳' }
];