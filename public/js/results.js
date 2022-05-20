function results(){
    finishScreen.style.display = "none";
    document.querySelector('.head').style.display = 'block';

    newResultA = document.createElement('div');
    newResultA.setAttribute('class', 'newResultA');

    newResultB = document.createElement('div');
    newResultB.setAttribute('class', 'newResultB');

    newResultBContainer = document.createElement('div');
    newResultBContainer.setAttribute('class', 'newResultBContainer');

    newResultado = document.createElement('div');
    newResultado.setAttribute('class', 'newResultado');
    newResultado.innerHTML = `Pontos: ${pontos}`;
        
    newResultadoCanvas = document.createElement('Canvas');
    newResultadoCanvas.setAttribute('id', 'graficoResultado');
    newResultadoCanvas.setAttribute('style', 'height: 300px; width: 570px; padding: 24px');
        
    newResultadoNovaTentativa = document.createElement('button');
    newResultadoNovaTentativa.setAttribute('onclick', 'start()');
    newResultadoNovaTentativa.setAttribute('class', 'startButton');
    newResultadoNovaTentativa.textContent = 'Iniciar Nova Tentativa';

    newResultadoTelaInicial = document.createElement('button');
    newResultadoTelaInicial.setAttribute('onclick', 'location.reload()');
    newResultadoTelaInicial.setAttribute('class', 'startButton');
    newResultadoTelaInicial.textContent = 'Tela Inicial';
        
    newResultadoNewKpis = document.createElement('div');
    newResultadoNewKpis.setAttribute('class', 'newKpis');
        
    newResultadoNewKpi1 = document.createElement('div');
    newResultadoNewKpi1.setAttribute('class', 'kpi');
    newResultadoNewKpi1.innerHTML = `<span id='kpiTitle'>Pontos</span>
    <span id='kpiData'>${String(pontos).replace(/\d(?=(?:\d{3})+$)/g, '$&.')}</span>`;
        
    newResultadoNewKpi2 = document.createElement('div');
    newResultadoNewKpi2.setAttribute('class', 'kpi');
    newResultadoNewKpi2.innerHTML = `<span id='kpiTitle'>Tempo Restante</span>
    <span id='kpiData'>${fmtMSS(time)}</span>`;
        
    newResultadoNewKpi3 = document.createElement('div');
    newResultadoNewKpi3.setAttribute('class', 'kpi');
    newResultadoNewKpi3.innerHTML = `<span id='kpiTitle'>Acertos</span>
    <span id='kpiData'>${qtdAcertos}/${qtdAcertos+qtdErros}</span>`;
                
    resultScreen.appendChild(newResultA);
    resultScreen.appendChild(newResultB);
    
    newResultA.appendChild(newResultado);
    newResultA.appendChild(newResultadoCanvas);

    newResultB.appendChild(newResultBContainer);
    newResultBContainer.appendChild(newResultadoNovaTentativa);
    newResultBContainer.appendChild(newResultadoTelaInicial);

    newResultB.appendChild(newResultadoNewKpis);
        
    newResultadoNewKpis.appendChild(newResultadoNewKpi1);
    newResultadoNewKpis.appendChild(newResultadoNewKpi2);
    newResultadoNewKpis.appendChild(newResultadoNewKpi3);

    var data2 = {
        labels: ['Muito Fáceis', 'Fáceis', 'Médianas', 'Díficeis', 'Muito Díficeis'],
        datasets: [
            {
              label: "",
              fill: true,
              color: '#fff',
              backgroundColor: "rgba(142, 196, 206, 0.8)",
              borderColor: "rgba(31, 43, 69,1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "transparent",
              data: [lv1, lv2, lv3, lv4, lv5]
            }
        ]
    };
        
    var config2 = {
        type: 'radar',
        data: data2,
        options: {
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 5
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            maintainAspectRatio: false,
            responsive: false
        }
    };
        
    var grafico2 = new Chart(
        document.getElementById('graficoResultado'),
        config2
    );
}