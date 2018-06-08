const usuarioDAO = {
    selectAll: "SELECT * FROM usuario",
    selectBy: "SELECT * FROM usuario WHERE ?",
    insert: "INSERT INTO usuario SET ? ",
    update: "UPDATE usuario SET ? WHERE ?",
    delete: "DELETE FROM usuario WHERE ?"
}

const geladeiraDAO = {
    selectAll: "SELECT * FROM geladeira",
    selectBy: "SELECT * FROM geladeira WHERE ?",
    insert: "INSERT INTO geladeira SET ?",
    update: "UPDATE geladeira SET ? WHERE ?",
    delete: "DELETE FROM geladeira WHERE ?"
}

const ingredienteDAO = {
    selectAll: "SELECT * FROM ingrediente",
    selectBy: "SELECT * FROM ingrediente WHERE ?",
    insert: "INSERT INTO ingrediente SET ?",
    update: "UPDATE ingrediente SET ? WHERE ?",
    delete: "DELETE FROM ingrediente WHERE ?"
}

const tipoDAO = {
    selectAll: "SELECT * FROM tipo",
    selectBy: "SELECT * FROM tipo WHERE ?",
    insert: "INSERT INTO tipo SET ?",
    update: "UPDATE tipo SET ? WHERE ?",
    delete: "DELETE FROM tipo WHERE ?"
}

const receitaDAO = {
    selectAll: "SELECT * FROM receita",
    selectBy: "SELECT * FROM receita WHERE ?",
    insert: "INSERT INTO receita SET ?",
    update: "UPDATE receita SET ? WHERE ?",
    delete: "DELETE FROM receita WHERE ?"
}

module.exports ={
    usuarioDAO,
    geladeiraDAO,
    ingredienteDAO,
    tipoDAO,
    receitaDAO
}