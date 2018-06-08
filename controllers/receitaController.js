var mysql = require('mysql');
var config = require('../config');
var routes = require('express').Router();
var receitaDAO = require('../dao/querys').receitaDAO;

routes.get('/', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        connection.query(receitaDAO.selectAll, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (receita)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao listar usuários' });
    }
});

routes.get('/:id', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var id = req.params;

        connection.query(receitaDAO.selectBy, id, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (receita)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao listar receita' });
    }
});

routes.get('/tipo/:id', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var idTipo = req.params;

        connection.query(receitaDAO.selectBy, idTipo, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (receita)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao listar receita' });
    }
});

routes.post("/", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        connection.query(receitaDAO.insert, user, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (receita)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao inserir receita' });
    }
});

routes.put("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        var id = req.params;

        var data = [user, id]

        connection.query(receitaDAO.update, data, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (receita)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao fazer update da receita' });
    }
});

routes.delete("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var id = req.params;

        connection.query(receitaDAO.delete, id, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (receita)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao remover receita' });
    }
});

module.exports = app => app.use('/receita', routes);