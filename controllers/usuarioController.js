var mysql = require('mysql');
var config = require('./../config');
var routes = require('express').Router();
var usuarioDAO = require('../dao/querys').usuarioDAO;

routes.get('/', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        connection.query(usuarioDAO.selectAll, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (usuario)' });
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

        connection.query(usuarioDAO.selectById, id, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (usuario)' });
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

routes.post("/", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        connection.query(usuarioDAO.insert, user, (err, result) => {
            if (err) {
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

routes.put("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        var id = req.params;

        var data = [user, id]

        connection.query(usuarioDAO.update, data, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (usuario)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao fazer update do usuário' });
    }
});

routes.delete("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var id = req.params;

        connection.query(usuarioDAO.delete, id, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao conectar com o banco (usuario)' });
            }
            return res.send(result);
        });
        connection.end();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao remover usuário' });
    }
});

module.exports = app => app.use('/usuario', routes);