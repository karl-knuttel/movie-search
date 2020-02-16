import axios from 'axios';

class PopularMoviesService {
    key = process.env.REACT_APP_API_KEY;
    endpoint = 'https://api.themoviedb.org/3/movie/popular';

    getPopularMovies = ({ page }) => {
        const response = axios.get(
            `${this.endpoint}?api_key=${this.key}&language=en-US&page=${page}`
        );

        return response;
    };
}

const popularMoviesService = new PopularMoviesService();

export default popularMoviesService;
