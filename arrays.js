var nome = "Elias"
var filhos = ["Cadu", "Carlos", "Eduardo", "jose"]

console.log(filhos)

console.log(filhos[0])
console.log(filhos[2])

// chamar array = []

// for = posição inicial + até quando + "++ de um  e um" acrementa 1

//variavel "i"

for(var i=0; i<=10; i++){
    console.log("Amo JS " + i);
}

console.log("FIM!");

for(var i=5; i<=50; i++){
    console.log("AMO JS! " + i)
}

for(var i=0; i<filhos.length; i++){ // Perceber o Uso do Lenth
console.log(filhos[i] + " é filho de " + nome)
}

// FOR = i=0; i<=Até onde vai; i++

// imprimir na tela os nomes dos filhos na posição PAR

for(var i=0; i<filhos.length; i++){
    console.log(filhos[i]) 
    if(i % 2 == 0){  // testando se "i" é par
        console.log(filhos[i])
    }
}

for(var i=0; i<filhos.length; i=i+2){ // Profissionalmente é melhor
    console.log(filhos[i])
}


var tabuada = 7

for (var i = 1; i < 11; i++) {

console.log (tabuada + " x " + i + " = " + (tabuada * i))

}

for (var i=1; i<=7; i++){
    console.log("Bom dia, grupo! " + i)
}

var bomDia =("Bom dia, grupo!")
for (var i=1; i<=7; i++){
    console.log(bomDia + i)
}


var imprimir5Vezes = ("Estou aprendendo Loops")
for(var i=1; i<6; i++){
    console.log(imprimir5Vezes + i)
} 

function imprimir5Vezes() {
    for(var i = 1; i<6; i++){
        console.log("Estou aprendendo Loops" + i)
    }
}
 
function passoAPasso(){
    for (var i = 0; i<5; i++){
        console.log(i)
    }
}
 