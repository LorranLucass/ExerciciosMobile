// Exercício 1: Manipulação de Strings

//Exercício 2: Operadores Aritméticos e de Comparação
   let numero = {
   num1: 1,
   num2: 2,
}
    function somar (num1 , num2) {
    const resultado = num1 + num2   
    console.log (resultado)
    }
    somar(numero.num1, numero.num2); 

//Exercício 3: Estruturas de Controle  
function verificarIdade(idade) {
   if (idade < 18) {
       console.log("Menor de idade");
   } else if (idade >= 18 && idade < 65) {
       console.log("Maior de idade");
   } else {
       console.log("Idosa");
   }
}

//Exercício 4: Laços de Repetição
for (let i = 1; i <= 100; i++) {
   console.log (i)
}

//Exercício 5: Funções
function calcularValores(num) {
   console.log("Dobro: " + (num * 2));
   console.log("Triplo: " + (num * 3));
   console.log("Quadrado: " + (num ** 2));
}
calcularValores(5);

//Exercício 6: Arrays

function manipularArray(arr) {
   arr.push(60);
   console.log("Array após adicionar: " + arr);
   arr.shift();
   console.log("Array após remover o primeiro número: " + arr); 
   console.log("Maior número: " + Math.max(...arr));
   console.log("Menor número: " + Math.min(...arr));
}
manipularArray([10, 20, 30, 40, 50]);

//Exercício 7: Métodos de Arrays

function manipularStringsArray(arr) {
   let maiusculas = arr.map(str => str.toUpperCase());
   console.log("Maiúsculas: " + maiusculas);
   let comA = arr.filter(str => str[0].toUpperCase() === 'A');
   console.log("Strings que começam com 'A': " + comA);
   let comprimentos = arr.map(str => str.length);
   console.log("Comprimentos das strings: " + comprimentos);
}
manipularStringsArray(["Maçã", "Banana", "Abacaxi", "Laranja"]);

//Exercício 8: Objetos
function manipularObjeto(obj) {
   obj.profissao = "Desenvolvedor";
   console.log("Objeto após adicionar profissão: ", obj);
   delete obj.idade;
   console.log("Objeto após remover idade: ", obj);
   console.log("Propriedades do objeto: ", Object.keys(obj));
}
manipularObjeto({ nome: "Carlos", idade: 28, cidade: "São Paulo" });


// Exercicio 09: Desestruturação de Objetos
const livro = {
   titulo: "O Senhor dos Anéis",
   autor: "J.R. Tolkien",
   ano: 1954
 };
 
 const { titulo, autor } = livro;
 console.log(`Título: ${titulo}, Autor: ${autor}`);
 
 function getTituloEAutor(livro) {
   const { titulo, autor } = livro;
   return `Título: ${titulo}, Autor: ${autor}`;
 }
 console.log(getTituloEAutor(livro));
 




