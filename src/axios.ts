//使い方
// instance.get('/foo-bar')
// https://api.themoviedb.org/3/foo-bar

import axios from 'axios';

export const axiosInstance = axios.create({
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
    'accept': 'application/json',
  },
  baseURL: 'https://api.themoviedb.org/3',
});
