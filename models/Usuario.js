const bookshelf = require("../bookshelf");
const Geladeira = require("./Geladeira");

const Usuario = bookshelf.Model.extend({
    tableName: 'usuario',
    geladeira: function() {
        return this.hasOne(Geladeira);
    }
});

module.exports = Usuario;