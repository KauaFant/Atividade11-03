let nums = []

for(i = 0; i < 10; i++){
    nums.push(Math.floor(Math.random() * 10 ))
}

function somarNumeros(){
    let soma = 0
    nums.forEach(num => {
        soma += num
    })
    return soma
}

console.log(somarNumeros())