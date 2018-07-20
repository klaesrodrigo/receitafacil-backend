const bookshelf = require("../bookshelf");
const Geladeira = require("./Geladeira");
const Historico = require("./Historico");

const Usuario = bookshelf.Model.extend({
    tableName: 'usuario',
    geladeira: function() {
        return this.hasOne(Geladeira);
    },
    historico: function() {
        return this.hasMany(Historico);
    },
});

module.exports = Usuario;