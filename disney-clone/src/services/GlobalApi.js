import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";

const apiKey =
    import.meta.env.VITE_API_KEY;

const getVideos = (movieId) => {
    return axios.get(
        `${BASE_URL}/movie/${movieId}/videos?api_key=${apiKey}`
    );
};

export default getVideos;