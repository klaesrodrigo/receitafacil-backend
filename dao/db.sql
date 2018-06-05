CREATE TABLE usuario(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(70) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    senha VARCHAR(40) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE geladeira (
    id INT NOT NULL AUTO_INCREMENT,
    idUsuario INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (idUsuario) REFERENCES usuario (id) 
);

CREATE TABLE tipo(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL UNIQUE,

    PRIMARY KEY (id)
);

CREATE TABLE ingrediente(
    id INT NOT NULL AUTO_INCREMENT,
    idTipo INT NOT NULL,
    nome VARCHAR(50) NOT NULL UNIQUE,

    PRIMARY KEY (id),
    FOREIGN KEY (idTipo) REFERENCES tipo (id) 
);

CREATE TABLE geladeiraIngrediente (
    idGeladeira INT NOT NULL,
    idIngrediente INT NOT NULL,

    PRIMARY KEY (idGeladeira, idIngrediente),
    FOREIGN KEY (idGeladeira) REFERENCES geladeira (id),
    FOREIGN KEY (idIngrediente) REFERENCES ingrediente (id)
);



CREATE TABLE receita(
    id INT NOT NULL AUTO_INCREMENT,
    idTipo INT NOT NULL,
    nome varchar(50) NOT NULL UNIQUE,
    numeroPessoas INT,
    modoPreparo TEXT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (idTipo) REFERENCES tipo (id) 
);

CREATE TABLE ingredienteReceita (
    idReceita INT NOT NULL,
    idIngrediente INT NOT NULL,

    PRIMARY KEY (idReceita, idIngrediente),
    FOREIGN KEY (idReceita) REFERENCES receita (id),
    FOREIGN KEY (idIngrediente) REFERENCES ingrediente (id)
);

CREATE TABLE historico (
    id INT NOT NULL AUTO_INCREMENT,
    idUsuario INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (idUsuario) REFERENCES usuario (id) 
);

CREATE TABLE historicoReceita (
    idReceita INT NOT NULL,
    idHistorico INT NOT NULL,

    PRIMARY KEY (idReceita, idHistorico),
    FOREIGN KEY (idReceita) REFERENCES receita (id),
    FOREIGN KEY (idHistorico) REFERENCES historico (id)
);