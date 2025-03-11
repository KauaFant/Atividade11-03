function extrairVogais(str) {
    // Converte a string para minúsculas
    str = str.toLowerCase();
    
    // Cria um array com as vogais presentes na string
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    
    // Filtra as vogais presentes na string
    const resultado = [];
    
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            resultado.push(str[i]);
        }
    }
    
    return resultado;
}

const resultado = extrairVogais("Kaua");
console.log(resultado);