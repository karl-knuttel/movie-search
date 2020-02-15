import axios from 'axios';

class SearchService {
    key = process.env.REACT_APP_API_KEY;
    endpoint = 'https://api.themoviedb.org/3/search/movie';

    getAutosuggest = ({ query, page }) => {
        const response = axios.get(
            `${this.endpoint}?api_key=${this.key}&language=en-US&page=${page}&query=${query}&include_adult=false`
        );

        return response;
    };
}

const searchService = new SearchService();

export default searchService;
