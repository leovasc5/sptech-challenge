desc = [
    "Qual é o atributo que estiliza os elementos?", "Propriedade do Java Script que insere código HTML no elemento.", "O que o evento onClick executa?", "Qual código abaixo é um exemplo de interpolação? Considere a variável primeira_parte = 'Olá'", "Se uma variável não está definida no escopo global, apenas local, o que acontecerá com o script ao tentar usar essa variável numa outra  função?",

    "Converta o número 10 para a base binária", "Foram ensinadas as bases...", "Converta 100001 para a base decimal", "Como se cria uma variável nos códigos do Arduino?", "Calcule em decimal: 101001 + 11110",

    "O que é SQL?", "O que o termo 'SELECT' executa no SQL?", "O que o comando 'SELECT nome FROM Alunos WHERE idade < 18' retornará?", "Para que serve uma chave estrangeira?", "O que o comando 'ALTER TABLE Alunos ADD email VARCHAR(128) NOT NULL' executará?",
    
    "O que é o Git?", "O que o comando 'git status' executa?", "O que o comando 'git config user.name' executa?", "O que o comando 'git add .' executa?", `O que o comando "git commit -m '...mensagem...'" executa?`, 
    
    "O que é o 'escopo' em um projeto de TI?", "O que é o 'backlog' em um projeto de TI?", "O que são as 'premissas' em um projeto de TI?", "O que são as 'restrições' em um projeto de TI?", "O que é SCRUM?"];
    
resp = [
    "style", "innerHTML", "Dispara o código em JavaScript que está dentro dos parênteses", "var frase = `${primeira_parte}, Mundo!`", "Ele não irá capturar o valor da variável e um erro será apresentado", 

    "1010", "Binárias, Octais, Decimais e Hexadecimais", "33", "#define", "71", 

    "Uma linguagem para manipulação de registros de dados", "SELECT executa uma consulta aos registros no banco de dados", "Os nomes de todos os alunos menores que 18 anos", "Para relacionar uma tabela a outra sem a necessidade de repetir a inserção dos dados", "A adição do campo de texto 'email' que não pode ser nulo",

    "É um sistema de controle de versionamento de códigos", "Mostra os arquivos adicionados e não adicionados ao Git", "Mostra o user.name configurado no Git", "Insere todos os arquivos não adicionados ao Git", "Define uma espécie de marco no projeto com a descrição da mensagem", 
    
    "Escopo determina e documenta os objetivos específicos de cada projeto, como suas entregas, tarefas, custos e prazos", "Backlog é a 'lista' de tarefas que devem ser concluídas no projeto", "Premissas determinam e documentam quais são as necessidades imutáveis do projeto", "Restrições determinam e documentam quais são os limites que não comprometam o desempenho e desenvolvimento do projeto", "Uma metodologia de desenvolvimento de projetos"];

options = [
    ["id", "css", "script", "onclick"], ["style", "<p>", "id", "color"], ["Dispara uma código em HTML para interagir com o usuário", "Dispara um alert vazio"], ["var frase = '${primeira_parte}, Mundo!'", "var frase = 'primeira_parte Mundo!'", "var frase = ${`primeira_parte , Mundo!`}", "var frase = 'Olá,' + 'Mundo!'"], ["Nada pois o escopo local criará a variável novamente", "Não acontece nada, escopos não interferem nesses casos", "Não é possível criar variáveis globais"], 

    ["1011", "10", "11", "0110"], ["Binárias, Octais e Hexadecimais", "Binárias e Octais", "Binárias e Decimais", "Binárias, Decimais e Hexadecimais"], ["39", "65", "35", "129"], ["#include", "DHTLUPIN", "SerialPrint"], ["75", "154", "38", "127"], 

    ["Uma linguagem de programação para sistemas operacionais", "Um sistema gerenciador de banco de dados"], ["SELECT executa uma atualização aos registros no banco de dados", "SELECT executa uma inserção no banco de dados"], ["Os dados de todos os alunos menores que 18 anos", "A idade de todos alunos menores que 18 anos"], ["Para clonar duas tabelas para que tenham os mesmos dados", "Para inserir dados duplicados de tabelas diferentes"], ["A adição de um campo de texto 'email' que pode ser nulo", "A adição de emails aleatórios em todos os registros da tabela Alunos"],
    
    ["É um sistema para salvar o código em vários computadores", "É um sistema para criar equipes e programar simultaneamente"], ["Mostra apenas os arquivos não adicionados ao Git", "Mostra apenas os arquivos adicionados ao Git", "Mostra se o repositório está online ou não"], ["Deleta o user.name do git", "Gera um erro pois o comando não existe."], ["Insere o primeiro arquivo não adicionado em ordem alfabética ao Git", "Adiciona o arquivo mais recente não adicionado ao Git"],["Atualiza o repositório remoto e local", "Inicia um novo repositório"], 
    
    ["Escopo determina e documenta quais são as necessidades imutáveis do projeto", "Escopo determina e documenta quais são os limites que não comprometam o desempenho e desenvolvimento do projeto"], ["Backlog é a teoria que define como deve ser organizado um projeto de TI", "Backlog é a 'lista' de bugs e problemas encontrados no projeto"], ["Premissas determinam e documentam os objetivos específicos de cada projeto, como suas entregas, tarefas, custos e prazos", "Premissas determinam e documentam quais são os limites que não comprometam o desempenho e desenvolvimento do projeto"], ["Restrições determinam e documentam os objetivos específicos de cada projeto, como suas entregas, tarefas, custos e prazos", "Restrições determinam e documentam quais são as necessidades imutáveis do projeto"], ["Uma jogada tática do futebol", "Um paradigma de programação"]];
var questions = {};

function getQuestions(){
    fetch("/usuarios/getMaterias", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idCurso: Number(sessionStorage.idCurso),
            semestre: Number(sessionStorage.semestre)
        })
    }).then(function (resposta) {        
        if (resposta.ok) {
            resposta.json().then(json => {
                runNumber = 0;
                casa = 0;
                teacherName = []
                teacherImg = []
                materias = []
                positions = [];

                for(i = 0; i < 25; i++){
                    if((i == 5) || (i == 10) || (i == 15) || (i == 20)){
                        runNumber = 0;
                        casa += 1;
                    }

                    materias.push(json[casa].nomeMateria);
                    teacherImg.push('../../assets/img/'+json[casa].fotoProfessorCurso);
                    teacherName.push(json[casa].nomeProfessorCurso);

                    positions.push(runNumber);
                    runNumber++;
                }

                for(i = 0; i < 25; i++){
                    questions[i] = {};
                    questions[i].id = i+1;
                    questions[i].mat = materias[i];
                    questions[i].teacherImg = teacherImg[i];
                    questions[i].teacherName = teacherName[i];
                    questions[i].desc = desc[i];
                    questions[i].resp = resp[i];
                    questions[i].options = options[i];
                    questions[i].level = positions[i];
                }
            })
        }
    }).catch(function (erro) {
        console.log(erro);
    })

    returnTemp = [];
    for(i = 0; i < questions.length; i++){
        returnTemp.push(questions[i])
    }

    return returnTemp;
    // return [questions[0], questions[5], questions[10], questions[15], questions[20]];
}