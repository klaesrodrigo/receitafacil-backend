const routes = require('express').Router();
const controller = require('../controllers/usuarioController')

routes
    .get('/', controller.getUsuario)
    .get('/:id', controller.getUsuarioBy)
    .post('/', controller.postUsuario)    
    .put('/:id', controller.putUsuario)
    .delete('/:id', controller.deleteUsuario);

module.exports = app => app.use('/usuario', routes);