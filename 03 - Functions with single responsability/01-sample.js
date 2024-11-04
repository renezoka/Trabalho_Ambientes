const resposta = await fetch('https://swapi.dev/api/starships/9/');
const nave = await resposta.json();

const detalhesNave = `
        Nome: ${nave.name}
        Modelo: ${nave.model}
        Fabricante: ${nave.manufacturer}
        `;

async function buscarNave(){
    try{
    console.log("Detalhes da Nave:");
    console.log(detalhesNave);
    }catch(erro)
        console.log('Erro ao buscar nave')
}

async function detalharNave() {
    try {
        const tamanhoTripulacao = parseInt(nave.crew);
        if (tamanhoTripulacao > 100) {
            console.log('Esta é uma nave grande.');
        } else {
            console.log('Esta é uma nave pequena.');
        }

    } catch (erro) {
        console.error('Erro ao detalhar da nave:', erro);
    }
}

buscarNave();
detalharNave();
