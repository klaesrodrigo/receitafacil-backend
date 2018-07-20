const bookshelf = require("../bookshelf");
const Usuario = require("./Usuario");
const Ingrediente = require("./Ingrediente");

const Geladeira = bookshelf.Model.extend({
    tableName: 'geladeira',
    usuario: function () {
        return this.belongsTo(Usuario, 'idUsuario', 'id');
    },
    ingrediente: function () {
        return this.belongsToMany(Ingrediente,'geladeiraIngrediente', 'idGeladeira', 'idIngrediente');
    }
});

module.exports = Geladeira;