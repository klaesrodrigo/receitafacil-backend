const bookshelf = require("../bookshelf");

const Usuario = bookshelf.Model.extend({
    tableName: 'usuario',
});

module.exports = Usuario;