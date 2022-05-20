function getRanking(){
    fetch("/usuarios/ranking", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {        
        if (resposta.ok) {
            resposta.json().then(json => {
                if (!(JSON.stringify(json)=='[]')){
                    fieldNames = Object.keys(json[0]);
                    for(let k = 0; k < fieldNames.length; k++){
                        thRank = document.createElement('th');
                        thRank.textContent = fieldNames[k];
                        trInsert.appendChild(thRank);
                    }

                    for(let j = 0; j < json.length; j++){
                        newTr = document.createElement('tr');
                        newTd = [];
                        for(let i = 0; i < Object.keys(json[j]).length; i++){
                            newTd[i] = document.createElement('td');
                            newTd[i].textContent = json[j][fieldNames[i]];
                            newTr.appendChild(newTd[i]);
                        }

                        rankingTable.appendChild(newTr);
                    }
               }else{
                //    renderizarWindowNovo();
                // Mensagem de Erro
               }
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

getRanking();