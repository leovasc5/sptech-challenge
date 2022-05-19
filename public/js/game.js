function finishGame(status) {
    finishAudio.play();
    questionScreen.style.display = "none";
    newFinishAlert = document.createElement('span');
    newFinishAlert.setAttribute('class', 'finishAlert');
    if (status == 0) {
        newFinishAlert.setAttribute('style', 'color: #FF2E2E');
        newFinishAlert.textContent = "TEMPO ESGOTADO!";
    } else {
        newFinishAlert.setAttribute('style', 'color: #5CFF5C');
        newFinishAlert.textContent = "QUESTÕES FINALIZADAS!";
    }

    newButtonFinish = document.createElement('button');
    newButtonFinish.setAttribute('class', 'finishButton');
    newButtonFinish.setAttribute('onclick', 'results()');
    newButtonFinish.textContent = "VER RESULTADOS";

    finishScreen.appendChild(newFinishAlert);
    finishScreen.appendChild(newButtonFinish);
}

var timerOn = true;
var time = 600;

function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
}

function timedCount() {
    if (time == -1) {
        timerOn = 0;
        timer.innerHTML = "TEMPO<br>ESGOTADO"
        timeOutAudio.play();
        finishGame(0);
    } else {
        timer.innerHTML = `TEMPO <br>${fmtMSS(time)}`;
        time--;
        setTimeout(timedCount, 1000);
    }
}

function startCount() {
    if (timerOn) {
        timedCount();
    }
}

function shuffleQuestions(array) {
    for (i = (array.length - 1); i > 0; i--) {
        rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
    }

    return array;
}

function shuffleAnswers(resp, options) {
    options.push(resp);
    for (j = (options.length - 1); j > 0; j--) {
        rand = Math.floor(Math.random() * (j + 1));
        [options[j], options[rand]] = [options[rand], options[j]];
    }

    return options;
}

var questions = shuffleQuestions(getQuestions());
var questoesAntigas = [];

var lv1 = lv2 = lv3 = lv4 = lv5 = qtdAcertos = qtdErros = pontos = 0;

function skipQuestion(element) {
    selectPassAudio.play();
    questoesAntigas = document.getElementsByClassName(element.id.toString());
    for (o = 0; o <= (questoesAntigas.length - 1); o++) {
        questoesAntigas[o].style.display = 'none';
    }

    try {
        questions.shift();
        novaQuestao = document.getElementsByClassName(questions[0]['id'].toString());
        for (n = 0; n <= (novaQuestao.length - 1); n++) {
            novaQuestao[n].style.display = "";
        }
    } catch {
        finishGame(1);
    }
}

function reviewQuestion(element) {
    array_disable = document.getElementsByClassName(element.className);
    for (m = 0; m <= (array_disable.length - 1); m++) {
        array_disable[m].disabled = true;
    }
    array_disable[array_disable.length - 1].disabled = false;

    for (l = 0; l <= (questions.length - 1); l++) {
        if (element.id == questions[l]['id']) {
            if (questions[l]['resp'] == element.textContent) {
                correctAudio.play()
                element.style.backgroundColor = "green";

                pontos += questions[l]['level'] * 25;
                qtdAcertos++;

                lv1+=1 ? questions[l]['level'] == 1 : lv1 += 0
                lv2+=1 ? questions[l]['level'] == 2 : lv2 += 0
                lv3+=1 ? questions[l]['level'] == 3 : lv3 += 0
                lv4+=1 ? questions[l]['level'] == 4 : lv4 += 0
                lv5+=1 ? questions[l]['level'] == 5 : lv5 += 0

                points.innerHTML = pontos;
            } else {
                errorAudio.play();
                element.style.backgroundColor = "red";
                qtdErros++;

                btns = document.getElementsByClassName(element.id.toString());
                for (p = 0; p <= (btns.length - 1); p++) {
                    if (questions[l]['resp'] == btns[p].textContent) {
                        btns[p].style.backgroundColor = "green";
                        btns[p].style.opacity = "0.4";
                        btns[p].style.transition = 'all 0.5s ease-in';
                    }
                }
            }
        }
    }
}

function question() {
    for (i = 0; i <= (questions.length - 1); i++) {
        newDesc = document.createElement("span");
        newDesc.textContent = questions[i]['desc'];
        newDesc.setAttribute('class', questions[i]['id']);

        newMateria = document.createElement('p');
        newMateria.setAttribute('class', questions[i]['id']);
        newMateria.textContent = questions[i]['mat'];
        if (i != 0) {
            newDesc.setAttribute('style', 'display: none');
            newMateria.setAttribute('style', 'display: none');
        }
        separator.appendChild(newDesc);
        separator.appendChild(newMateria);

        newTeacherImage = document.createElement('img');
        newTeacherImage.setAttribute('class', questions[i]['id']);
        newTeacherImage.setAttribute('src', questions[i]['teacherImg']);
        
        newTeacherName = document.createElement('span');
        newTeacherName.setAttribute('class', questions[i]['id']);
        newTeacherName.textContent = questions[i]['teacherName'];        

        if(i != 0){
            newTeacherImage.setAttribute('style', 'display: none');
            newTeacherName.setAttribute('style', 'display: none');
        }
        characterBox.appendChild(newTeacherImage);
        characterBox.appendChild(newTeacherName);

        options = shuffleAnswers(questions[i]['resp'], questions[i]['options']);

        for (k = 0; k <= (options.length - 1); k++) {
            newButton = document.createElement("button");
            newButton.textContent = options[k];
            newButton.setAttribute('id', questions[i]['id']);
            newButton.setAttribute('class', questions[i]['id']);
            newButton.setAttribute('onclick', 'reviewQuestion(this)');

            if (i != 0) {
                newButton.setAttribute('style', 'display: none');
            }
            answerButtons.appendChild(newButton);
        }
        newButtonContinue = document.createElement("button");
        newButtonContinue.setAttribute('id', questions[i]['id']);
        newButtonContinue.setAttribute('class', questions[i]['id']);
        newButtonContinue.setAttribute('onclick', 'skipQuestion(this)');
        newButtonContinue.setAttribute('disabled', 'true');
        newButtonContinue.textContent = "CONTINUAR";

        if (i != 0) {
            newButtonContinue.setAttribute('style', 'display: none');
        }
        continueButton.appendChild(newButtonContinue);
    }
}

function start() {
    confirmAudio.play();
    document.querySelector('.head').style.display = 'none';
    try{
        document.querySelector('.janelaNova').style.display = 'none';
    }catch (err){
        document.querySelector('.janela').style.display = 'none';
    }
    timedCount();
    questionScreen.style.display = "block";
    question();
}

// Criado por: LEONARDO VASCONCELOS PAULINO
// GitHub: https://github.com/leovasc5/
// Instagram: https://www.instagram.com/leovasc5