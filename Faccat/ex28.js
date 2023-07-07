function ex28() {
    let numero1 = parseInt(prompt("Digite o 1º número:"));
    let numero2 = parseInt(prompt("Digite o 2º número:"));
    let numero3 = parseInt(prompt("Digite o 3º número:"));

    if (numero1 > numero2) {
        if (numero1 > numero3) {
            window.alert("O maior é: " + numero1)
        } else {
            window.alert("O maior é: " + numero3)
        }
    } else if (numero2 > numero3) {
        window.alert("O maior é: " + numero2)
    } else {
        window.alert("O maior é: " + numero3)
    }
}