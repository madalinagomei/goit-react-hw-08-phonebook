// import axios from 'axios';

// const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// const apiKey = process.env.REACT_APP_API_KEY;

// export const getWeather = async query => {
//   const { data } = await axios.get(baseUrl, {
//     params: {
//       q: query,
//       units: 'metric',
//       appid: apiKey,
//     },
//   });

//   return data;
// };

import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = process.env.REACT_APP_API_KEY;

export const getWeather = async query => {
  try {
    const { data } = await axios.get(baseUrl, {
      params: {
        q: query,
        units: 'metric',
        appid: apiKey,
      },
    });
    return data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('Error request data:', error.request);
    } else {
      // Something went wrong in setting up the request
      console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
    throw error; // Rethrow to be handled by caller
  }
};
