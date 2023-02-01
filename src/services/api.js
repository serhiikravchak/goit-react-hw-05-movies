import axios from "axios";

const API_KEY = '27a76f0869afd59eafccef7d6d986c20';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data
}

export const searchMovie = async query => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
    return response.data;
}

export const getMovieDetails = async id => {
   const response = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response.data;
}

export const getMovieCredits = async id => {
    const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    return response.data;
}

export const getMovieReviews = async id => {
    const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
}

