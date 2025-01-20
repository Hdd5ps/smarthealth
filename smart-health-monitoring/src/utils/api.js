import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

// Function to get data from an endpoint
export const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function to post data to an endpoint
export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Add more functions as needed for other HTTP methods (PUT, DELETE, etc.)