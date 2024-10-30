function numerosPares(vetor) {
    let apenasPares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (vetor[i] % 2 === 0) {
            apenasPares.push(vetor[i]);
        }
    }
    return apenasPares;
}

let vetor1 = [1, 2, 3, 4, 5, 6];
let pares = numerosPares(x);
console.log(pares);
