const key = 'd1226384781826e04272c94296ae37f1'


function colocarDadosNaTela (dados){
        document.querySelector(".cidade").innerHTML= "Tempo em "+ dados.name;
        document.querySelector(".temp").innerHTML = dados.main.temp;
        document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
        document.querySelector(".umidade").innerHTML = dados.main.humidity;

}

async function buscarCidade(cidade){
        const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then (resposta =>resposta.json())
        colocarDadosNaTela(dados)
}

function clicarNoBotao(){ 
    const cidade = document.querySelector(".input-cidade") .value;
    
    buscarCidade(cidade);
}

