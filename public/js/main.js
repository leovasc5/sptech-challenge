var sizeWindowScreenB = '';

if(window.location.search.substr(1) == 'contaRegistrada'){
    document.querySelector('.contaRegistrada').style.display = 'block';
}

sessionStorage.clear();

raInp.focus();
document.querySelector('#raInp').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        senhaInp.focus();
    }
});

document.querySelector('#senhaInp').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        loginIndex();
    }
});

document.querySelector('.headerLogin').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        raInp.focus();
    }
});

document.querySelector('.headerCadastro').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        nomeInp.focus();
    }
});

function changeCadastro(){
    document.querySelector('.contaRegistrada').style.display = 'none';
    loginForm.style.display = 'none';
    cadastroBox.style.display = 'block';

    hLog = document.querySelector('.headerLogin');
    hLog.style.backgroundColor = '#7e8390';
    hLog.style.color = '#fff';
    hLog.style.cursor = 'pointer';

    hCad = document.querySelector('.headerCadastro');
    hCad.style.backgroundColor = 'aqua';
    hCad.style.color = '#1F2B45';
    hCad.style.cursor = 'default';

    sizeWindowScreenB = '564px';
    document.querySelector('.windowScreenB').style.height = sizeWindowScreenB;
}

var erro = false;
function changeLogin(){
    loginForm.style.display = 'block';
    cadastroBox.style.display = 'none';

    hLog = document.querySelector('.headerLogin');
    hLog.style.backgroundColor = 'aqua';
    hLog.style.color = '#1F2B45';
    hLog.style.cursor = 'default';

    hCad = document.querySelector('.headerCadastro');
    hCad.style.backgroundColor = '#7e8390';
    hCad.style.color = '#fff';
    hCad.style.cursor = 'pointer';

    if(erro){
        document.querySelector('.windowScreenB').style.height = '364px';
    }else{
        document.querySelector('.windowScreenB').style.height = 'auto';
    }
}

function loginIndex(){
    var ra = raInp.value;
    var senha = senhaInp.value;

    if (ra == "" || senha == "") {
        document.querySelector('.erroBoxLogin').style.display = 'block';
        msgErroLogin.innerHTML += 'Todos os campos devem ser preenchidos!';
        sizeWindowScreenB = '364px';
        document.querySelector('.windowScreenB').style.height = sizeWindowScreenB;
        erro = true;

        return false;
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            raServer: ra,
            senhaServer: senha
        })
    }).then(function (resposta) {        
        if (resposta.ok) {
        
            resposta.json().then(json => {
                sessionStorage.clear();
                
                sessionStorage.ra = json.RA;
                sessionStorage.nome = json.nomeAluno;
                sessionStorage.email = json.email;
                sessionStorage.idCurso = json.fkCurso;
                sessionStorage.semestre = json.semestre;
                sessionStorage.qtdTentativas = json.qtdTentativas;
            
                setTimeout(()=>{
                    window.location = "./game/";
                }, 1000)
            });
        
        } else {
            console.log("Houve um erro ao tentar realizar o login!");
        
            resposta.text().then(texto => {
                document.querySelector('.erroBoxLogin').style.display = 'block';
                msgErroLogin.innerHTML += texto;
                sizeWindowScreenB = '364px';
                document.querySelector('.windowScreenB').style.height = sizeWindowScreenB;

                erro = true;
            });
        }
    
    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function cadastrarIndex(){
    msgErro.innerHTML = '';
    var nome = nomeInp.value;
    var ra = raInpCad.value;
    var email = emailInp.value;
    var senha = senhaInpCad.value;
    var semestre = Number(semestreInp.value);
    var idCurso = Number(cursoInp.value);

    if (nome == "" || ra == "" || email == "" || senha == "" || idCurso == "" || semestre == "") {
        document.querySelector('.erroBox').style.display = 'block';
        msgErro.innerHTML += 'Todos os campos devem ser preenchidos!';
        sizeWindowScreenB = '756px';
        document.querySelector('.windowScreenB').style.height = sizeWindowScreenB;

        return false;
    }

    let posicao = email.lastIndexOf('@sptech.school');
    if((email.length-posicao) != 14){
        document.querySelector('.erroBox').style.display = 'block';
        msgErro.innerHTML += 'E-mail inválido!<br><br>';
        sizeWindowScreenB = '756px';
        document.querySelector('.windowScreenB').style.height = sizeWindowScreenB;

        return false;
    }

    if(!((idCurso == 1) || (idCurso == 2) || (idCurso == 3))){
        document.querySelector('.erroBox').style.display = 'block';
        msgErro.innerHTML += 'O curso inserido é inválido!';
        console.log(idCurso)

        sizeWindowScreenB = '756px';
        document.querySelector('.windowScreenB').style.height = sizeWindowScreenB;

        return false;
    }

    if(!((semestre >= 1 || semestre <= 8) || ((idCurso == 1) && (semestre <= 4)))){
        document.querySelector('.erroBox').style.display = 'block';
        msgErro.innerHTML += 'O semestre inserido é inválido!';

        sizeWindowScreenB = '756px';
        document.querySelector('.windowScreenB').style.height = sizeWindowScreenB;

        return false;
    }

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nome,
            raServer: ra,
            emailServer: email,
            senhaServer: senha,
            semestreServer: semestre,
            idCurso: idCurso
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {
            window.location = window.location.href+'?contaRegistrada';
        } else {
            document.querySelector('.erroBox').style.display = 'block';
            msgErro.innerHTML += 'Registro recusado. Verifique novamente os campos!';

            sizeWindowScreenB = '756px';
            document.querySelector('.windowScreenB').style.height = sizeWindowScreenB;

            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    
    return false;
}