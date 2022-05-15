var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(ra, senha) {
    return database.executar(`SELECT RA, nomeAluno, email, curso, semestre, qtdTentativas FROM aluno WHERE RA = ${ra} AND senha = '${senha}' LIMIT 1;`);
}

function cadastrar(nome, ra, email, senha, curso, semestre) {
    return database.executar(`INSERT INTO aluno (RA, nomeAluno, email, senha, curso, semestre, qtdTentativas) VALUES (${ra}, '${nome}', '${email}', '${senha}', '${curso}', ${semestre}, 0);`);
}

function historyUser(ra){
    return database.executar(`SELECT * FROM tentativa WHERE fkRA = ${ra} ORDER BY pontosTentativa DESC LIMIT 1;`);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    historyUser
};