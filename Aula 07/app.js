/* *********************************************
 * Objetivo : API para integração entre back e banco de dados (GET,POST,PUT,DELETE)
 * Autor : Carol
 * Data 14/04
 * Versão : 1.0 
 ********************************************* */

//Import das bibliotecas para API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { application } = require('express');

//Cria um objeto conforme a classe do express
const app = express();

app.use((request, response, next) => {
    //Define quem poderá acessar a API()
    response.header('Access-Control-Allow-Origin', '*');

    //Define quais metodos serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');

    //Atribui as permissões as cors
    app.use(cors());

    next();

})

//CRUD (Creat,Read,Update e Delete)

/********************************
* Objetivo : API de controle de ALUNOS
* Data : 14/04/2023
* Autor : Carol
********************************/

//EndPoint:Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {
    let controllerAluno = require ('./controller/controller_aluno.js');

    //Recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getAlunos();

    //Valida se existe registros de aluno
    if(dadosAluno){
        response.json(dadosAluno);
        response.status(200);
    }else{
        response.json();
        response.status(404);
    }

});

//EndPoint: Retorna o aluno filtrando pelo ID (id do banco de dados)
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    let idAluno = request.params.id;

    let controllerAluno = require ('./controller/controller_aluno');

    let dadosAlunoId = await controllerAluno.getBuscarAlunoID(idAluno);

   
    if(dadosAlunoId){
        response.json(dadosAlunoId);
        response.status(200)
    }else{
        response.json();
        response.status(404);
    }


});

//EndPoint: Insere um aluno/dado novo 
app.post('/v1/lion-school/aluno', cors(), async function (request, response) {


});

//EndPoint: Insere um aluno/dado existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {


});

//EndPoint: Exclui um aluno/dado existente, filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {


});

app.listen(8080, function(){
    console.log('servidor aguardando requisicoes na porta 8080')
})