import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api'
});

export const UsuariosAPI = {

  async getAll() {
    const response = await axiosInstance.get('/usuarios');
    return response.data.usuarios;
  },

  async create(usuario) {
    const response = await axiosInstance.post('/usuarios', usuario);
    return response.data.usuario;
  },

  async updateById(usuario) {
    const response = await axiosInstance.put(`/usuarios/${usuario.id}`, usuario);
    return response.data;
  },

  async deleteById(id) {
    await axiosInstance.delete(`/usuarios/${id}`);
    return true;
  }
};
