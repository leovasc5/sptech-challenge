var database = require("../database/config")

function entrar(ra, senha) {
    return database.executar(`SELECT RA, nomeAluno, email, semestre, fkCurso, qtdTentativas FROM aluno, (SELECT COUNT(pontosTentativa) AS 'qtdTentativas' FROM tentativa WHERE fkRa = '${ra}') AS newDataSet WHERE RA = '${ra}' AND senha = MD5('${senha}') LIMIT 1;`);
}

function cadastrar(nome, ra, email, senha, semestre, idCurso) {
    return database.executar(`INSERT INTO aluno (RA, nomeAluno, email, senha, semestre, fkCurso) VALUES ('${ra}', '${nome}', '${email}', MD5('${senha}'), ${semestre}, '${idCurso}');`);
}

function historyUser(ra){
    return database.executar(`SELECT * FROM tentativa WHERE fkRA = ${ra} ORDER BY pontosTentativa DESC LIMIT 1;`);
}

function getMaterias(idCurso, semestre){
    return database.executar(`SELECT * FROM materia WHERE semestreMateria = ${semestre} AND fkCurso = ${idCurso} ORDER BY nomeMateria ASC;`);
}

function saveTentativa(pontosTentativa, nmrTentativa, qtdAcertos, qtdErros, level1, level2, level3, level4, level5, ra){
    console.log(`INSERT INTO tentativa VALUE (
        NULL, ${pontosTentativa}, ${nmrTentativa}, ${qtdAcertos}, ${qtdErros}, ${level1}, ${level2}, ${level3}, ${level4}, ${level5}, NOW(), ${ra}
    );`)
    return database.executar(`INSERT INTO tentativa VALUE (
        NULL, ${pontosTentativa}, ${nmrTentativa}, ${qtdAcertos}, ${qtdErros}, ${level1}, ${level2}, ${level3}, ${level4}, ${level5}, NOW(), '${ra}');`);
}


function ranking(){
    return database.executar(`
    SELECT * FROM (
        SELECT RANK() OVER(ORDER BY pontosTentativa DESC) AS 'Posição', nomeAluno AS 'Aluno',
        pontosTentativa AS 'Pontos', qtdAcertos AS 'Acertos', (qtdAcertos+qtdErros), RA
        FROM tentativa JOIN aluno ON fkRA = RA ORDER BY pontosTentativa DESC
    ) AS dataset GROUP BY dataset.RA LIMIT 50;`);
}

function rankingPosition(ra){
    return database.executar(`SELECT Posição FROM (SELECT RANK() OVER(ORDER BY pontosTentativa DESC) AS 'Posição', nomeAluno AS 'Aluno', pontosTentativa AS 'Pontos', qtdAcertos AS 'Acertos', (qtdAcertos+qtdErros), fkRA FROM tentativa JOIN aluno ON fkRA = RA GROUP BY nomeAluno LIMIT 50) AS tabela WHERE fkRA = ${ra};`)
}

module.exports = {
    entrar,
    cadastrar,
    historyUser,
    getMaterias,
    saveTentativa,
    ranking,
    rankingPosition
};