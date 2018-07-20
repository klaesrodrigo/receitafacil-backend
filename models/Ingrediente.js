const bookshelf = require("../bookshelf");
const Geladeira = require("./Geladeira");
const Receita = require("./Receita");
const Tipo = require("./Tipo");

const Ingrediente = bookshelf.Model.extend({
    tableName: 'ingrediente',
    geladeira: function () {
        return this.belongsToMany(Geladeira, 'geladeiraIngrediente', 'idIngrediente', 'idGeladeira');
    },
    receita: function () {
        return this.belongsToMany(Receita, 'ingredienteReceita', 'idIngrediente', 'idReceita')
    },
    tipo: function () {
        return this.belongsTo(Tipo, 'idTipo', 'id')
    }
});

module.exports = Ingrediente;