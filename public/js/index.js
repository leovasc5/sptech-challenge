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
        newJanelaAh2.setAttribute('class', 'janelaAh2');
        newJanelaAh2.innerHTML = "Melhor Tentativa";

        newJanelaACanvas = document.createElement('Canvas');
        newJanelaACanvas.setAttribute('id', 'graficoLinha');

        newJanelaBNovaTentativa = document.createElement('button');
        newJanelaBNovaTentativa.setAttribute('onclick', 'start()');
        newJanelaBNovaTentativa.setAttribute('class', 'startButton');
        newJanelaBNovaTentativa.textContent = 'Iniciar Nova Tentativa';

        newKpis = document.createElement('div');
        newKpis.setAttribute('class', 'newKpis');

        newKpi1 = document.createElement('div');
        newKpi1.setAttribute('class', 'kpi');
        newKpi1.innerHTML = `<span id='kpiTitle'>Quantidade de Tentativas</span>
        <span id='kpiData'>${sessionStorage.qtdTentativas}</span>`;

        newKpi2 = document.createElement('div');
        newKpi2.setAttribute('class', 'kpi');
        newKpi2.innerHTML = `<span id='kpiTitle'>Quantidade de Tentativas</span>
        <span id='kpiData'>${sessionStorage['pontosTentativa']}</span>`;

        newKpi3 = document.createElement('div');
        newKpi3.setAttribute('class', 'kpi');
        newKpi3.innerHTML = `<span id='kpiTitle'>Posição Global</span>
        <span id='kpiData'>Loading...</span>`;
        
        janela.appendChild(newJanelaA);
        janela.appendChild(newJanelaB);
        
        newJanelaA.appendChild(newJanelaAh2);
        newJanelaA.appendChild(newJanelaAContainer);
        newJanelaB.appendChild(newJanelaBContainer);
        newJanelaBContainer.appendChild(newJanelaBNovaTentativa);
        newJanelaB.appendChild(newKpis);

        newJanelaAContainer.appendChild(newJanelaACanvas);
        newKpis.appendChild(newKpi1);
        newKpis.appendChild(newKpi2);
        newKpis.appendChild(newKpi3);

        const data = {
            labels: ['Muito Fáceis', 'Fáceis', 'Médianas', 'Díficeis', 'Muito Díficeis'],
            datasets: [{
                label: "",
                data: [sessionStorage.level1, sessionStorage.level2, sessionStorage.level3, sessionStorage.level4, sessionStorage.level5],
                fill: false,
                borderColor: '#1F2B45',
                tension: 0.1
            }],
            
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                plugins: {
                    legend: {
                        plugins: false
                    }
                }
            }
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