import swagger from 'swagger-ui-express';

import HomeController from '../controllers/home';
import UsuarioController from '../controllers/usuarios';
import swaggerDocument from './swagger.json';

export default class ConfigConfig {
    static config(app) {
        app.use('/', HomeController.config())
        app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument))
        app.use('/usuarios', UsuarioController.config())
    }
}