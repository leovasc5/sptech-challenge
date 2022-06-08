const materias = ["Arquitetura Computacional", "Algoritmos", "Pesquisa & Inovação", "Tecnologia da Informação", "Banco de Dados"];

const professoresImg = [
    "../assets/img/marise.jfif",
    "../assets/img/frizza.jfif",
    "../assets/img/brandao.jfif",
    "../assets/img/petry.jfif",
    "../assets/img/celia.jfif"
];

const professoresName = ['Marise', 'Freeza', 'Brandão', 'Petry', 'Célia'];

const q1 = {
    id: 1,
    mat: materias[0],
    teacherImg: professoresImg[0],
    teacherName: professoresName[0],
    desc: "Converta o número 10 para a base binária",
    resp: "1010",
    options: ["1011", "10", "11", "0110"],
    level: 1
}

const q2 = {
    id: 2,
    mat: materias[0],
    teacherImg: professoresImg[0],
    teacherName: professoresName[0],
    desc: "Foram ensinadas as bases...",
    resp: "Binárias, Octais, Decimais e Hexadecimais",
    options: ["Binárias, Octais e Hexadecimais", "Binárias e Octais", "Binárias e Decimais", "Binárias, Decimais e Hexadecimais"],
    level: 2
}

const q3 = {
    id: 3,
    mat: materias[0],
    teacherImg: professoresImg[0],
    teacherName: professoresName[0],
    desc: "Converta 100001 para a base decimal",
    resp: "33",
    options: ["39", "65", "35", "129"],
    level: 3
}

const q4 = {
    id: 4,
    mat: materias[0],
    teacherImg: professoresImg[0],
    teacherName: professoresName[0],
    desc: "Como se cria uma variável nos códigos do Arduino?",
    resp: "#define",
    options: ["#include", "DHTLUPIN", "SerialPrint"],
    level: 4
}

const q5 = {
    id: 5,
    mat: materias[0],
    teacherImg: professoresImg[0],
    teacherName: professoresName[0],
    desc: "Calcule em decimal: 101001 + 11110",
    resp: "71",
    options: ["75", "154", "38", "127"],
    level: 5
}

const q6 = {
    id: 6,
    mat: materias[1],
    teacherImg: professoresImg[1],
    teacherName: professoresName[1],
    desc: "Qual é o atributo que estiliza os elementos?",
    resp: "style",
    options: ["id", "css", "script", "onclick"],
    level: 1
}

const q7 = {
    id: 7,
    mat: materias[1],
    teacherImg: professoresImg[1],
    teacherName: professoresName[1],
    desc: "Propriedade do Java Script que insere código HTML no elemento.",
    resp: "innerHTML",
    options: ["style", "<p>", "id", "color"],
    level: 2
}

const q8 = {
    id: 8,
    mat: materias[1],
    teacherImg: professoresImg[1],
    teacherName: professoresName[1],
    desc: "O que o evento onClick executa?",
    resp: "Dispara o código em JavaScript que está dentro dos parênteses",
    options: ["Dispara uma código em HTML para interagir com o usuário", "Dispara um alert vazio"],
    level: 3
}

const q9 = {
    id: 9,
    mat: materias[1],
    teacherImg: professoresImg[1],
    teacherName: professoresName[1],
    desc: "Qual código abaixo é um exemplo de interpolação? Considere a variável primeira_parte = 'Olá'",
    resp: "var frase = `${primeira_parte}, Mundo!`",
    options: ["var frase = '${primeira_parte}, Mundo!'", "var frase = 'primeira_parte Mundo!'", "var frase = ${`primeira_parte , Mundo!`}", "var frase = 'Olá,' + 'Mundo!'"],
    level: 4
}

const q10 = {
    id: 10,
    mat: materias[1],
    teacherImg: professoresImg[1],
    teacherName: professoresName[1],
    desc: "Se uma variável não está definida no escopo global, apenas local, o que acontecerá com o script ao tentar usar essa variável numa outra função?",
    resp: "Ele não irá capturar o valor da variável e um erro será apresentado",
    options: ["Nada pois o escopo local criará a variável novamente", "Não acontece nada, escopos não interferem nesses casos", "Não é possível criar variáveis globais"],
    level: 5
}

const q11 = {
    id: 11,
    mat: materias[2],
    teacherImg: professoresImg[2],
    teacherName: professoresName[2],
    desc: "O que é o Git?",
    resp: "É um sistema de controle de versionamento de códigos",
    options: ["É um sistema para salvar o código em vários computadores", "É um sistema para criar equipes e programar simultaneamente"],
    level: 1
}

const q12 = {
    id: 12,
    mat: materias[2],
    teacherImg: professoresImg[2],
    teacherName: professoresName[2],
    desc: "O que o comando 'git status' executa?",
    resp: "Mostra os arquivos adicionados e não adicionados ao Git",
    options: ["Mostra apenas os arquivos não adicionados ao Git", "Mostra apenas os arquivos adicionados ao Git", "Mostra se o repositório está online ou não"],
    level: 2
}

const q13 = {
    id: 13,
    mat: materias[2],
    teacherImg: professoresImg[2],
    teacherName: professoresName[2],
    desc: "O que o comando 'git config user.name' executa?",
    resp: "Mostra o user.name configurado no git",
    options: ["Deleta o user.name do git", "Gera um erro pois o comando não existe."],
    level: 3
}

