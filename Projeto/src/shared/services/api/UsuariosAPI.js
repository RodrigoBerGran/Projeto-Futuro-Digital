import axios from 'axios';

const axiosInstance = axios.create();

export const UsuariosAPI = {
    async getAll() {
        const response = await axiosInstance.get('/api/usuarios');
        console.log(response)
    }
}