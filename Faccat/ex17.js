function ex17() {
    let nota1 = parseFloat(prompt("Digite a nota da 1º avaliação:"));
    let nota2 = parseFloat(prompt("Digite a nota da 2º avaliação:"));
    let media = (nota1 + nota2)/2;

    if (media<6){
        alert("Você foi reprovado. Sua média foi: "+media)
    }
    else{
        alert("Você foi aprovado. Sua média foi: "+media)
    }
}
    