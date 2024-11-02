let nome = "Pedro";
let idade = 25;
let atividade = true;

function chekar(nome, idade, atividade) {
    if (atividade) {
        console.log(nome + " tem " + idade + " anos e está ativo.");
    } else {
        console.log(nome + " está inativo.");
    }
}

chekar(nome, idade, atividade);
