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
            fieldNames = Object.keys(json[0]);
        
            for(let i = 0; i <= Object.keys(json[0]).length-1; i++){
                sessionStorage[fieldNames[i]] = json[0][fieldNames[i]];
            }
        });

        newJanelaA = document.createElement('div');
        newJanelaA.setAttribute('class', 'newJanelaA');
        
        newJanelaAContainer = document.createElement('div');
        newJanelaAContainer.setAttribute('class', 'newJanelaAContainer');

        newJanelaB = document.createElement('div');
        newJanelaB.setAttribute('class', 'newJanelaB');
        
        newJanelaBContainer = document.createElement('div');
        newJanelaBContainer.setAttribute('class', 'newJanelaBContainer');

        newJanelaAh2 = document.createElement('div');
        newJanelaAh2.innerHTML = "Melhor Tentativa";

        newJanelaACanvas = document.createElement('Canvas');
        newJanelaACanvas.setAttribute('id', 'graficoLinha');

        newJanelaBNovaTentativa = document.createElement('button');
        newJanelaBNovaTentativa.setAttribute('onclick', 'start()');
        newJanelaBNovaTentativa.setAttribute('class', 'startButton');
        newJanelaBNovaTentativa.textContent = 'Iniciar Nova Tentativa';

        newKpis = document.createElement('div');
        newKpis.setAttribute('class', 'newKpis');

        janela.appendChild(newJanelaA);
        janela.appendChild(newJanelaB);
        
        newJanelaA.appendChild(newJanelaAh2);
        newJanelaA.appendChild(newJanelaAContainer);
        newJanelaB.appendChild(newJanelaBContainer);
        newJanelaBContainer.appendChild(newJanelaBNovaTentativa);
        newJanelaB.appendChild(newKpis);

        newJanelaAContainer.appendChild(newJanelaACanvas);

        const data = {
            labels: ['Muito Fáceis', 'Fáceis', 'Médianas', 'Díficeis', 'Muito Díficeis'],
            datasets: [{
              label: 'Sua Melhor Tentativa',
              data: [sessionStorage.level1, sessionStorage.level2, sessionStorage.level3, sessionStorage.level4, sessionStorage.level5],
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