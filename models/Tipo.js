const bookshelf = require("../bookshelf");
const Ingrediente = require("./Geladeira");
const Receita = require("./Receita");

const Tipo = bookshelf.Model.extend({
    tableName: 'tipo',
    ingrediente: function () {
        return this.hasMany(Ingrediente, 'idTipo', 'id');
    },
    receita: function () {
        return this.hasMany(Receita, 'idTipo', 'id')
    }
});

module.exports = Tipo;