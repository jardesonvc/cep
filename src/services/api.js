import axios from 'axios';

// htts://viacep.com.br/ws/01310930/json/

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});
export default api;