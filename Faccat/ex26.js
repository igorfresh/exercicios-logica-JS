function ex26() {
    let quantidadeatualestoque = parseFloat(prompt("Digite a quantidade atual em estoque:"));
    let quantidademaximaestoque = parseFloat(prompt("Digite a quantidade maxima em estoque:"));
    let quantidademinimaestoque = parseFloat(prompt("Digite a quantidade minima em estoque:"));
    let quantidademedia;

    quantidademedia = (quantidademaximaestoque + quantidademinimaestoque) / 2
    if (quantidadeatualestoque >= quantidademedia) {
        window.alert("Não efetuar compra")
    } else {
        window.alert("Efetuar compra")
    }
}