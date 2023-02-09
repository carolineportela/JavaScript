/***************************************************************
 * Objetivo: Arquivo de funções para calculos matematicos
 * Autor: (Professor)
 * Data: 03/02/2023
 * Versão: 1.0
 **************************************************************/

////Essa function será para realizar calculos matematicos
//Primeira function
//argumentos que precisam entrar na função
// function calculadora(numero1, numero2, tipoCalculado) {

//     let valor1 = Number(numero1);
//     let valor2 = Number(numero2);
//     let status = true;

//     let operacao = tipoCalculado.toUpperCase();

//     let resultado;

//     //Primeira forma de fazer as operações (professor pediu pra comentar)
//     /* 
//      if (operacao == 'SOMAR') {
//       resultado = valor1 + valor2;
//     } else if (operacao == 'SUBTRAIR') {
//         resultado = valor1 - valor2;
//     } else if (operacao == 'MULTIPLICAR') {
//       resultado = valor1 * valor2;
//     } else if (operacao == 'DIVIDIR') {

//         //Validação para tratar a divisão por 0
//         if (valor2 == 0) {
//             console.log('ERRO: Não é possivel realizar a divisão por 0');
//             status = false;
//         } else {
//             resultado = valor1 / valor2;
//         }

//     } else {
//         console.log('ERRO: A escolha de operação matématica foi inválida!!.');
//            status = false;
//     } */

//     //Segunda forma com switch
//     switch (operacao) {
//         case 'SOMAR':
//             resultado = valor1 + valor2;
//             break;

//         case 'SUBTRAIR':
//             resultado = valor1 - valor2;
//             break;

//         case 'MULTIPLICAR':
//             resultado = valor1 * valor2;
//             break;

//         case 'DIVIDIR':
//             if (valor2 == 0) {
//                 console.log('ERRO: Não é possivel realizar a divisão por 0');
//                 status = false;
//             } else {
//                 resultado = valor1 / valor2;
//             }
//             break;
//             default:
//                 console.log('ERRO: A escolha de operação matématica foi inválida!!.');
//                 status = false;
//     }

//     // Validação para tratar qunado a variavel resultado não for processada por algum problema
//     if (resultado == undefined && status == false) {
//         return false;
//     } else {
//         return resultado;
//     }

// }

//Forma 2 de criar uma função (é a mais utilizada)
const calculadora = function (numero1, numero2, tipoCalculado) {
    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let status = true;

    let operacao = tipoCalculado.toUpperCase();

    let resultado;

    //Primeira forma de fazer as operações(professor pediu pra comentar)
    /* 
     if (operacao == 'SOMAR') {
      resultado = valor1 + valor2;
    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2;
    } else if (operacao == 'MULTIPLICAR') {
      resultado = valor1 * valor2;
    } else if (operacao == 'DIVIDIR') {

        //Validação para tratar a divisão por 0
        if (valor2 == 0) {
            console.log('ERRO: Não é possivel realizar a divisão por 0');
            status = false;
        } else {
            resultado = valor1 / valor2;
        }

    } else {
        console.log('ERRO: A escolha de operação matématica foi inválida!!.');
           status = false;
    } */

    //Segunda forma com switch
    switch (operacao) {
        case 'SOMAR':
            resultado = SOMAR(valor1, valor2)
            break;

        case 'SUBTRAIR':
            resultado = SUBTRAIR(valor1, valor2)
            break;

        case 'MULTIPLICAR':
            resultado = MULTIPLICAR(valor1, valor2)
            break;

        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('ERRO: Não é possivel realizar a divisão por 0');
                status = false;
            } else {
                resultado = DIVIDIR(valor1, valor2);
            }
            break;
        default:
            console.log('ERRO: A escolha de operação matématica foi inválida!!.');
            status = false;
    }

    // Validação para tratar qunado a variavel resultado não for processada por algum problema
    if (resultado == undefined && status == false) {
        return false;
    } else {
        return resultado;
    }

}
//Terceira forma de fazer uma função(modelo chamado de arrow Function)nessa não precisamos colocar nem o nome function e nem um return. Aqui fazemos a função 
//e lá em cima com exemplo no switch a gente só chama os nomes da const.
const SOMAR          = (valor1, valor2) => valor1 + valor2;
const SUBTRAIR       = (valor1, valor2) => valor1 - valor2;
const MULTIPLICAR    = (valor1, valor2) => valor1 * valor2;
const DIVIDIR        = (valor1, valor2) => valor1 / valor2;


//toda função global tem que estar nesse arquivo
//module.exports serve para a function virar global/public.(Poder chamar a funtion em outra classe).
//as functions que não estiverem aqui no exports,serão tratadas apenas como escopo local (private).
module.exports = {
    calculadora
}