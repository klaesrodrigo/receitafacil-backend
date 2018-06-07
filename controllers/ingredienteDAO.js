var mysql = require('mysql');
var config = require('../config');
var routes = require('express').Router();
var ingredienteDAO = require('../dao/querys').ingredienteDAO;

routes.get('/', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        connection.query(ingredienteDAO.selectAll, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (ingrediente)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao listar ingrediente' });
    }
});

routes.get('/:id', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var id = req.params;

        connection.query(ingredienteDAO.selectById, id, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (ingrediente)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao listar ingrediente' });
    }
});

routes.post("/", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        connection.query(ingredienteDAO.insert, user, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (ingrediente)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao inserir ingrediente' });
    }
});

routes.put("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        var id = req.params;

        var data = [user, id]

        connection.query(ingredienteDAO.update, data, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (ingrediente)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao fazer update da ingrediente' });
    }
});

routes.delete("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var id = req.params;

        connection.query(ingredienteDAO.delete, id, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (ingrediente)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao remover ingrediente' });
    }
});

module.exports = app => app.use('/ingrediente', routes);