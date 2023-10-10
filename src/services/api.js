import axios from 'axios';


export const api = axios.create({
    baseURL: 'https://api-order-servie.onrender.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});
