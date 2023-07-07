function ex09(){
    let salario = parseInt(prompt("Digite o salário atual do funcionário:"));
    let percentualreajuste = parseInt(prompt("Digite o percentual de reajuste:"));
    let salarionovo=salario+(salario*percentualreajuste/100);
    window.alert("O valor do novo salário do funcionário é: "+salarionovo)
}