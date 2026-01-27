import { api } from './api';

export const ClientesAPI = {

  async getAll() {
    const response = await api.get('/clientes');
    return response.data.clientes;
  },

  async create(cliente) {
    const response = await api.post('/clientes', cliente);
    return response.data.cliente;
  },

  async updateById(cliente) {
    const response = await api.put(`/clientes/${cliente.id}`, cliente);
    return response.data.cliente;
  },

  async deleteById(id) {
    await api.delete(`/clientes/${id}`);
    return true;
  }
};
