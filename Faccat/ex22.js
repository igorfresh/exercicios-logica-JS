function ex22(){
    let salariohora=parseInt(prompt("Digite o valor ganho por hora trabalhada:"));
    let horastrabalhadas=parseInt(prompt("Digite a quantidade de horas trabalhadas em um mês:"));
    let salariototal;
    let horasextras;
    let salariohoraextra1;
    let salariohoraextra2;

    if (horastrabalhadas<=160){
         salariototal=salariohora*horastrabalhadas
        window.alert("O salário total do funcionário no mês é: "+salariototal)
    } else{
         horasextras=horastrabalhadas-160
         salariohoraextra1=(horasextras*salariohora)
         salariohoraextra2=(salariohoraextra1*50/100)
         salariohoraextratotal=(salariohoraextra1+salariohoraextra2)
         salariototal=(salariohora*160+salariohoraextratotal)
        window.alert("O salário final do funcionário é: "+salariototal)
    }
    
}