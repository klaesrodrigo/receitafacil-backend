const routes = require('express').Router();
const controller = require('../controllers/HistoricoController')

routes
    .get('/', controller.getHistorico)
    .get('/:id', controller.getHistoricoBy)
    .get('/usuario/:idUsuario', controller.getHistoricoBy)
    .post('/:idReceita', controller.postHistorico)    
    .put('/:id', controller.putHistorico)
    .delete('/:id', controller.deleteHistorico);

module.exports = app => app.use('/historico', routes);