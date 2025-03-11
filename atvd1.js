let array = [3, 7, 9, 8, 10, 10, 9, 2]

function aprovadoReprovado(media){
if(media >= 7){
    console.log("Aprovado!");
    return media
}
else{
    console.log("Reprovado!");
    return media
}
}

function media(array){
    let soma = 0
    array.forEach(element => {
        soma += element
    });
    let media = soma / array.length
    return media
}  

console.log(aprovadoReprovado(media(array)))