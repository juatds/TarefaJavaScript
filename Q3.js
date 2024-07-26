var n1 = prompt("Qual foi a primeira nota?")
var n2 = prompt("Qual foi a segunda nota?")
var n3 = prompt("Qual foi a terceira nota?")

media = parseInt(n1)+parseInt(n2)+parseInt(n3)
media = media/3

if (media>=6){
    console.log("Aprovado")
}
else{
    console.log("Reprovado")
}