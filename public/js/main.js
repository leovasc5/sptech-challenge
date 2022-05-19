var sizeWindowScreenB = '';
    if(window.location.search.substr(1) == 'contaRegistrada'){
        document.querySelector('.contaRegistrada').style.display = 'block';
    }

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
                    sessionStorage.curso = json.curso;
                    sessionStorage.semestre = json.semestre;
                    sessionStorage.qtdTentativas = json.qtdTentativas;
                
                    window.location = "./game/";
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
        var ra = raInpCad.value
        var email = emailInp.value;
        var senha = senhaInpCad.value;
        var curso = cursoInp.value;
        var semestre = semestreInp.value;

        if (nome == "" || ra == "" || email == "" || senha == "" || curso == "" || semestre == "") {
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

        if(curso == '1'){
            curso = 'Análise e Desenvolvimento de Sistemas';
        }else if(curso == '2'){
            curso = 'Ciência da Computação';
        }else if(curso == '3'){
            curso = 'Sistemas de Informação';
        }else{
            document.querySelector('.erroBox').style.display = 'block';
            msgErro.innerHTML += 'O curso inserido é inválido!';

            sizeWindowScreenB = '756px';
            document.querySelector('.windowScreenB').style.height = sizeWindowScreenB;

            return false;
        }

        if(!((semestre != '1') || (semestre != '2') || (semestre != '3') || (semestre != '4') 
            || (semestre != '5') || (semestre != '6') || (semestre != '7') || (semestre != '8'))){
            document.querySelector('.erroBox').style.display = 'block';
            msgErro.innerHTML += 'O semestre inserido é inválido!';

            sizeWindowScreenB = '756px';
            document.querySelector('.windowScreenB').style.height = sizeWindowScreenB;

            return false;
        }

        if((curso == 'Análise e Desenvolvimento de Sistemas') & (semestre != '1' || '2' || '3' || '4')){
            document.querySelector('.erroBox').style.display = 'block';
            msgErro.innerHTML += 'Semestre inválido para Análise e Desenvolvimento de Sistemas!';

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
                cursoServer: curso,
                semestreServer: semestre
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