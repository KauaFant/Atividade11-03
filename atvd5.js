function encontrarMenorNumero(arr) {
    return Math.min(...arr);
}

const numeros = [50, 12, 10, 8, 7];
const menorNumero = encontrarMenorNumero(numeros);
console.log(menorNumero);