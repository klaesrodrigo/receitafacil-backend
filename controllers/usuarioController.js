var mysql = require('mysql');
var config = require('../config');
var routes = require('express').Router();
var usuario = require('../dao/querys');

routes.get('/', (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        connection.query(usuario.usuarioDAO.selectAll, (err, result) => {
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

routes.post("/", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        connection.query(usuario.usuarioDAO.insert,user, (err, result) => {
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

routes.put("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var user = req.body;
        var id = req.params;

        var data = [user,id]

        connection.query(usuario.usuarioDAO.update,data, (err, result) => {
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

routes.delete("/:id", (req, res) => {
    try {
        var connection = mysql.createConnection(config.db);
        var id = req.params;

        connection.query(usuario.usuarioDAO.delete,id, (err, result) => {
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