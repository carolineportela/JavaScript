/*

Objetivo :Arquivo de funções para calculos matematicos

*/


//Essa function será para realizar calculos matematicos
function calculadora(numero01, numero02, tipoCalculo) {

    let valor1 = Number(numero01);
    let valor2 = Number(numero02);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao == 'SOMAR')
        resultado = valor01 + valor02;
    else if (operacao == 'SUBTRAIR')
        resultado = valor01 - valor02;
    else if (operacao == 'MULTIPLICAR')
        resultado = valor01 * valor02;
    else if (operacao == 'DIVIDIR') {
        if (valor02 == 0)
            console.log('Erro:Não é possivel realizar a divisão por 0.');
        else
            resultado = valor01 / valor02;
    } else {
        console.log('ERRO: A sua escolha de operacao matematica não foi valida');
        //finaliza o call back do objeto de entrada de dados (Sai do programa)
        entradaDados.close();
    }
    //Validação para tratar quando a variavel resultado não for processada por algum problema.
    if (resultado == undefined)
        return false;
    else
        return resultado;
}

//module.exports serve para a function virar global/public.(Poder chamar a funtion em outra classe).
//as functions que não estiverem aqui no exports,serão tratadas apenas como escopo local (private).
module.exports = {
    calculadora

}
