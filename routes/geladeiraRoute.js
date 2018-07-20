const routes = require('express').Router();
const controller = require('../controllers/geladeiraController')

routes
    .get('/', controller.getGeladeira)
    .get('/:id', controller.getGeladeiraBy)
    .get('/usuario/:idUsuario', controller.getGeladeiraBy)
    .post('/', controller.postGeladeira)    
    .put('/:id', controller.putGeladeira)
    .delete('/:id', controller.deleteGeladeira);

module.exports = app => app.use('/geladeira', routes);