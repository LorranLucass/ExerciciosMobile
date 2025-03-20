// Código para executar meu projeto

// Importar um módulo
import {calcularIMC, tabelaIMC} from "./CalculadoraIMC.js";

console.log(">>>Calculadora IMC <<<")
console.table(tabelaIMC)

const peso = 80
const altura = 1.70

const resultado = calcularIMC(peso, altura)

console.log ("Resultado IMC: ")
console.log (resultado.toFixed(2))