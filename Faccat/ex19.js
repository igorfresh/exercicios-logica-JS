function ex19(){
    let valor1 = parseInt(prompt("Digite o 1º número:"));
    let valor2 = parseInt(prompt("Digite o 2º número:"));
    if (valor1>valor2){
        window.alert("O valor maior é o " + valor1)
    } else if(valor2>valor1){
        window.alert("O valor maior é o " + valor2)
    } else{
        window.alert("Os valores são inválidos")
    }
}