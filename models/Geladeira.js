const bookshelf = require("../bookshelf");
const Usuario = require("./Usuario");

const Geladeira = bookshelf.Model.extend({
    tableName: 'geladeira',
    usuario: function () {
        return this.belongsTo(Usuario, 'idUsuario', 'id');
    }
});

module.exports = Geladeira;