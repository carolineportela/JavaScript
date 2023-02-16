/* 
- Objetivo: Criar um sistema que gerencie números pares e impares
- Data: 15/02/2023
- Autor: Caroline Portela
- Versão: 1.0
*/

function getImparPar(numeroInicio, numeroFim, opcaoEscolhida) {

    numeroInicial = numeroInicio;
    numeroFinal = numeroFim;
    opcao = opcaoEscolhida;

    if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
        console.log('ERRO: Você não digitou um número.');
    } else {

        let quantidadePar = 0;
        let quantidadeImpar = 0;
        let quantidadeTotal = 0;

        if (opcao == 1) {
            for (i = numeroInicial; i <= numeroFinal; i++) {
                if (i % 2 == 0) {
                    console.log('PAR: ' + i);
                    quantidadePar++;
                }
            }
            console.log('A quantidade de números pares é: ' + quantidadePar);
        } else if (opcao == 2) {
            for (i = numeroInicial; i <= numeroFinal; i++) {
                if (i % 2 != 0) {
                    console.log('IMPAR: ' + i);
                    quantidadeImpar++;
                }
            }
            console.log('A quantidade de números impares é: ' + quantidadeImpar);
        } else if (opcao == 3) {
            for (i = numeroInicial; i <= numeroFinal; i++) {
                if (i % 2 == 0) {
                    console.log('PAR: ' + i);
                    quantidadeTotal++;
                } else if (i % 2 != 0) {
                    console.log('IMPAR: ' + i);
                    quantidadeTotal++;
                }
            }
            console.log(quantidadeTotal);
        }
    }
}

getImparPar(1, 10, 3);

module.exports = {
    getImparPar
}

