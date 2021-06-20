import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const conection = axios.create({
    baseURL: process.env.REACT_APP_API || 'http://localhost:3001'
})

export default conection;


