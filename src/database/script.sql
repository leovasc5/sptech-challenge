-- Para teste local no MySQL Workbench
CREATE USER 'sptech_client'@'localhost' IDENTIFIED BY 'sptech';
GRANT SELECT, UPDATE, INSERT, DELETE, EXECUTE, SHOW VIEW ON SPTechChallenge.* TO 'sptech_client'@'localhost';

CREATE DATABASE SPTechChallenge;
USE SPTechChallenge;

CREATE TABLE aluno (
    RA INT PRIMARY KEY,
    nomeAluno VARCHAR(255),
    turma VARCHAR(64),
    semestre INT
);

CREATE TABLE tentativa (
    idTentativa INT PRIMARY KEY AUTO_INCREMENT,
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