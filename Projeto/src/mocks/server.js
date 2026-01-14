import { createServer, Model } from 'miragejs';

export function makeServer() {
    return createServer({
    models: {
        usuario: Model,
        cliente: Model,
    },

    routes() {
        this.namespace = 'api';

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