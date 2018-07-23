const routes = require('express').Router();
const controller = require('../controllers/tipoController')

routes
    .get('/', controller.getTipo)
    .get('/:id', controller.getTipoBy)
    .post('/', controller.postTipo)    
    .put('/:id', controller.putTipo)
    .delete('/:id', controller.deleteTipo);

module.exports = app => app.use('/tipo', routes);