import axios from 'axios';

const customFetch = axios.create({ baseURL: 'http://localhost:5000/api/tasks' });

//variable after that axios.create and inside that url properties
//axios.create that returns a promise
export default customFetch;
