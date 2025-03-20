// Criando um módulo no meu projeto
// Exportar as funcionalidades desse módulo

export function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

    export const tabelaIMC = [
        {limite: 18.5, classificacao: "Magreza"},
        {limite: 24.9, classificacao: "Normal"},
        {limite: 29.9, classificacao: "Sobrepeso"},
        {limite: 30.9, classificacao: "Obesidade nivel 1"},
        {limite: 36.0, classificacao: "Obesidade nivel 2"},
        {limite: 57.5, classificacao: "Obesidade nivel 3"},
     ]