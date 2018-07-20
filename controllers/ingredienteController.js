var Ingrediente = require('../models/Ingrediente')

module.exports = {
    getIngrediente: (req, res) => {
        try {
            Ingrediente
                .fetchAll({ withRelated: ['tipo'] })
                .then(ingrediente => res.json({ ingrediente }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar ingredientes' });
        }
    },
    getIngredienteBy: (req, res) => {
        try {
            Ingrediente
                .where(req.params)
                .fetchAll({ withRelated: ['tipo'] })
                .then(ingrediente => res.json({ ingrediente }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar ingrediente' });
        }
    },
    postIngrediente: (req, res) => {
        try {
            new Ingrediente(req.body)
                .save()
                .then(saved => res.json({ saved }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao inserir ingrediente' });
        }
    },
    putIngrediente: (req, res) => {
        try {
            Ingrediente
                .where('id', req.params.id)
                .fetch()
                .then(ingrediente => {
                    ingrediente
                        .save(req.body)
                        .then(saved => res.json({ saved }));
                })
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao fazer update da ingrediente' });
        }
    },
    deleteIngrediente: (req, res) => {
        try {
            Ingrediente
                .where('id', req.params.id)
                .destroy()
                .then(destroyed => res.json({ destroyed }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ error: 'Erro: ' + err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao remover ingrediente' });
        }
    }
}