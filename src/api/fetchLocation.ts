import axios from 'axios';

const fetchLocation = async (): Promise<string> => {
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
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        const response = await axios.get(url);
        const location = response.data.results;

        console.log(location);

        if (location && response.data.plus_code) {
            const compoundCode = response.data.plus_code.compound_code;
            // Extract substring ignoring the first 8 characters
            const location = compoundCode.substring(8).trim();
            return location;
        }

        return 'Unable to determine location';
    } catch (error) {
        return error.message === 'Geolocation not supported or permission denied'
            ? 'Geolocation not supported or permission denied'
            : 'Failed to fetch location';
    }
};

export default fetchLocation;
