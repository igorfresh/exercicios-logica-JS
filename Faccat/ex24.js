function ex24() {
    let salario = parseInt(prompt("Digite o salário fixo do vendedor:"));
    let vendas = parseInt(prompt("Digite o valor de vendas efetuadas:"));
    let comissao;
    let salariototal;
    if (vendas > 1500) {
         comissao = vendas * 5 / 100
         salariototal = salario + comissao
        window.alert("O salário total é: " + salariototal)
    } else {
         comissao = vendas * 3 / 100
         salariototal = salario + comissao
        window.alert("O salário total é: " + salariototal)
    }
}