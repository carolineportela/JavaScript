
//interação

var matematica = require('./modulo/tabuada.js');

// Import para entrada de dados
var readline = require('readline');

//Cria um objeto para manipular as entradadas de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDados.question('Digite o multiplicador\n', function (multiplicando) {
    let numero1 = multiplicando;

    entradaDados.question('Digite o máximo multiplicador\n', function (maxMultiplicador) {
        let numero2 = maxMultiplicador;

        if (numero1 == '' || numero2 == '') {
            console.log('ERRO: Não é possivel calcular sem que tenha sido digitado um valor');
        }else if(numero2 == 0){
            console.log('ERRO: O Máximo multiplicador não pode ser 0');
        } 
        else if (isNaN(numero1) || isNaN(numero2)) {
            console.log('Você digitou letras, dgite números')
        }

       
        else {
            //resultado recebe calcularTabuada,se o resultado for diferente
            // ou igual a true retorna o resultado no console.
            resultado = matematica.calcularTabuada(multiplicando, maxMultiplicador)
            if (resultado !== true) {
                console.log(resultado);
            } else {
                //(encerra o programa)
                entradaDados.close();
            };

        }

    });

});


