import axios from 'axios';

interface LocationData {
    address: string;
    timezone: string;
    gmtOffset: string;
}

const fetchLocation = async (): Promise<LocationData> => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        throw new Error('Google Maps API key is not defined.');
    }

    try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, () =>
                reject(new Error('Geolocation not supported or permission denied'))
            );
        });

        const { latitude, longitude } = position.coords;

        // Fetch address
        const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
        const geocodeResponse = await axios.get(geocodeUrl);
        const results = geocodeResponse.data.results;

        const address = results && geocodeResponse.data.plus_code
            ? geocodeResponse.data.plus_code.compound_code.substring(9).trim()
            : 'Unable to determine location';

        // Fetch timezone
        const timestamp = Math.floor(Date.now() / 1000);
        const timezoneUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=${timestamp}&key=${apiKey}`;
        const timezoneResponse = await axios.get(timezoneUrl);

        const { timeZoneName, rawOffset, dstOffset } = timezoneResponse.data;
        const totalOffset = rawOffset + dstOffset; // Total offset in seconds
        const gmtOffset = `GMT${totalOffset >= 0 ? '+' : ''}${totalOffset / 3600}`;

        return { address, timezone: timeZoneName, gmtOffset };
    } catch (error) {
        return {
            address: error.message === 'Geolocation not supported or permission denied'
                ? 'Geolocation not supported or permission denied'
                : 'Failed to fetch location',
            timezone: 'Unknown timezone',
            gmtOffset: 'Unknown GMT',
        };
    }
};

export default fetchLocation;
