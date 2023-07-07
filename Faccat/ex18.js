function ex18(){
    let anoatual=parseInt(prompt("Digite o ano atual:"));
    let anonascimento=parseInt(prompt("Digite o ano em que você nasceu:"));
    let baseidade=anoatual-anonascimento;
    if (baseidade<16){
        window.alert("Você ainda não pode votar")
    } else{
        window.alert("Você já pode votar")
    }
}