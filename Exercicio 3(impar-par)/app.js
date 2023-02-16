matematica = require('./modulo/imparPar.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o primeiro número:'), function (numeroInicial){
     let primeiroNumero = numeroInicial

     entradaDados.question('Digite o segundo número:'), function (numeroFinal){
        let segundoNumero = numeroFinal


        entradaDados.question('Escolha uma opção 1 - Os Impares  2 - Os Pares  3 - Os dois '), function (){
            let opcaoDoUsuario = opcao

            //matematica.getImparPar(numeroInicio, numeroFim, opcaoEscolhida)

        }
          

     }
    
}