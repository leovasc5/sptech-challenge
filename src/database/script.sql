-- Para teste local no MySQL Workbench
CREATE USER 'sptech_client'@'localhost' IDENTIFIED BY 'sptech';
GRANT SELECT, UPDATE, INSERT, DELETE, EXECUTE, SHOW VIEW ON SPTechChallenge.* TO 'sptech_client'@'localhost';

CREATE DATABASE SPTechChallenge;
USE SPTechChallenge;

CREATE TABLE aluno (
    RA INT PRIMARY KEY,
    nomeAluno VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL UNIQUE,
    senha VARCHAR(256) NOT NULL,
    turma VARCHAR(64) NOT NULL,
    semestre INT NOT NULL,
    qtdTentativas INT NOT NULL
);

CREATE TABLE tentativa (
    idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    pontosTentativa INT NOT NULL,
    nmrTentativa INT NOT NULL,
    qtdAcertos INT NOT NULL,
    qtdErros INT NOT NULL,
    level1 INT NOT NULL,
    level2 INT NOT NULL,
    level3 INT NOT NULL,
    level4 INT NOT NULL,
    level5 INT NOT NULL,

    fkRA INT,
    FOREIGN KEY (fkRA) REFERENCES aluno (RA)
);


-- Para produção em Microsoft SQL Server na Azure ou AWS
CREATE TABLE aluno (
    RA INT PRIMARY KEY,
    nomeAluno VARCHAR(255),
    turma VARCHAR(64),
    semestre INT
);

CREATE TABLE tentativa (
    idTentativa INT PRIMARY KEY IDENTITY(1,1),
    pontosTentativa VARCHAR(45),
    qtdAcertos INT,
    qtdErros INT,
    level1 INT,
    level2 INT,
    level3 INT,
    level4 INT,
    level5 INT,

    fkRA INT,
    FOREIGN KEY (fkRA) REFERENCES aluno (RA)
);