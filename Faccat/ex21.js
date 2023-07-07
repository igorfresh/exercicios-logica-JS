function ex21() {
    let inicio = parseInt(prompt("Digite o horário de início da partida:"));
    let termino = parseInt(prompt("Digite o horário de término da partida:"));
    let duracao;
    if (termino < inicio) {
         duracao = (24 - inicio) + termino
        window.alert("A duração da partida foi de: " + duracao)
    } else if (termino > inicio) {
         duracao = termino - inicio
        window.alert("A duração da partida foi de: " + duracao)
    } else if (fim = inicio) {
         duracao = 24
        window.alert("A duração da partida foi de: "+ duracao)
    }
}