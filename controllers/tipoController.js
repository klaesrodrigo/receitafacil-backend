var mysql = require('mysql');
var config = require('../config');
var routes = require('express').Router();
var tipoDAO = require('../dao/querys').tipoDAO;

routes.get('/', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        connection.query(tipoDAO.selectAll, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (tipo)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao listar tipo' });
    }
});

routes.get('/:id', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var id = req.params;

        connection.query(tipoDAO.selectById, id, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (tipo)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao listar tipo' });
    }
});

routes.post("/", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        connection.query(tipoDAO.insert, user, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (tipo)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao inserir tipo' });
    }
});

routes.put("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        var id = req.params;

        var data = [user, id]

        connection.query(tipoDAO.update, data, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (tipo)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao fazer update da tipo' });
    }
});

routes.delete("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var id = req.params;

        connection.query(tipoDAO.delete, id, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (tipo)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao remover tipo' });
    }
});

module.exports = app => app.use('/tipo', routes);