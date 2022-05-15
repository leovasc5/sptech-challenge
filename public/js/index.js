function getHistory(){
    fetch("/usuarios/history", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ra: sessionStorage.ra
        })
    }).then(function (resposta) {        
        if (resposta.ok) {
        
            resposta.json().then(json => {
                sessionStorage.idTentativa = json[0].idTentativa;
                sessionStorage.pontosTentativa = json[0].pontosTentativa;
                sessionStorage.nmrTentativa = json[0].nmrTentativa;
                sessionStorage.qtdAcertos = json[0].qtdAcertos;
                sessionStorage.qtdErros = json[0].qtdErros;
                sessionStorage.level1 = json[0].level1;
                sessionStorage.level2 = json[0].level2;
                sessionStorage.level3 = json[0].level3;
                sessionStorage.level4 = json[0].level4;
                sessionStorage.level5 = json[0].level5;
            });
        } else {
            console.log("Não há dados sobre o usuário");

            resposta.text().then(texto => {
                console.log(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    });
    return false;
}

getHistory();
// keys.forEach((key, index) => {
//     newImg = document.createElement("img");
//     newImg.src = `${characters[key]['url_photo']}`;

//     newBreak1 = document.createElement("br");

//     newNome = document.createElement("span");
//     newNome.className = "spanNome";
//     newNome.textContent = `${characters[key]['nome']}`;

//     newBreak2 = document.createElement("br");

//     newDesc = document.createElement("span");
//     newDesc.className = "spanDesc";
//     newDesc.textContent = `${characters[key]['desc']}`;

//     newBreak3 = document.createElement("br");
//     newBreak4 = document.createElement("br");

//     newHabTitle = document.createElement("span");
//     newHabTitle.className = "spanHabTitle";
//     newHabTitle.textContent = `Habilidades`;

//     newUL = document.createElement("ul");
//     newUL.className = "ulHab";
//     for(i=0; i<=(characters[key]['hab'].length-1); i++) {
//         li = document.createElement('li');
//         li.innerHTML = characters[key]['hab'][i];
//         newUL.appendChild(li);
//     }

//     divs[key].appendChild(newImg);
//     divs[key].appendChild(newBreak1);
//     divs[key].appendChild(newNome);
//     divs[key].appendChild(newBreak2);
//     divs[key].appendChild(newDesc);
//     divs[key].appendChild(newBreak3);
//     divs[key].appendChild(newBreak4);
//     divs[key].appendChild(newHabTitle);
//     divs[key].appendChild(newUL);
// });