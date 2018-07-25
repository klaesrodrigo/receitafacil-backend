var Historico = require('../models/Historico');

module.exports = {
    getHistorico: (req, res) => {
        try {
            Historico
                .fetchAll({ withRelated: ['receita', 'usuario'] })
                .then(historico => res.json({ historico }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar histórico' });
        }
    },
    getHistoricoBy: (req, res) => {
        try {
            Historico
                .where(req.params)
                .fetchAll({ withRelated: ['receita', 'usuario'] })
                .then(historico => res.json({ historico }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar histórico' });
        }
    },
    postHistorico: (req, res) => {
        try {
            const historico = new Historico(req.body)
            historico
                .save()
                .then(saved => {
                    historico
                        .ingrediente()
                        .attach(JSON.parse(req.params.idReceita))
                        .then(relation => res.json({ saved, relation }))
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao inserir histórico' });
        }
    },
    putHistorico: (req, res) => {
        try {
            const idReceita = req.body.idReceita //array of ids
            delete req.body.idReceita;
            const historico = Historico;
            historico
                .where(req.params)
                .fetch()
                .then(historico => {
                    historico
                        .save(req.body)
                        .then(saved => {
                            historico
                                .ingrediente()
                                .attach(JSON.parse(idReceita))
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
            return res.status(400).send({ error: 'Erro ao fazer update do histórico' });
        }
    },
    deleteHistorico: (req, res) => {
        try {
            Historico
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
            return res.status(400).send({ error: 'Erro ao remover histórico' });
        }
    }
}