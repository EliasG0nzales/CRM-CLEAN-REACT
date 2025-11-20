import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.tu-crm.com',
  timeout: 5000,
});

export default apiClient;
