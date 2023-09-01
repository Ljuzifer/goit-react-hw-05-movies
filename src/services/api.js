import axios from 'axios';

const API_KEY = 'daca860db741facb25da0efbe03487a5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMovieInfo = async (route, some) => {
  const response = await axios.get(`${route}?api_key=${API_KEY}${some ?? ''}`);
  return response.data;
};
