var mysql = require('mysql');
var config = require('../config');
var routes = require('express').Router();
var geladeiraDAO = require('../dao/querys').geladeiraDAO;

routes.get('/', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        connection.query(geladeiraDAO.selectAll, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (geladeira)' });
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

routes.get('/usuario/:id', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var idUsuario = req.params;

        connection.query(geladeiraDAO.selectBy, idUsuario, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (geladeira)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao listar geladeira' });
    }
});

routes.get('/:id', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var id = req.params;

        connection.query(geladeiraDAO.selectBy, id, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (geladeira)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao listar geladeira' });
    }
});

routes.post("/", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        connection.query(geladeiraDAO.insert, user, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (geladeira)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao inserir geladeira' });
    }
});

routes.put("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        var id = req.params;

        var data = [user, id]

        connection.query(geladeiraDAO.update, data, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (geladeira)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao fazer update da geladeira' });
    }
});

routes.delete("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var id = req.params;

        connection.query(geladeiraDAO.delete, id, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (geladeira)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao remover geladeira' });
    }
});

module.exports = app => app.use('/geladeira', routes);