const Usuario = require('../models/Usuario');
module.exports = {
    getUsuario: (req, res) => {
        try {
            Usuario
                .fetchAll()
                .then(usuario => res.json({ usuario }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ error: 'Erro: ' + err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar usuários' });
        }
    },
    getUsuarioById: (req, res) => {
        try {
            Usuario
                .where('id', req.params.id)
                .fetchAll()
                .then(usuario => res.json({ usuario }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ error: 'Erro: ' + err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar usuário' });
        }
    },
    postUsuario: (req, res) => {
        try {
            new Usuario(req.body)
                .save().then(saved => res.json({ saved }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ error: 'Erro: ' + err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao inserir usuário' });
        }
    },
    putUsuario: (req, res) => {
        try {
            Usuario
                .where('id', req.params.id)
                .fetch()
                .then(usuario => {
                    usuario
                        .save(req.body)
                        .then(saved => res.json({ saved }));
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ error: 'Erro: ' + err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao alterar usuário' });
        }
    },
    deleteUsuario: (req, res) => {
        try {
            Usuario
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
            return res.status(400).send({ error: 'Erro ao deletar geladeira' });
        }
    }

}