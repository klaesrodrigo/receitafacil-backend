const usuarioDAO = {
    selectAll: "SELECT * FROM usuario",
    selectById: "SELECT * FROM usuario WHERE ?",
    insert: "INSERT INTO usuario SET ? ",
    update: "UPDATE usuario SET ? WHERE ?",
    delete: "DELETE FROM usuario WHERE ?"
}

const geladeiraDAO = {
    selectAll: "SELECT * FROM geladeira",
    selectByIdUsuario: "SELECT * FROM geladeira WHERE ?",
    insert: "INSERT INTO geladeira SET ?",
    update: "UPDATE geladeira SET ? WHERE ?",
    delete: "DELETE FROM geladeira WHERE ?"
}

const ingredienteDAO = {
    selectAll: "SELECT * FROM ingrediente",
    selectById: "SELECT * FROM ingrediente WHERE ?",
    insert: "INSERT INTO ingrediente SET ?",
    update: "UPDATE ingrediente SET ? WHERE ?",
    delete: "DELETE FROM ingrediente WHERE ?"
}

const tipoDAO = {
    selectAll: "SELECT * FROM tipo",
    selectById: "SELECT * FROM tipo WHERE ?",
    insert: "INSERT INTO tipo SET ?",
    update: "UPDATE tipo SET ? WHERE ?",
    delete: "DELETE FROM tipo WHERE ?"
}

module.exports ={
    usuarioDAO,
    geladeiraDAO,
    ingredienteDAO,
    tipoDAO
}