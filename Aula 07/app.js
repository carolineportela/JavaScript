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

//Import do arquivo de configuração das variaveis,constantes e funcoes globais.
var message = require('./controller/modulo/config.js')

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

//Define que os dados que irão chegar no body da requisição será no padrão JSON
const bodyParserJSON = bodyParser.json();

var controllerAluno = require('./controller/controller_aluno.js');

//EndPoint:Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

    //Recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getAlunos();

    //Valida se existe registros de aluno
    if (dadosAluno) {
        response.json(dadosAluno);
        response.status(200);
    } else {
        response.json();
        response.status(404);
    }

});

//EndPoint: Retorna o aluno filtrando pelo ID (id do banco de dados)
app.get('/v1/lion-school/aluno/id/:id', cors(), async function (request, response) {

    let idAluno = request.params.id;

    // let controllerAluno = require('./controller/controller_aluno');

    let dadosAlunoId = await controllerAluno.getBuscarAlunoID(idAluno);


    if (dadosAlunoId) {
        response.json(dadosAlunoId);
        response.status(200)
    } else {
        response.json();
        response.status(404);
    }


});

//EndPoint: Retorna o aluno filtrando pelo nome
app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function (request, response) {

    let nome = request.params.nome;
    console.log(nome);

    //Recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getBuscarAlunoNome(nome);

    if (dadosAluno) {
        response.json(dadosAluno);
        response.status(200);
    } else {
        response.json();
        response.status(404);
    }
})

//EndPoint: Post = Insere um aluno novo 
app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function (request, response) {

    //recebe o content-type da requisicao
    let contentType = request.headers['content-type'];

    //Validacao para receber dados apenas no formato JSON
    if (String(contentType).toLowerCase() === 'application/json') {
        //Recebe os dados encaminhados na requisição
        let dadosBody = request.body

        let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody);

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)

    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }

});

//EndPoint: Atualiza um aluno/dado existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJSON, async function (request, response) {
    //reccebe o content-type da requisicao
    let contentType = request.headers['content-type'];

    //Validacao para receber dados apenas no formato JSON
    if (String(contentType).toLowerCase() == 'application/json') {
        //Recebe o id do aluno pelo parametro
        let idAluno = request.params.id;

        //Recebe os dados do aluno encaminhado no corpo da requisição
        let dadosBody = request.body;

        //Encaminha os dados para a controller
        let resultDadosAluno = await controllerAluno.atualizarAluno(dadosBody, idAluno);

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)

    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }


});

//EndPoint: Exclui um aluno/dado existente, filtrando pelo nome
app.delete('/v1/lion-school/aluno/:id', cors(),async function (request, response) {


     let idAluno = request.params.id;

     let controllerAluno = require('./controller/controller_aluno.js')
     //Recebe os dados do aluno encaminhado no corpo da requisição
    
     let resultDadosAluno = await controllerAluno.deletarAluno(idAluno);

     if (resultDadosAluno) {
        response.json(resultDadosAluno);
        response.status(200);
    } else {
        response.json();
        response.status(404);
    }



});

app.listen(8080, function () {
    console.log('servidor aguardando requisicoes na porta 8080')
})