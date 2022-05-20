var database = require("../database/config")

function entrar(ra, senha) {
    return database.executar(`SELECT RA, nomeAluno, email, curso, semestre, qtdTentativas FROM aluno WHERE RA = ${ra} AND senha = '${senha}' LIMIT 1;`);
}

function cadastrar(nome, ra, email, senha, curso, semestre) {
    return database.executar(`INSERT INTO aluno (RA, nomeAluno, email, senha, curso, semestre, qtdTentativas) VALUES (${ra}, '${nome}', '${email}', '${senha}', '${curso}', ${semestre}, 0);`);
}

function historyUser(ra){
    return database.executar(`SELECT * FROM tentativa WHERE fkRA = ${ra} ORDER BY pontosTentativa DESC LIMIT 1;`);
}

function saveTentativaModel(pontosTentativa, nmrTentativa, qtdAcertos, qtdErros, level1, level2, level3, level4, level5, ra){
    return database.executar(`INSERT INTO tentativa VALUE (
        NULL, ${pontosTentativa}, ${nmrTentativa}, ${qtdAcertos}, ${qtdErros}, ${level1}, ${level2}, ${level3}, ${level4}, ${level5}, ${ra}
    );`);
}

module.exports = {
    entrar,
    cadastrar,
    historyUser,
    saveTentativaModel
};