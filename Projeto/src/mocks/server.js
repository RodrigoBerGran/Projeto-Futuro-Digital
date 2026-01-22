import { createServer, Model } from 'miragejs';

export function makeServer() {
    return createServer({
        models: {
            usuario: Model,
            cliente: Model,
        },

        seeds(server) {
            server.create('usuario', {
                nome: 'Usuário Teste',
                dataNascimento: '1995-01-01',
                telefone: '11999999999',
                email: 'usuario@email.com',
                senha: '123456'
            })
        },

        seeds(server) {
            server.create('cliente', {
                nome: 'Cliente Teste',
                telefone: '11988887777',
                email: 'cliente@email.com',
                rua: 'Rua Exemplo',
                numero: '123',
                bairro: 'Centro',
                cidade: 'São Paulo',
                cep: '01000-000',
                consumo: '1500',
                valor: '200.00'
            })
        },

        routes() {
            this.namespace = 'api';
            this.timing = 1000

            this.get('/usuarios', (schema) => {
                return schema.usuarios.all();
            });

            this.post('/usuarios', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                return schema.usuarios.create(attrs);
            });

            this.get('/clientes', (schema) => {
                return schema.clientes.all();
            });

            this.post('/clientes', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                return schema.clientes.create(attrs);
            });
        },
    });
}