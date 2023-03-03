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


    /*
    Falta fazer retornar true ou false.
    */


}

//versao professor desafio
const removerItem = function (array, nomeItem) {
    //entrada
    let nome = nomeItem;
    let novoArray = array.slice();
    let indice = novoArray.indexOf(nome);
    let status;

    //Processamento da função
    if (indice >= 0) {
        novoArray.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }
    //Saida
    if (status)
        return novoArray;
    else
        return false;

};

/* --------- Aula 27/02 abaixo ------------*/

/*
      *JSON é compostor:chave (atribuo) e valor

      Chave    Valor   Chave      Valor       Chave   Valor
      *{nome :'José', celular : '4141-6323', email: 'jose@gmail'}

                    */

const listagemProdutos = function () {

    /* 
     Forma numero 1 de criar um JSON e já atribuir chaves e valores.    
     let listProdutosJSON = { produtos: listaProdutos, clientes: listaNomes };
    */

    /*  Forma número 2 de criar um JSON,onde as chaves e valores são atribuidas no decorrer do projeto.
    let listProdutosJSON = {}; */

    /* listProdutosJSON.produtos = listaProdutos;
    listProdutosJSON.clientes = listaNomes; */

    /* Extraindo valores de um JSON e array.
    //console pra lista de produtos com JSON
    console.log(listProdutosJSON);

    //console pra aparecer somente o nome  mouse
    console.log(listProdutosJSON.produtos[1]);

    //console pra aparecer somente o nome Carlos
    console.log(listProdutosJSON.clientes[5]); */

    let listProdutosJSON = {};
    let listProdutosArray = [

        {
            nome: 'Monitor',
            quantidade: '300',
            marca: 'Dell',
            valor: 899,
            descricao: 'Monitor Dell..',
            codigoDoProduto: 2
        }, {
            nome: 'Monitor',
            quantidade: '400',
            marca: 'LG',
            valor: 899,
            descricao: 'Monitor LG..',
            codigoDoProduto: 3

        }, {
            nome: 'Teclado',
            quantidade: '300',
            marca: 'DELL',
            valor: 899,
            descricao: 'Teclado DELL..',
            codigoDoProduto: 4
        }, {
            nome: 'Teclado',
            quantidade: '300',
            marca: 'LG',
            valor: 899,
            descricao: 'Teclado LG..',
            codigoDoProduto: 5

        }, {
            nome: 'Teclado',
            quantidade: '300',
            marca: 'Logitech',
            valor: 899,
            descricao: 'Teclado Logitech..',
            codigoDoProduto: 6

        }, {
            nome: 'Teclado',
            quantidade: '300',
            marca: 'Razer',
            valor: 899,
            descricao: 'Teclado Razer..',
            codigoDoProduto: 7

        }, {
            nome: 'Mouse',
            quantidade: '300',
            marca: 'Dell',
            valor: 899,
            descricao: 'Mouse Dell..',
            codigoDoProduto: 8
        }, {
            nome: 'Mouse',
            quantidade: '300',
            marca: 'Razer',
            valor: 899,
            descricao: 'Mouse Razer..',
            codigoDoProduto: 9
        }
    ];

    //Arrays para cores
    let listCoresDellArray = ['Preto', 'Branco', 'Cinza'];
    let listCoresLgArray = ['Preto', 'Cinza'];
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul'];
    let listCoresMouseArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo'];

    //Arrays para modelos
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K', 'IPS'];
    let listModelosTeclados = ['Mecanico', 'Semi-Mecanico', 'Membrana', 'Óptico'];


    //Adiciona o array de produtos dentro de um JSON
    listProdutosJSON.produtos = listProdutosArray;

    //Adicionar cores ao monitor Dell
    listProdutosJSON.produtos[0].cores = listCoresDellArray;

    //Adicionar cores ao moniror LG
    listProdutosJSON.produtos[1].cores = listCoresLgArray;

    //Adicionar cores aos teclados Dell
    listProdutosJSON.produtos[2].cores = listCoresDellArray;

    //Adicionar cores aos teclados LG
    listProdutosJSON.produtos[3].cores = listCoresTecladoArray;

    //Adicionar cores aos teclados Logtech
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray;

    //Adicionar cores aos teclados razer
    listProdutosJSON.produtos[5].cores = listCoresTecladoArray;

    //Adicionar cores aos mouses Dell
    listProdutosJSON.produtos[6].cores = listCoresDellArray;

    //Adicionar cores aos mouses Razer
    listProdutosJSON.produtos[7].cores = listCoresMouseArray;

    //Adicionar os modelos aos monitores
    listProdutosJSON.produtos[0].modelos = listModelosMonitor;
    listProdutosJSON.produtos[1].modelos = listModelosMonitor;

    //Addicionar modelos aos teclados
    listProdutosJSON.produtos[2].modelos = listModelosTeclados;
    listProdutosJSON.produtos[3].modelos = listModelosTeclados;
    listProdutosJSON.produtos[4].modelos = listModelosTeclados;
    listProdutosJSON.produtos[5].modelos = listModelosTeclados;

    console.log(listProdutosArray)

    // console.log('Nome:' + listProdutosJSON.produtos[1].nome);
    // console.log('Marca:' + listProdutosJSON.produtos[1].marca);
    // console.log('Valor:' + listProdutosJSON.produtos[1].valor);
    // console.log('Cor:' + listProdutosJSON.produtos[1].cores[1]);
    // console.log('Modelo:' + listProdutosJSON.produtos[1].modelos[1]);

    //--Versão Professor--fazer aparecer nome do produto,marca,valor,todas as cores existentes p cada um dos produtos,e todos modelos existentes p cada um dos produtos.
    //percorre o array de produtos para listar os itens
    listProdutosJSON.produtos.forEach(function (itemProduto) {
        console.log('Nome:' + itemProduto.nome);
        console.log('Marca:' + itemProduto.marca);
        console.log('Valor:' + itemProduto.valor);

        if (itemProduto.cores != undefined) {
            //percorre o array de cores que está dentro do Array de produtos que é representado pelo (item)
            itemProduto.cores.forEach(function (itemCor) {
                console.log('*** Cores' + itemCor)
            });

        }
        if (itemProduto.modelos != undefined) {
            itemProduto.modelos.forEach(function (itemModelo) {
                console.log('* Modelo' + itemModelo);
            });
        }
        console.log('---------------');

    });


    // console.log(listProdutosJSON.produtos[1].nome);
    // console.log(listProdutosJSON.produtos[1].marca);
    // console.log(listProdutosJSON.produtos[1].valor);


    //--tentamos na sala mas n conseguimos arrumar o for--fazer aparecer nome do produto,marca,valor,todas as cores existentes p cada um dos produtos,e todos modelos existentes p cada um dos produtos.

    // console.log('-----Exemplo com FOREACH------');
    // listProdutosJSON.forEach(function (caracteristicas) {
    //     console.log();
    // });

    /*  nosso for do final da aula
    for (let contador in listProdutosJSON.produtos) {
         console.log('O nome do produto é:' + listProdutosJSON.produtos[contador].nome);   
         console.log('A marca do produto é:' + listProdutosJSON.produtos[contador].marca);
         console.log('O valor do produto é:' + listProdutosJSON.produtos[contador].valor);
       
    
         for (let contadorCores = 0; contadorCores < contador; contadorCores++) {
             console.log('Cores:' + listProdutosJSON.produtos[contadorCores].cores);
            
             
         }
          console.log('---------------------------')
         //  for(let contadorDois in listProdutosJSON.produtos){
         //     console.log('O modelo do produto é: ' + listProdutosJSON.produtos[contadorDois].modelos) 
             
         //  }
    
     }*/



};

listagemProdutos();












// //lista de nomes original
// console.table(listaNomes);

// //copia da lista original
// console.log(removerItem(listaNomes, 'Maria'));


//manipulandoDados();


// console.log(removerProdutos2('Teclado'));
// removerProdutos2();



/*
    Millena pediu pra copiar
    for(let contProdutos =0; contProdutos<listProdutosJSON.produtos.length; contProdutos++){
   console.log('Nome:' + listProdutosJSON.produtos[contProdutos].nome);
   console.log('Marca:' + listProdutosJSON.produtos[contProdutos].marca);
 
   for (let contCores =0; contCores < listProdutosJSON.produtos[contProdutos].cores.length;contCores){
       console.log('Cores'+  contCores < listProdutosJSON.produtos[contProdutos].cores[contCores]);
   }
  
}
*/
