/*

Aula sobre arrays 24/02/2023.
Objetivo: utilizar códigos e métodos de array.

 */

// [] = representa um objeto do tipo array
// {} = representa um objeto do tipo JSON

const listaNomes = ['Jose', 'Maria', 'Luiz', 'Antonia', 'Ana', 'Carlos'];
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memoria'];

const exibindoDados = function () {
    //verifica o tipo de dados do elemento listaNomes
    console.log(typeof (listaNomes));

    //verifica o tipo de dados/variavel do indice da array
    console.log(typeof (listaNomes[1]));

    //exibe todos itens de um indice
    console.log(listaNomes[0]);

    //exibe todos itens do array
    console.log(listaNomes);

    //table - permite vizualizar o conteudo da array em formato de tabela
    console.table(listaNomes)


    console.log('O nome do aluno é:' + listaNomes[0]);
    console.log(`O nome do aluno é: ${listaNomes[1]}`);

    //length - retorna a quantidade de itens de um array
    console.log(listaNomes.length);

    //Percorrendo um array com while
    console.log('-----Exemplo com while------');
    let cont = 0;
    let qtdItens = listaNomes.length; //stop

    while (cont < qtdItens) {
        console.log(`O nome do aluno é: ${listaNomes[cont]}`);
        cont += 1;
    }

    //Percorrendo um array com for
    console.log('-----Exemplo com for------');
    for (let i = 0; i < listaNomes.length; i++) {
        console.log(`O nome do aluno é: ${listaNomes[i]}`);
    }

    //Percorrendo um array com for in
    console.log('-----Exemplo com for in------');
    for (let i in listaNomes) {
        console.log(`O nome do aluno é: ${listaNomes[i]}`);
    }

    //Percorrendo um array com FOREACH
    console.log('-----Exemplo com FOREACH------');
    listaNomes.forEach(function (nome) {
        console.log(`O nome do aluno é: ${nome}`);
    });


    //Percorrendo um array com map
    console.log('-----Exemplo com map------');
    listaNomes.map(function (nome) {
        console.log(`O nome do aluno é: ${nome}`);
    });


}

const manipulandoDados = function () {
    //push adiciona novos itens no final da array,preservando a ordem dos elementos anteriores.
    listaProdutos.push('Memoria');
    listaProdutos.push('Fones', 'Gabinete', 'WebCam');
    console.table(listaProdutos);

    //unshifit - adiciona novos itens no inicio da array,reorganizando todos os elementos.
    listaProdutos.unshift('HD', 'Placa-mãe', 'SSD')
    console.table(listaProdutos);

    //pop - remove o ultimo elemento da array,preservando os elementos anteriores.
    listaProdutos.pop();
    console.table(listaProdutos);

    //shift - remove o primeiro elemento da array,re-organizando todos os elementos.
    listaProdutos.shift();
    console.table(listaProdutos);

    //slice - permite criar uma cópia de uma array.
    const novosProdutos = listaProdutos.slice();
    console.log(novosProdutos);

    //indexOf - permite buscar dentro um array um item. Retorna o indice do produto que eu passar no parametro.
    //Se o retorno for -1,o item não foi econtrado
    //Se o retorno for maior ou igual a 0,o item foi encontrado e ele retornara o índice.
    console.log(listaProdutos.indexOf('Fones'));

    //exemplo de utilização do indexOf
    if (listaProdutos.indexOf('Teclado') >= 0)
        console.log('Item encontrado')
    else
        console.log('Item não encontrado')
}

const removerProdutos = function (nomeProduto) {
    let nome = nomeProduto;
    let indice = listaProdutos.indexOf(nome);
    let status;

    //splice permite apagar um ou mais itens de uma array através do indice.
    //se for encaminhado somente o indice ele irá apagar todos os itens para baixo.
    //para limitar a quantidade de itens a ser apagado,devemos informar como segundo parametro.
    if (indice >= 0) {
        listaProdutos.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }
    return status;

}

//minha versao do desafio
const removerProdutos2 = function (nomeProduto2) {

    //slice - permite criar uma cópia de uma array.
    console.log('---exercicio-----');

    //criando uma copia da array
    const novosProdutos = listaProdutos.slice();

    console.log('--Lista da copia abaixo--');
    console.log(novosProdutos);

    //excluir um produto da nova Array novosProdutos
    
    novosProdutos.splice(novosProdutos.indexOf(nomeProduto2), 1);
    
    
    console.log('Consol da replica da lista  com o item excluido abaixo');
    console.log(novosProdutos);

    console.log('Consol da lista original:');
    console.log(listaProdutos);
     


    // if () {
    
    // }


}

//versao professor desafio
const removerItem = function(array,nomeItem){
    //entrada
    let nome =  nomeItem;
    let novoArray = array.slice();
    let indice = novoArray.indexOf(nome);
    let status;

    if(indice >=0){
        novoArray.splice(indice,1);
       status = true;
    }else{
        status = false;
    }
    //Saida
    if(status)
    return novoArray;
    else
    return false;

};

console.log(removerItem(listaNomes,'Maria'));
console.table(listaNomes);










//manipulandoDados();



// console.log(removerProdutos2('Teclado'));
// removerProdutos2();








//



