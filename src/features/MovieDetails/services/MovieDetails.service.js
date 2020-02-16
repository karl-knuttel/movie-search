import axios from 'axios';

class MovieDetailsService {
    key = process.env.REACT_APP_API_KEY;
    endpoint = 'https://api.themoviedb.org/3/movie/';

    getMovieDetails = ({ id }) => {
        const response = axios.get(
            `${this.endpoint}${id}?api_key=${this.key}&language=en-US`
        );

        return response;
    };
}

const movieDetailsService = new MovieDetailsService();

export default movieDetailsService;
