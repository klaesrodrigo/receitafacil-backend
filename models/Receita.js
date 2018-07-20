const bookshelf = require("../bookshelf");
const Ingrediente = require("./Ingrediente");
const Tipo = require("./Tipo");
const Historico = require("./Historico");

const Receita = bookshelf.Model.extend({
    tableName: 'receita',
    ingrediente: function () {
        return this.belongsToMany(Ingrediente, 'ingredienteReceita', 'idReceita', 'idIngrediente')
    },
    tipo: function () {
        return this.belongsTo(Tipo, 'idTipo', 'id')
    },
    historico: function () {
        return this.belongsToMany(Historico, 'historicoReceita', 'idReceita', 'idHistorico')
    }
});

module.exports = Receita;