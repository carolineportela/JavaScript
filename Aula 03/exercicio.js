
/*
AUtor : Caroline Portela
Objetivo : Criar um app que tenha como entrada 02 valores e realize as quatro opções matematicas,as operações devem
também ser ser digitadas pelo usuário
-SOMAR,SUBTRAIR,MULTIPLICAR,DIVIDIR
*/


//entrada de dados
var readline = require('readline');

//especialista em entradas de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Callback para escolher a operacao
entradaDados.question('Por favor,digite o numero da operação Matematica que deseja : \n 1- Somar \n  2- Subtrair \n  3- Multiplicar \n  4- Dividir \n', function (operacao) {
    let OperacaoDigitada = operacao

    entradaDados.question('Digite o primeiro número da operação:', function (numero1) {
        let primeiroNumero = numero1.replace(",", ".");


        entradaDados.question('Digite o segundo número da operação:', function (numero2) {
            let segundoNumero = numero2.replace(",", ".");

            //Somar
            if (primeiroNumero == '' || segundoNumero == '') {
                //Validação para entrada de texto(inválida)
                console.log('ERROR:Você deixou de digitar uma opção')


                //Validação para qualquer entrada que nao seja numero (inválida)
            } else if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
                console.log('Digite um número válido')
            }

            else if (isNaN(OperacaoDigitada)) {
                console.log('Você nao escolheu uma opção válida')

            }
            else if (operacao > 4) {
                console.log('ERROR: VOCE NAO DIGITOU UMA OPÇÃO DE OPERAÇÃO VÁLIDA');
            }
            else if (OperacaoDigitada == 1) {
                soma = (parseFloat(primeiroNumero) + parseFloat(segundoNumero))
                console.log(primeiroNumero, "+", +  segundoNumero, "=", soma)

            }
            else if (OperacaoDigitada == 2) {
                subtracao = (parseFloat(primeiroNumero) - parseFloat(segundoNumero))
                console.log(primeiroNumero, "-", segundoNumero, "=", subtracao);
            }
            else if (OperacaoDigitada == 3) {
                multiplicar = (parseFloat(primeiroNumero) * parseFloat(segundoNumero))
                console.log(primeiroNumero, "X", segundoNumero, "=", multiplicar)

            } else if (OperacaoDigitada == 4) {
                if (primeiroNumero == 0) {
                    console.log('ERROR:Impossivel fazer operação com 0')
                } else {
                    dividir = (parseFloat(primeiroNumero) / parseFloat(segundoNumero))
                    console.log(numero1, "/", numero2, "=", dividir)
                }

            }


        })

    })
})


