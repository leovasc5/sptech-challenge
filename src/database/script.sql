-- Para teste local no MySQL Workbench
CREATE USER 'sptech_client'@'localhost' IDENTIFIED BY 'sptech';
GRANT SELECT, UPDATE, INSERT, DELETE, EXECUTE, SHOW VIEW ON SPTechChallenge.* TO 'sptech_client'@'localhost';

CREATE DATABASE SPTechChallenge;
USE SPTechChallenge;

CREATE TABLE curso (
    idCurso INT PRIMARY KEY AUTO_INCREMENT,
    nomeCurso VARCHAR(64) NOT NULL,
    nomeProfessorCurso VARCHAR(64) NOT NULL,
    fotoProfessorCurso VARCHAR(64) NOT NULL
);

CREATE TABLE materia(
    idMateria INT PRIMARY KEY AUTO_INCREMENT,
    nomeMateria VARCHAR(64) NOT NULL,
    semestreMateria INT NOT NULL,

    fkCurso INT NOT NULL,
    FOREIGN KEY (fkCurso) REFERENCES curso (idCurso)
);

CREATE TABLE aluno (
    RA INT PRIMARY KEY,
    nomeAluno VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL UNIQUE,
    senha VARCHAR(256) NOT NULL,
    semestre INT NOT NULL,

    fkCurso INT NOT NULL,
    FOREIGN KEY (fkCurso) REFERENCES curso (idCurso)
);

CREATE TABLE tentativa (
    idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    pontosTentativa INT NOT NULL,
    nmrTentativa INT NOT NULL,
    qtdAcertos INT NOT NULL,
    qtdErros INT NOT NULL,
    lvl1 INT NOT NULL,
    lvl2 INT NOT NULL,
    lvl3 INT NOT NULL,
    lvl4 INT NOT NULL,
    lvl5 INT NOT NULL,
    dhRegistro DATETIME NOT NULL,

    fkRA INT,
    FOREIGN KEY (fkRA) REFERENCES aluno (RA)
);

CREATE TABLE tentativaXmateria(
    fkTentativa INT NOT NULL,
    FOREIGN KEY (fkTentativa) REFERENCES tentativa (idTentativa),
    
    fkMateria INT NOT NULL,
    FOREIGN KEY (fkMateria) REFERENCES materia (idMateria),

    PRIMARY KEY(fkTentativa, fkMateria),

    pontos INT NOT NULL
);

INSERT INTO aluno VALUES
(2221009,'Gabriel Yuzoo', 'gabriel.yuzoo@sptech.school',    123456, 'Ciência da Computação', 1, 0),
(2221025,'Vinicius da Silva Cardoso', 'vinicius.cardoso@sptech.school', 123456, 'Ciência da Computação', 1, 0),
(2221051,'Leonardo Vasconcelos Paulino', 'leonardo.paulino@sptech.school', 123456, 'Ciência da Computação', 1, 4),
(2221065,'Vitor Gonçalves', 'vitor.gonçalves@sptech.school',  123456, 'Ciência da Computação', 1, 0);

INSERT INTO tentativa VALUES
(1, 1500, 1, 24, 1, 5, 5, 5, 5, 4, 2221051),
(2, 1340, 2, 22, 3, 4, 5, 5, 3, 5, 2221051),
(4, 7150, NULL, 4, 1, 3, 1, 0, 0, 0, 2221025),
(5, 8580, NULL, 5, 0, 4, 1, 0, 0, 0, 2221065),
(6, 8445, NULL, 5, 0, 4, 1, 0, 0, 0, 2221009),
(8, 1473, 3, 1, 4, 1, 0, 0, 0, 0, 2221051),
(9, 8835, 4, 5, 0, 4, 1, 0, 0, 0, 2221051);

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