const frutas = ["laranja", "limão", "uva"];
//# Exercício 1

// Faça com que os itens do array do arquivo script.js sejam adicionados à página 
// HTML, dentro dos itens `li` que estão na página. 
// Repare que um dos itens "li" ficará vago. Vamos preenchê-lo no exercício 3.

let i = 0
let j = 1;

while (i < frutas.length){
    const fruta = document.getElementById("fruta-" + j)
    fruta.innerHTML = fruta.innerHTML + frutas[i]
    console.log(i)
    i ++
    j ++
}

// # Exercício 2

// Crie um campo label e um campo input na página HTML, e preencha o campo com o nome de mais uma fruta.
// Depois disso, escreva **No DevTools** o código necessário para que seja possível imprimir o valor do input escrito no console.
// Cole o comando aqui:
// ```jsx
//     cole o código JS nesta área.

function imprimirFruta(){
    let frutaDoinput = document.getElementById("fruta4")
    console.log(frutaDoinput.value);
    //EXERCICIO3
    document.getElementById("fruta-4").innerHTML = frutaDoinput.value
}