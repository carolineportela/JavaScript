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

  //Cria um objeto com as caracteristicas do express
   const app = express()
  

   app.use((request,response,next) =>{
       //API publica - fica disponivel para utilização de qualquer aplicação
       //API privada - somente o ip informado podera consumir dados da API

      //Define se a API será punlica ou privada
       response.header('Access-Control-Allow-Origin', '*');
       
      //Permite definir quais metodos poderão ser utilizados da API
       response.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
       
       //Envia para o cors() as regras de permissões 
       app.use(cors());
       
       //next serve pra ele seguir pro proximo callback
       next();

   });

   //EndPoints - pontos de paradas da minha API
   //asynic - ele aguarda o processamento da funçao,assim que ele processar ele devolve os dados 
   //Obs : se nao usar o async a requisição é perdida,pois o front acha a API fora do ar

   //EndPoint para listar todos os estados
    app.get('/estados',cors(),async function(request,response,next){
        const estadosCidades = require ('./modulo/estados_cidades.js')
        let estados = estadosCidades.getListaDeEstados();
        
        response.status(200);
        response.json(estados);

    })

   app.listen(8080,function(){

    console.log('rodei');
   });