import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api'
});

export const ClientesAPI = {

  async getAll() {
    const response = await axiosInstance.get('/clientes');
    return response.data.clientes;
  },

  async create(cliente) {
    const response = await axiosInstance.post('/clientes', cliente);
    return response.data.cliente;
  },

  async updateById(cliente) {
    const response = await axiosInstance.put(`/clientes/${cliente.id}`, cliente);
    return response.data;
  },

  async deleteById(id) {
    await axiosInstance.delete(`/clientes/${id}`);
    return true;
  }
};
