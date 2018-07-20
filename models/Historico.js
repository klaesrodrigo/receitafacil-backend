const bookshelf = require("../bookshelf");
const Receita = require("./Receita");
const Usuario = require("./Usuario");

const Historico = bookshelf.Model.extend({
    tableName: 'receita',
    usuario: function () {
        return this.BelongsTo(Usuario, 'idUsuario', 'id')
    },
    historico: function () {
        return this.belongsToMany(Receita, 'historicoReceita', 'idHistorico', 'idReceita')
    }
});

module.exports = Historico;