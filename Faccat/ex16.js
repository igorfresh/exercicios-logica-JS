function ex16() {
    let macas = parseInt(prompt("Digite a quantidade de maças:"));
    let total;
    if (macas>11) {
        total=macas*1
    } else{
        total=macas*1.30
    }
    window.alert("O custo total foi de: " + total.toFixed(2))
}
