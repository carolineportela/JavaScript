/***************************************************************
 * Objetivo: Arquivo de funções para calculos matematicos
 * Autor: (Professor)
 * Data: 03/02/2023
 * Versão: 1.0
 **************************************************************/

////Essa function será para realizar calculos matematicos

//argumentos que precisam entrar na função
function calculadora(numero1, numero2, tipoCalculado) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);

    let operacao = tipoCalculado.toUpperCase();

    let resultado;

    if (operacao == 'SOMAR') {

        resultado = valor1 + valor2;

    } else if (operacao == 'SUBTRAIR') {

        resultado = valor1 - valor2;

    } else if (operacao == 'MULTIPLICAR') {

        resultado = valor1 * valor2;

    } else if (operacao == 'DIVIDIR') {

        //Validação para tratar a divisão por zero
        if (valor2 == 0) {
            console.log('ERRO: Não é possivel realizar a divisão por zero');
        } else {
            resultado = valor1 / valor2;
        }

    } else {
        console.log('ERRO: A escolha de operação matématica foi inválida!!.');

        //finaliza o callback do objeto de entrada de dados (Sai do programa)
        entradaDados.close();
    }

    // Validação para tratar qunado a variavel resultado não for processada por algum problema
    if (resultado == undefined) {
        return false;
    } else {
        return resultado;
    }

}

//toda função global tem que estar nesse arquivo
//module.exports serve para a function virar global/public.(Poder chamar a funtion em outra classe).
//as functions que não estiverem aqui no exports,serão tratadas apenas como escopo local (private).
module.exports = {
    calculadora
}