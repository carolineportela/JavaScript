function getImparPar(numeroInicio, numeroFim, opcaoEscolhida) {

    numeroInicial = Number(String(numeroInicio).replace(',', '.'));
    numeroFinal = Number(String(numeroFim).replace(',', '.'));
    opcao = opcaoEscolhida;

    if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
        console.log('ERRO: Você não digitou números.');
    } else if (numeroInicial < 0 || numeroInicial > 500) {
        console.log('ERRO: O número inicial deverá ser entre 0 e 500.');
    } else if (numeroFinal < 100 || numeroFinal > 1000) {
        console.log('ERRO: O número final deverá ser entre 100 e 1000.');
        //a validação abaixo não esta funcionando
    } else if (numeroInicial == '' || numeroFinal == '') {
        console.log('ERRO: Você deixou de digitar alguma opção.');
    } else if (numeroInicial > numeroFinal) {
        console.log('ERRO: O número inicial não pode ser maior que o número final.');
    } else if (numeroInicial == numeroFinal) {
        console.log('ERRO: O número inicial não pode ser igual ao número final.');
           //a validação abaixo não esta funcionando
    } else if (opcao < 1 || opcao > 3) { 
        console.log('ERRO: Você só pode selecionar opções de 1 á 3.');
    } else {

        let quantidadePar = 0;
        let quantidadeImpar = 0;

        if (opcao == 1) {
            for (i = numeroInicial; i <= numeroFinal; i++) {
                if (i % 2 == 0) {
                    console.log(i);
                    quantidadePar++;
                }
            }
            console.log('A quantidade de números pares é: ' + quantidadePar);
        } else if (opcao == 2) {
            for (i = numeroInicial; i <= numeroFinal; i++) {
                if (i % 2 != 0) {
                    console.log(i);
                    quantidadeImpar++;
                }
            }
            console.log('A quantidade de números impares é: ' + quantidadeImpar);
        } else if (opcao == 3) {
            console.log('PARES'); 
            for (i = numeroInicial; i <= numeroFinal; i++) {
                if (i % 2 == 0) {              
                    console.log(i);
                    quantidadePar++;
                }
            }
            console.log('A quantidade de números pares é: ' + quantidadePar);
            console.log('IMPARES');
            for (i = numeroInicial; i <= numeroFinal; i++) {
                if (i % 2 != 0) {
                    console.log(i);
                    quantidadeImpar++;
                }
            }
            console.log('A quantidade de números impares é: ' + quantidadeImpar);
        }
    }
}

module.exports = {
    getImparPar
}
























// function getImparPar(numeroInicio, numeroFim, opcaoEscolhida) {

//     numeroInicial = numeroInicio;
//     numeroFinal = numeroFim;
//     opcao = opcaoEscolhida;

//     if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
//         console.log('ERRO: Você não digitou um número.');
//     } else {

//         let quantidadePar = 0;
//         let quantidadeImpar = 0;
//         let quantidadeTotal = 0;

//         if (opcao == 1) {
//             for (i = numeroInicial; i <= numeroFinal; i++) {
//                 if (i % 2 == 0) {
//                     console.log('PAR: ' + i);
//                     quantidadePar++;
//                 }
//             }
//             console.log('A quantidade de números pares é: ' + quantidadePar);
//         } else if (opcao == 2) {
//             for (i = numeroInicial; i <= numeroFinal; i++) {
//                 if (i % 2 != 0) {
//                     console.log('IMPAR: ' + i);
//                     quantidadeImpar++;
//                 }
//             }
//             console.log('A quantidade de números impares é: ' + quantidadeImpar);
//         } else if (opcao == 3) {
//             for (i = numeroInicial; i <= numeroFinal; i++) {
//                 if (i % 2 == 0) {
//                     console.log('PAR: ' + i);
//                     quantidadeTotal++;
//                 } else if (i % 2 != 0) {
//                     console.log('IMPAR: ' + i);
//                     quantidadeTotal++;
//                 }
//             }
//             console.log(quantidadeTotal);
//         }
//     }
// }

// getImparPar(1, 10, 3);

// module.exports = {
//     getImparPar
// }

