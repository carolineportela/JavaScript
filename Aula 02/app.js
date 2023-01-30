/*Aula 02.
* Objetivo : Calcular a media de quatro notas escolares.
*Autor : Carol
*Data : 27/01
*Versão :1.0 */

//import da biblioteca readline (entrada de dados)
var readline = require('readline');

//apos criar esse import preciso criar um objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


/* Criação de váriaveis
  *var - cria um espaço em memória (váriavel) de escopo global para o projeto,ou seja,essa váriavel poderá ser utilizada em qulquer parte do arquivo.(várias funçoes-function)

  *let -  cria um espaço em memória (váriavel) de escopo global para o projeto,ou seja,essa váriavel somente poderá ser utilizada em dentro da função que foi criada.

  *const - quando o valor é fixo, nunca irá mudar.
   -cria um espaço em memória de escopo locaol ou global para o projeto,ou seja,essa const poderá ser utilizada em qualquer parte do projeto e nunca sofrerá alteração.
*/

/* Função de callback para entrar a nota 01 */
//o nome entre parenteses na linha abaixo é um argumento
entradaDados.question('Por favor,digite seu nome: \n', function (nome) {
    // na linha abaixo recebe o valor(nome) digitado pelo teclado

    let nomeAluno = nome;
    entradaDados.question('Digite a nota 01 \n', function (nota01) {
        let valor01 = nota01;

        //Função de callback para entrar a nota 02
        entradaDados.question('Digite a nota 02 \n', function (nota02) {
            let valor02 = nota02;

            //Função de callback para entrar a nota 03
            entradaDados.question('Digite a nota 03 \n', function (nota03) {
                let valor03 = nota03;

                //Função de callback para entrar a nota 04
                entradaDados.question('Digite a nota 04 \n', function (nota04) {
                    let valor04 = nota04;
                    let media;
                    /*Conversão de tipos de dados
                    parseInt() ou Number.parseInt - Converte uma String em  inteiro . 
                    parseFloat() ou  Number.parseFloat - Converte uma string em real.
                    Também podemos usar somente o Number que irá tratar qualquer número,sendo inteiro ou não.
                    */

                    //If para nao realizar o calculo se o usuario digitar vazio
                    /*
                    Operadores de comparação
                    == (Verifica a igualdade ente conteudos)
                    != ( Verfica a diferença entre os conteudos)
                    === (Verifica a igualdade entre conteudos e tipos de dados,exemplo : se um é número e o outro é string, ou se um é inteiro e o outro não.)
                    !== (Verifica a diferença entre os conteudos e igualdade de tipo de dados)
                    ==! (Verifica a igualdade entre conteudos e diferenca de tipo de dados)
                                EXEMPLO:
                                0===0 VERDADEIRO
                                0=== '0' FALSO
                               '0' === 0 FALSO
                                0 == 0 VERDADEIRO
                                0 == '0' VERDADEIRO
                               '0' == 0 VERDADEIRO

                    < (menor)
                    > (maior)
                    <= (menor ou igual)
                    >= (maior ou igual)

                              OPERADORES LÓGICOS
                              E       &&    AND
                              OU      ||    OR
                              NEGAÇÃO  !    NOT   
                    */
                    //se o valor da nota 01,nota 02,nota03 e nota 04 for vazio cai na linha do console e mostra pro usuario a mensagem de erro.
                    if (valor01 == '' || valor02 == '' || valor03 == '' || valor04 == '') {
                        //Validação para entrada de texto(inválida)
                        console.log('ERROR:Você deixou de entrar/digitar algum valor')
                    } else if (isNaN(valor01) || isNaN(valor02) || isNaN(valor03) || isNaN(valor04)) {
                        console.log('Você digitou letras, dgite um número válido')
                    }
                       //Validação para entrada de numero menor que 0(inválida)
                    else if (valor01 < 0 || valor02 < 0 || valor03 < 0 || valor04 < 0) {
                        console.log('Error : Nota menor que zero não é valida,digite outra.')

                    }
                        //Validação para entrada de numero maior que 10(inválida)
                    else if (valor01 > 10 || valor02 > 10 || valor03 > 10 || valor04 > 10) {
                        console.log('Error : Nota maior que 10 não é valida,digite outra.')

                    }

                    else {
                        media = (parseFloat(valor01) + parseFloat(valor02) + parseFloat(valor03) + parseFloat(valor04)) / 4;
                       
                        if (media >= 7) {
                            console.log('VOCE ESTÁ APROVADO!!!')
                        }
                        if (media <= 7) {
                            console.log('VOCE ESTÁ REPROVADO!!!')
                        }
                        console.log('Sua media foi:', media.toFixed(1));
                    }

                    // TESTE PARA APARECER NO CONSOLE AS NOTAS  console.log ( nomeAluno + ' Nota 1:' + valor01, ' Nota 2:' + valor02 , ' Nota 3:' + valor03, ' Nota 4:' + valor04);
                });
            });
        });
    });

});


