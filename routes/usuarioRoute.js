const routes = require('express').Router();
const controller = require('../controllers/usuarioController')

routes.route('/').get(controller.getUsuario).post(controller.postUsuario);
routes.route('/:id').get(controller.getUsuarioById).put(controller.putUsuario).delete(controller.deleteUsuario);

module.exports = app => app.use('/usuario', routes);