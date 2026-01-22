import axios from 'axios';

const axiosInstance = axios.create();

export const ClientesAPI = {
    async getAll() {
        const response = await axiosInstance.get('/api/clientes');
        console.log(response)
    }
}