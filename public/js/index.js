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

        newJanelaA = document.createElement('div');
        newJanelaA.setAttribute('class', 'newJanelaA');
        
        newJanelaAContainer = document.createElement('div');
        newJanelaAContainer.setAttribute('class', 'newJanelaAContainer');

        newJanelaB = document.createElement('div');
        newJanelaB.setAttribute('class', 'newJanelaB');
        
        newJanelaBContainer = document.createElement('div');
        newJanelaBContainer.setAttribute('class', 'newJanelaBContainer');

        newJanelaACanvas = document.createElement('Canvas');
        newJanelaACanvas.setAttribute('id', 'graficoLinha');

        janela.appendChild(newJanelaA);
        janela.appendChild(newJanelaB);
        
        newJanelaA.appendChild(newJanelaAContainer);
        newJanelaB.appendChild(newJanelaBContainer);

        newJanelaAContainer.appendChild(newJanelaACanvas);

        const data = {
            labels: ['Muito Fáceis', 'Fáceis', 'Médianas', 'Díficeis', 'Muito Díficeis'],
            datasets: [{
              label: 'Sua Melhor Tentativa!',
              data: [ sessionStorage.level1, sessionStorage.level2, sessionStorage.level3, sessionStorage.level4, sessionStorage.level5],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
        };

        const config = {
            type: 'line',
            data: data,
        };

        const grafico = new Chart(
            document.getElementById('graficoLinha'),
            config
        );

    } else {
        console.log("Não há dados sobre o usuário");
resposta.text().then(texto => {
        console.log(texto);
    });
}

}).catch(function (erro) {
    console.log(erro);
});