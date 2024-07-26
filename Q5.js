const numeros = [];
for (let i = 1; i <= 5; i++) {
    numeros.push(prompt(`Digite o número ${i}:`));
}

for (let i = 0; i < 5; i++) {
    if (numeros[i]%3 == 0 && numeros[i]%5 == 0){
        console.log("fizzbuzz");
    }
    else if (numeros[i]%3 == 0){
        console.log("fizz");
    }
    else if (numeros[i]%5 == 0){
        console.log("buzz");
    }
    else{
        console.log()
    }

}
