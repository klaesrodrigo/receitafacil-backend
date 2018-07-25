var Receita = require('../models/Receita');

module.exports = {
    getReceita: (req, res) => {
        try {
            Receita
                .fetchAll({ withRelated: ['ingrediente', 'tipo'] })
                .then(receita => res.json(receita))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar receitas' });
        }
    },
    getReceitaBy: (req, res) => {
        try {
            Receita
                .where(req.params)
                .fetchAll({ withRelated: ['ingrediente'] })
                .then(receita => res.json(receita))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                })
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar receita' });
        }
    },
    postReceita: (req, res) => {
        try {
            const receita = new Receita(req.body)
            receita
                .save()
                .then(saved => {
                    receita
                        .ingrediente()
                        .attach(JSON.parse(req.params.idIngrediente))
                        .then(relation => res.json({ saved, relation }))
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao inserir receita' });
        }
    },
    putReceita: (req, res) => {
        try {
            const idIngrediente = req.body.idIngrediente //array of ids
            delete req.body.idIngrediente;
            const receita = Receita;
            receita
                .where(req.params)
                .fetch()
                .then(receita => {
                    receita
                        .save(req.body)
                        .then(saved => {
                            receita
                                .ingrediente()
                                .attach(JSON.parse(idIngrediente))
                                .then(relation => res.json({ saved, relation }))
                        });
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err })
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao fazer update de receita' });
        }
    },
    deleteReceita: (req, res) => {
        try {
            Receita
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
            return res.status(400).send({ error: 'Erro ao remover receita' });
        }
    }
}
