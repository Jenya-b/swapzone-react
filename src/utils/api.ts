export default {
  method: 'get',
  url: process.env.REACT_APP_API_URL ?? '',
  headers: {
    'x-api-key': process.env.REACT_APP_API_KEY ?? '',
  },
};
