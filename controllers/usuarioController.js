var mysql = require('mysql');
var config = require('../config');
var routes = require('express').Router();

routes.get('/', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        connection.query('select * from usuario', (err, result) => {
            if (err){
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (usuario)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao inserir usuário' });
    }
});


module.exports = app => app.use('/usuario', routes);