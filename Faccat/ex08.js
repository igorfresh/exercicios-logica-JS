function ex08() {
    let eleitor1 = parseInt(prompt("Digite o total de eleitores por município:"));
    let votonulo1 = parseInt(prompt("Digite o total de eleitores que votaram nulo"));
    let votobranco1 = parseInt(prompt("Digite o total de eleitores que votaram em branco:"));
    let votovalido1 = parseInt(prompt("Digite o total de votos válidos:"));
    let votovalido2 = votovalido1 * 100 / eleitor1;
    let votonulo2 = votonulo1 * 100 / eleitor1;
    let votobranco2 = votobranco1 * 100 / eleitor1;

    window.alert("A porcentagem de votos validos foi de: " + votovalido2 + "%")
    window.alert("A porcentagem de votos nulos foi de: " + votonulo2 + "%")
    window.alert("A porcentagem de votos em branco foi de: " + votobranco2 + "%")
}