const Usuario = require('../models/Usuario');
module.exports = {
    getUsuario: (req, res) => {
        Usuario
            .fetchAll()
            .then(usuario => res.json({ usuario }));
    },
    getUsuarioById: (req, res) => {
        Usuario
            .where('id', req.params.id)
            .fetchAll()
            .then(usuario => res.json({ usuario }));
    },
    postUsuario: (req, res) => {
        new Usuario({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        })
            .save().then(saved => res.json({ saved }));
    },
    putUsuario: (req, res) => {
        Usuario
            .where('id', req.params.id)
            .fetch()
            .then(usuario => {
                usuario
                    .save({
                        nome: req.body.nome,
                        email: req.body.email,
                        senha: req.body.senha
                    })
                    .then(saved => res.json({ saved }));
            });
    },
    deleteUsuario: (req, res) => {
        Usuario
            .where('id', req.params.id)
            .destroy()
            .then(destroyed => res.json({ destroyed }))
    }
}