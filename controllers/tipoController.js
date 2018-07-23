var Tipo = require('../models/Tipo');

module.exports = {
    getTipo: (req, res) => {
        try {
            Tipo
                .fetchAll()
                .then(tipo => res.json(tipo))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar tipo' });
        }
    },
    getTipoBy: (req, res) => {
        try {
            Tipo
                .where(req.params)
                .fetchAll()
                .then(tipo => res.json(tipo))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar tipo' });
        }
    },
    postTipo: (req, res) => {
        try {
            new Tipo(req.body)
                .save()
                .then(saved => res.json(saved))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao inserir tipo' });
        }
    },
    putTipo: (req, res) => {
        try {
            Tipo
                .where(req.params)
                .fetch()
                .then(tipo => {
                    tipo
                        .save(req.body)
                        .then(saved => res.json({ saved }));
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err })
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao fazer update da tipo' });
        }
    },
    deleteTipo: (req, res) => {
        try {
            Tipo
                .where(req.params)
                .destroy()
                .then(destroyed => res.json({ destroyed }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao remover tipo' });
        }
    }
}