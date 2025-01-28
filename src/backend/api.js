import axios from 'axios';

// const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const apiUrl = process.env.REACT_APP_API_URL;

// Function to fetch data from the backend API
export const fetchHelloMessage = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/hello`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
