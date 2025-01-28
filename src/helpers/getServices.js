import axios from 'axios';

const getServices = async (setServices, setErrorMessage) => {
    try {
        const response = await axios.get('http://localhost:5000/api/getServices');
        setServices(response.data); // Array of { directory, files }
        console.log('Directories:', response.data);
    } catch (error) {
        console.error('Error fetching directories:', error);
        setErrorMessage('Failed to fetch directories. Please try again.');
    }
};

export default getServices;