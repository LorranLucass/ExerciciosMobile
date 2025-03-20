//comentario de uma linha

/*
Comentario em bloco 
*/

//variaveis
//var -> não usa no dia dia
let nome = "Victor"
const idade = 20;

//nome - 'teste'
// idade = 20 não é possivel reatribuir uma constante

//operadores
const soma = 2 + 2
const subtracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 2 / 2
const resto = 3 % 3

//operadores de comparação
const igual = 2 == 2
const diferente = 3 != 2
const maior = 3 > 2
const menor = 2 > 3
const maiorOuigual = 2 >= 3
const menorOuigual = 2 <= 3

// Estruturas condições
if (idade > 18) {
    console.log("Maior de idade")
}

if (idade > 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}


//operador ténario

const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log("Mensagem -> ", mensagem)

//arays - Listas

const frutas = ["Maça", "Banana", "Uva"]
console.log(frutas[0])
console.log(frutas[1])

console.log("Quantas frutas tem no array")
console.log(frutas.length)

frutas.push("Melancia")
console.log("É agora, quantas frutas tem na array?")
console.log(frutas.length)

frutas.forEach(fruta => console.log(fruta))

frutas.pop()
console.log(frutas)

//objetos
let pessoa = {
    nome: "Victor",
    idade: 30,
    peso: 80,
    altura: 170
}
console.log(pessoa.nome)
pessoa.idade = 22;
console.log(pessoa.idade)

//desatribuição de objetos

const { peso, altura } = pessoa
console.log(altura)
console.log(peso)

// propagação de objetos
const endereco = {
    cidade: "Brasilia",
    uf: "DF",
}

const pessoaCompleto = {
    ...pessoa,
    ...endereco,
}
console.log (pessoaCompleto)

// funções
// Declaração
function somar(numA, numB){
    const resultado = numA + numB
    console.log(resultado)
}

// Uso 
somar(2,2)
somar(3,3)
somar(10,5)

//função anonima
const subtrair = function (numA, numB){
    const resultado = numA - numB
    console.log(resultado)
}

subtrair(4,2)

// arrow function
 const multiplicar = (numA, numB) => numA + numB

 multiplicar(2,2)

 // importar uma função de outro arquivo

 import {calcularIMC} from "./CalculadoraIMC";

 const res = calcularIMC(82, 193)
 console.log(res)