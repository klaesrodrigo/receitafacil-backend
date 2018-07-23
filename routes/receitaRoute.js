const routes = require('express').Router();
const controller = require('../controllers/receitaController')

routes
    .get('/', controller.getReceita)
    .get('/:id', controller.getReceitaBy)
    .get('/tipo/:idTipo', controller.getReceitaBy)
    .post('/:idIngrediente', controller.postReceita)    
    .put('/:id', controller.putReceita)
    .delete('/:id', controller.deleteReceita);

module.exports = app => app.use('/receita', routes);