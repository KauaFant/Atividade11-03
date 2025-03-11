let nums = []

for(i = 0; i < 10; i++){
    nums.push(Math.floor(Math.random() * 100))
}

function imparPar(){
    nums.forEach(num => {
        if(num %2 == 1){
            console.log("O número ímpar")
        }
        else{
            console.log("O número é par")
        }
    })
}

imparPar()