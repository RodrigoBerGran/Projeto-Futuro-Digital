import { createServer, Model, Response } from 'miragejs';

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
                const usuario = schema.usuarios.create(attrs);

                return { usuario };
            });


            this.put('/usuarios/:id', (schema, request) => {
                let id = request.params.id;
                let data = JSON.parse(request.requestBody);

                let usuario = schema.usuarios.find(id);

                if (!usuario) {
                    return new Response(404, {}, { error: 'Usuário não encontrado.' });
                }

                usuario.update(data);

                return { usuario };
            });

            this.delete('/usuarios/:id', (schema, request) => {
                let id = request.params.id;
                let usuario = schema.usuarios.find(id);

                if (!usuario) {
                    return new Response(
                        404,
                        {},
                        { error: 'Usuário não encontrado.' }
                    )
                }

                usuario.destroy();

                return new Response(204);
            });

            this.get('/clientes', (schema) => {
                return schema.clientes.all();
            });

            this.post('/clientes', (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                const cliente = schema.clientes.create(attrs);

                return { cliente };
            });

            this.put('/clientes/:id', (schema, request) => {
                const id = request.params.id;
                const data = JSON.parse(request.requestBody);

                const cliente = schema.clientes.find(id);

                if (!cliente) {
                    return new Response(404, {}, { error: 'Cliente não encontrado.' });
                }

                cliente.update(data);

                return { cliente };
            });

            this.delete('/clientes/:id', (schema, request) => {
                let id = request.params.id;
                let cliente = schema.clientes.find(id);

                if (!cliente) {
                    return new Response(
                        404,
                        {},
                        { error: 'Cliente não encontrado.' }
                    )
                }

                cliente.destroy();

                return new Response(204);
            });
        },
    });
}