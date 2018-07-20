const routes = require('express').Router();
const controller = require('../controllers/ingredienteController')

routes
    .get('/', controller.getIngrediente)
    .get('/:id', controller.getIngredienteBy)
    .get('/tipo/:idTipo', controller.getIngredienteBy)
    .post('/', controller.postIngrediente)    
    .put('/:id', controller.putIngrediente)
    .delete('/:id', controller.deleteIngrediente);

module.exports = app => app.use('/ingrediente', routes);