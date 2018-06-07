const usuarioDAO = {
    selectAll: "SELECT * FROM usuario",
    select: "SELECT * FROM usuario WHERE ?",
    insert: "INSERT INTO usuario SET ? ",
    update: "UPDATE usuario SET ? WHERE ?",
    delete: "DELETE FROM usuario WHERE ?"
}

module.exports ={
    usuarioDAO
}