/**********************************************
 * Objetivo : Criar uma  API para disponibilizar dados de estados e cidades
 * Autor : Carol
 * Data 10/03
 * Versão : 1.0
 
 **********************************************/

/* 
   Express - dependencia para realizar requisições de API pelo protocolo HTTP
   npm install express --save

   Cors - dependencia para gerenciar permissões de requisição da API
   npm install cors --save

   Body-Parser - dependencia que gerencia o corpo das requisissões
   npm install body-parser --save

   em casa rodar o npm i

   */

//Import das dependencias do projeto

//Dependencia para criar as requisicoes da API
const express = require('express');

// Dependencia para gerencia as permissoes da API
const cors = require('cors');

//Dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser');

//Import do arquivo no modulo (funçoes)
const estadosCidades = require('./modulo/estados_cidades.js');
const { application } = require('express');


//Cria um objeto com as caracteristicas do express
const app = express()


app.use((request, response, next) => {
    //API publica - fica disponivel para utilização de qualquer aplicação
    //API privada - somente o ip informado podera consumir dados da API

    //Define se a API será punlica ou privada
    response.header('Access-Control-Allow-Origin', '*');

    //Permite definir quais metodos poderão ser utilizados da API
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');

    //Envia para o cors() as regras de permissões 
    app.use(cors());

    //next serve pra ele seguir pro proximo callback
    next();

});

//EndPoints - pontos de paradas da minha API
//asynic - ele aguarda o processamento da funçao,assim que ele processar ele devolve os dados 
//Obs : se nao usar o async a requisição é perdida,pois o front acha a API fora do ar

            /*   EndPoints abaixo    */

//EndPoint para listar todos os estados
app.get('/estados', cors(), async function (request, response, next) {


    //chama a função que vai listar todos os estados
    let estados = estadosCidades.getListaDeEstados();

    //tratamento para tratar o sucesso da requisição
    if (estados) {
        response.status(200);
        response.json(estados);
    }
    else {
        response.status(500);
    }


});

//EndPoint para lstar os dados do estado filtrando pela sigla do estado.
app.get('/estado/:uf', cors(), async function (request, response, next) {

    let statusCode;
    let dadosEstado = {};

    //Recebe a sigla do estado que será enviada pela URL da requiição
    let siglaEstado = request.params.uf;

    //tratamento para validação de entrada de dados incorreta
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400;
        dadosEstado.message = 'Não foi possivel processar pois os dados de entrada (uf) que foi enviado não corresponde ao exigido,confira o valor,pois não pode ser vazio,precisa ser caracteres e ter 2 digitos.';
    } else {

        //chama a função para retornar os dados do estado  
        let estado = estadosCidades.getDadosEstado(siglaEstado);

        if (estado) {
            statusCode = 200;
            dadosEstado = estado
        } else {
            statusCode = 404;

        }
    }
    //retorna o codigo e o json
    response.status(statusCode);
    response.json(dadosEstado)

});

//EndPoint para retorna as informações referente a capital de um estado do Brasil, onde a sigla do estado será o critério de filtro.getCapitalEstado.]
app.get('/estadocapital/:uf', cors(), async function (request, response, next) {
    let statusCode;
    let dadosEstado = {}

    let siglaEstado = request.params.uf

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400;
        dadosEstado.message = 'Não foi possivel processar, pois os dados de entrada (uf) que foi enviado não corrensponde ao que foi exigido. Confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos.'
    } else {
        //Chama a função para retornar os dados do estado
        let capital = estadosCidades.getCapitalEstado(siglaEstado)

        if (capital) {
            statusCode = 200
            dadosEstado = capital;
        } else {
            statusCode = 404
        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
});


//EndPoint pra listar os estados de acordo com a regiao (getEstadosRegiao)
app.get('/estadoregiao/:regiao', cors(), async function (request, response, next) {
    let statusCode;
    let dadosEstado = {}

    let regiao = request.params.regiao

    if (regiao == '' || regiao == undefined || !isNaN(regiao)) {
        statusCode = 400;
        dadosEstado.message = 'Não foi possivel processar, pois os dados de entrada (uf) que foi enviado não corrensponde ao que foi exigido. Confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos.'
    } else {

        //Chama a função para retornar os dados do estado       
        let estadosDaRegiao = estadosCidades.getEstadosRegiao(regiao)
        if (estadosDaRegiao) {
            statusCode = 200
            dadosEstado = estadosDaRegiao;
        } else {
            statusCode = 404
        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(dadosEstado)

});

//EndPoint pra listar  as informações referente aos estados que formam a capital do Brasil (getCapitalPais)
app.get('/capital', cors(), async function (request, response, next) {
    //Chama a função que vai listar todos os estados
    let capitalPais = estadosCidades.getCapitalPais();

    //Tratamento para validar o sucesso da requisição
    if (capitalPais) {
        response.status(200);
        response.json(capitalPais);
    } else {
        response.status(500);
    }
});

 //EndPoint que retorna uma lista de cidades, filtrado pela sigla do estado (minha versao)
 app.get('/cidades/:uf', cors(), async function(request, response, next) {
    let statusCode
    let cidades = {}

    let siglaEstado = request.params.uf

    if(siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)){
        statusCode = 400;
        cidades.message = 'Não foi possivel processar, pois os dados de entrada (uf) que foi enviado não corrensponde ao que foi exigido. Confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos.';
    } else {
        //Chama a função para retornar os dados do estado
        let cidadesEstado = estadosCidades.getCidades(siglaEstado)

        if(cidadesEstado){
            statusCode = 200
            cidades = cidadesEstado
        } else {
            statusCode = 404
        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(cidades)
});

 //EndPoint que retorna uma lista de cidades, filtrado pela sigla do estado (versao professor)
 app.get('/v2/cidades', cors(), async function(request, response, next) {

     /*

      Existem 2 opcoes para receber variaveis sobre filtro:
      - params - que permite receber a variavel na estrutura da URL criada no endPoint (geralmente utilizado para ID (PK))

      - query - Também conhecido como queryString permite receber uma ou muitas variaveis para realizar filtros avançados

      */

     //recebe uma variavel encaminhada via QueryString
     let siglaEstado =  request.query.uf
    //  let cepEstado =  request.query.cep
    //  let populacaoEstado =  request.query.populacao;

    let statusCode
    let cidades = {}


    if(siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)){
        statusCode = 400;
        cidades.message = 'Não foi possivel processar, pois os dados de entrada (uf) que foi enviado não corrensponde ao que foi exigido. Confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos.';
    } else {
        //Chama a função para retornar os dados do estado
        let cidadesEstado = estadosCidades.getCidades(siglaEstado)

        if(cidadesEstado){
            statusCode = 200
            cidades = cidadesEstado
        } else {
            statusCode = 404
        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(cidades)
});

    

    //  console.log(siglaEstado);
    //  console.log(cepEstado);
    //  console.log(populacaoEstado);

 


 




//Roda o servico da API para ficar aguardando requisicoes
app.listen(8080, function () {

    console.log('rodei');
});