//Aula 01
//node .\app.js roda o codigo

// Comentario em linha

/* Comentario
em 
bloco*/

//Console.log permite exibir no terminal uma mensagem
console.log('Testando o Node.JS');


//Import da bilbioteca que permite entrada de dados via teclado(que nem o scanner que fizemos em java)
//variavel para guardar a importação 
var readline = require('readline');

//Variavel que guarda um ambiente de interface para o usuario
//Criamos um objeto ou variável que vai ser especialista na entrada de dados via teclado
var entradadaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   

/*Callback - Uma função de callback que permite na própria linha de programação
seja uma variavel,um processamento,a chamada de um metodo possa acontecer
um retorno de dados automaticamente,sem precisa sair deste processamento
*/





//  \n pula uma linha
//o function vai me retornar dados

/* 
Comentário do professor
Cria uma interação com o usuario,para entrada de dados.
Após o usuário digitar o conteudo,o objeto entradaDados permite retornar o conteudo digitado para ser 
utilizado.Isso acontece através de uma função de callback.
*/
entradadaDados.question('Por favor digitar o seu nome:\n' , function(nome){
    console.log('Bem vindo,' + nome + ' ao servidor Node,JS');
});