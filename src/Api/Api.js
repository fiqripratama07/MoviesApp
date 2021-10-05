import axios from 'axios';

const config = {
    baseURL: 'https://www.omdbapi.com/'
};

export default axios.create(config);