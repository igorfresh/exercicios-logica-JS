function ex25(){

    let numeroconta=parseInt(prompt("Digite o número da sua conta:"));
    let saldo=parseFloat(prompt("Digite o seu saldo:"));
    let debito=parseFloat(prompt("Digite o débito:"));
    let credito=parseFloat(prompt("Digite o crédito:"));
    let saldoatual=(saldo-debito)+credito;
    if (saldoatual>=0){
        window.alert("Saldo positivo")
    } else{
        window.alert("Saldo negativo")
    }

    
} 