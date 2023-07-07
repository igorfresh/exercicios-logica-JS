function ex07(){
    let idadeanos = parseInt(prompt("Digite a sua idade: "));
    let idademes = parseInt(prompt("Especifique com o número de meses: "));
    let idadedias = parseInt(prompt("Especifique com o número de dias: "));
    let diasvividos = (idadeanos*365)+(idademes*30)+idadedias;
    window.alert(diasvividos)
}