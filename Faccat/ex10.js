function ex10(){
    let custodefabrica = parseInt(prompt("Digite o valor do custo de fábrica do carro"));
    let custofinal=custodefabrica+(28/100*custodefabrica)+(45/100*custodefabrica);
    window.alert("O custo final é: "+custofinal)
}