/*
Objetivo : Projeto para realizar calculos matematicos(versão professor)
*/

//Import da biblioteca da calculadora
var matematica = require('./modulo/calculadora.js');

// Import para entrada de dados
var readline = require('readline');

//Cria um objeto para manipular as entradadas de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

entradaDados.question('Valor: \n', function (numero1) {
    //replace - metodo da classe string que localiza um caracter e substitui por outro 
    let valor01 = numero1.replace(',', '.');

    entradaDados.question('Valor2: \n', function (numero2) {
        let valor02 = numero2.replace(',', ',');

        entradaDados.question('Escolha uma opção : [Somar | Subtrair | Multiplicar | Dividir \n', function (tipoCalculo) {
            let operacao = tipoCalculo.toUpperCase();
            let resultado;

            //Validação de entrada de dados vazio
            if (valor01 == '' || valor02 == '' || operacao == '') {

                //Validação para entrada de dados numericos
                console.log('ERRO:Não é possivel calcular se alguma opção estiver em branco.');
            } else if (isNaN(valor01) || isNaN(valor02)) {
                console.log('Erro: Não é possivel calcular se os dados digitados não forem números');
            } else {
                //toUpperCase - converte uma string em MAIUSCULO
                //toLowerCase - converte em minusculo

                //     //Professor escolheu fazer os ifs sem abrir e fechar chave,é uma opção.Ele so colocou no DIVIDIR por que precisa realizar a conta.,
                //    // function calculadora(numero1, numero2, tipoCalculo) {
                //        // if (operacao == 'SOMAR')
                //           //  resultado = Number(valor01) + Number(valor02);
                //       //  else if (operacao == 'SUBTRAIR')
                //             resultado = Number(valor01) - Number(valor02);
                //         else if (operacao == 'MULTIPLICAR')
                //             resultado = Number(valor01) * Number(valor02);
                //         else if (operacao == 'DIVIDIR') {
                //             if (valor02 == 0)
                //                 console.log('Erro:Não é possivel realizar a divisão por 0.');
                //             else
                //                 resultado = Number(valor01) / Number(valor02);
                //         } else {
                //             console.log('ERRO: A sua escolha de operacao matematica não foi valida');
                //             //finaliza o call back do objeto de entrada de dados (Sai do programa)
                //             entradaDados.close();
                //         }
                //         //Validação para tratar quando a variavel resultado não for processada por algum problema.
                //         if (resultado == undefined)
                //             console.log('Erro:Não foi possivel encontrar um valor válido.');
                //         else
                //             console.log(resultado);

                /*
                TUDO QUE ESTÁ COMENTADO EM CIMA,FOI PQ O PROFESSOR EXPLICOU QUE DEVEMOS FAZER UMA FUNcTION EM OUTRO ARQUIVO DA OPERACAO (arquivo na pasta modulo)
   
                */
                resultado = matematica.calculadora(valor01, valor02, operacao);
                if(resultado !=false)
                console.log(resultado);
                else
                entradaDados.close();

            }

        });
    });

});

//else if (typeof(valor1)! = 'number')
//typeof()- Identifica o tipo de dados de um elemento
// O isNaN - identificao tipo de conteudo independente do tipo de dados
//let x = 10;
//console.log (typeof(x))

//----------------

//alguns exemplos de métodos importantes da classe String
//replace,substring,length,upercase,lowercase,indexof,trim

//O Number,ParseFloat,ParseInt convertem a string em número
