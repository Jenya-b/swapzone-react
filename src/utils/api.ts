import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
  headers: {
    'x-api-key': process.env.REACT_APP_API_KEY ?? '',
  },
});
