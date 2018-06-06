const usuarioDAO = {
    selectAll: "SELECT * FROM usuario",
    select: "SELECT * FROM usuario WHERE id = ?",
    insert: "INSERT INTO usuario SET ? WHERE id = ",
    update: "UPDATE usuario SET ? WHERE ?"
}

module.exports ={
    usuarioDAO
}