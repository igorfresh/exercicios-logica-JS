function ex13(){
    let nota1=parseFloat(prompt("Digite a primeira nota do aluno"));
    let nota2=parseFloat(prompt("Digite a segunda nota do aluno"));
    let nota3=parseFloat(prompt("Digite a terceira nota do aluno"));
    let mediafinal=(nota1*2+nota2*3+nota3*5)/10;
    window.alert("A média final do aluno é: "+mediafinal)
}