import { api } from './api';

export const UsuariosAPI = {

  async getAll() {
    const response = await api.get('/usuarios');
    return response.data.usuarios;
  },

  async create(usuario) {
    const response = await api.post('/usuarios', usuario);
    return response.data.usuario;
  },

  async updateById(usuario) {
    const response = await api.put(`/usuarios/${usuario.id}`, usuario);
    return response.data.usuario;
  },

  async deleteById(id) {
    await api.delete(`/usuarios/${id}`);
    return true;
  }
};