const q14 = {
    id: 14,
    mat: materias[2],
    teacherImg: professoresImg[2],
    teacherName: professoresName[2],
    desc: "O que o comando 'git add .' executa?",
    resp: "Insere todos os arquivos não adicionados ao Git",
    options: ["Insere o primeiro arquivo não adicionado em ordem alfabética ao Git", "Adiciona o arquivo mais recente não adicionado ao Git"],
    level: 4
}

const q15 = {
    id: 15,
    mat: materias[2],
    teacherImg: professoresImg[2],
    teacherName: professoresName[2],
    desc: `O que o comando "git commit -m '...mensagem...'" executa?`,
    resp: "Define uma espécie de marco no projeto com a descrição da mensagem",
    options: ["Atualiza o repositório remoto e local", "Inicia um novo repositório"],
    level: 5
}

const q16 = {
    id: 16,
    mat: materias[3],
    teacherImg: professoresImg[3],
    teacherName: professoresName[3],
    desc: "O que é o 'escopo' em um projeto de TI?",
    resp: "Escopo determina e documenta os objetivos específicos de cada projeto, como suas entregas, tarefas, custos e prazos",
    options: ["Escopo determina e documenta quais são as necessidades imutáveis do projeto", "Escopo determina e documenta quais são os limites que não comprometam o desempenho e desenvolvimento do projeto"],
    level: 2
}

const q17 = {
    id: 17,
    mat: materias[3],
    teacherImg: professoresImg[3],
    teacherName: professoresName[3],
    desc: "O que é o 'backlog' em um projeto de TI?",
    resp: "Backlog é a 'lista' de tarefas que devem ser concluídas no projeto",
    options: ["Backlog é a teoria que define como deve ser organizado um projeto de TI", "Backlog é a 'lista' de bugs e problemas encontrados no projeto"],
    level: 2
}

const q18 = {
    id: 18,
    mat: materias[3],
    teacherImg: professoresImg[3],
    teacherName: professoresName[3],
    desc: "O que são as 'premissas' em um projeto de TI?",
    resp: "Premissas determinam e documentam quais são as necessidades imutáveis do projeto",
    options: ["Premissas determinam e documentam os objetivos específicos de cada projeto, como suas entregas, tarefas, custos e prazos", "Premissas determinam e documentam quais são os limites que não comprometam o desempenho e desenvolvimento do projeto"],
    level: 2
}

const q19 = {
    id: 19,
    mat: materias[3],
    teacherImg: professoresImg[3],
    teacherName: professoresName[3],
    desc: "O que são as 'restrições' em um projeto de TI?",
    resp: "Restrições determinam e documentam quais são os limites que não comprometam o desempenho e desenvolvimento do projeto",
    options: ["Restrições determinam e documentam os objetivos específicos de cada projeto, como suas entregas, tarefas, custos e prazos", "Restrições determinam e documentam quais são as necessidades imutáveis do projeto"],
    level: 2
}

const q20 = {
    id: 20,
    mat: materias[3],
    teacherImg: professoresImg[3],
    teacherName: professoresName[3],
    desc: "O que é SCRUM?",
    resp: "Uma metodologia de desenvolvimento de projetos",
    options: ["Uma jogada tática do futebol", "Um paradigma de programação"],
    level: 2
}

const q21 = {
    id: 21,
    mat: materias[4],
    teacherImg: professoresImg[4],
    teacherName: professoresName[4],
    desc: "O que é SQL?",
    resp: "Uma linguagem para manipulação de registros de dados",
    options: ["Uma linguagem de programação para sistemas operacionais", "Um sistema gerenciador de banco de dados"],
    level: 1
}

const q22 = {
    id: 22,
    mat: materias[4],
    teacherImg: professoresImg[4],
    teacherName: professoresName[4],
    desc: "O que o termo 'SELECT' executa no SQL?",
    resp: "SELECT executa uma consulta aos registros no banco de dados",
    options: ["SELECT executa uma atualização aos registros no banco de dados", "SELECT executa uma inserção no banco de dados"],
    level: 2
}

const q23 = {
    id: 23,
    mat: materias[4],
    teacherImg: professoresImg[4],
    teacherName: professoresName[4],
    desc: "O que o comando 'SELECT nome FROM Alunos WHERE idade < 18' retornará?",
    resp: "Os nomes de todos os alunos menores que 18 anos",
    options: ["Os dados de todos os alunos menores que 18 anos", "A idade de todos alunos menores que 18 anos"],
    level: 3
}

const q24 = {
    id: 24,
    mat: materias[4],
    teacherImg: professoresImg[4],
    teacherName: professoresName[4],
    desc: "Para que serve uma chave estrangeira?",
    resp: "Para relacionar uma tabela a outra sem a necessidade de repetir a inserção dos dados",
    options: ["Para clonar duas tabelas para que tenham os mesmos dados", "Para inserir dados duplicados de tabelas diferentes"],
    level: 4
}

const q25 = {
    id: 25,
    mat: materias[4],
    teacherImg: professoresImg[4],
    teacherName: professoresName[4],
    desc: "O que o comando 'ALTER TABLE Alunos ADD email VARCHAR(128) NOT NULL' executará?",
    resp: "A adição do campo de texto 'email' que não pode ser nulo",
    options: ["A adição de um campo de texto 'email' que pode ser nulo", "A adição de emails aleatórios em todos os registros da tabela Alunos"],
    level: 5
}

function getQuestions(){
    return [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25];
    // return [q1, q6, q11, q16, q21];
    // return [q1, q6];

    // return [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25];
    // return [q1, q6, q11, q16, q21];
    // return [q1, q6];
}