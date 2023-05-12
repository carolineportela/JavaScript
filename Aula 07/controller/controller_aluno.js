/* *********************************************
 * Objetivo : Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Autor : Carol
 * Data 14/04
 * Versão : 1.0 
 * Tem que ter uma controller pra cada tabela,essa controller é pra tbl_alunos
 ********************************************* */

//Import do arquivo de configuração das variaveis,constantes e funcoes globais.
var message = require('./modulo/config.js')

//Import do arquivo DAO para acessar dados do aluno no BD
var alunoDAO = require('../model/DAO/alunoDAO.js')

//Inserir um novo aluno
const inserirAluno = async function (dadosAluno) {

    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 15 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200
    ) {
        return message.ERROR_REQUIRED_FIELDS
    } else {
        //Envia os dados para a model inserir no banco de dados
        let resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)

        //Valida se o banco de dados inseriu corretamente os dados
        if (resultDadosAluno) {

            //Chama o id que vai encontrar o ID gerado após o insert
            let novoAluno = await alunoDAO.selectLastId()

            let dadosAlunosJSON = {}
            dadosAlunosJSON.status = message.SUCCESS_CREATED_ITEM.status
            dadosAlunosJSON.aluno = novoAluno

            return dadosAlunosJSON
        }
        else {
            return message.ERROR_INTERNAL_SERVER
        }

    }

}

//Atualizar um aluno existente
const atualizarAluno = async function (dadosAluno, idAluno) {

    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 15 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200
    ) {

        return message.ERROR_REQUIRED_FIELDS // Status code 400
        //Validação de id incorreto ou não informado
    } else if (idAluno == '' || idAluno == undefined || idAluno == isNaN(idAluno)) {
        return message.ERROR_INVALID_ID
    } else {
        //Adiciona o id do aluno no JSON dos dados
        dadosAluno.id = idAluno;


        let statusId = await alunoDAO.selectByIdAluno(idAluno);

        //
        if (statusId) {
            //Encaminha os dados para a model do aluno
            let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno);

            if (resultDadosAluno) {

                let dadosAlunosJSON = {}

                dadosAlunosJSON.status = message.SUCCESS_UPDATED_ITEM.status
                dadosAlunosJSON.message = message.SUCCESS_UPDATED_ITEM.message
                dadosAlunosJSON.aluno = dadosAluno
                return dadosAlunosJSON
            } else
                return message.ERROR_INTERNAL_SERVER

        } else {
            return message.ERROR_NOT_FOUND
        }

    }

}


//Excluir um aluno existente
const deletarAluno = async function (id) {

    let statusId = await alunoDAO.selectByIdAluno(id);

    if (statusId) {
        if (id == '' || id == undefined || isNaN(id)) {
            return message.ERROR_INVALID_ID; //Status code 400
        } else {
            let resultDadosAluno = await alunoDAO.deleteAluno(id)

            if (resultDadosAluno) {
                return message.SUCCESS_DELETE_ITEM //Status code 200
            } else {
                return message.ERROR_INTERNAL_SERVER // Status code 500
            }
        }
    } else {
        return message.ERROR_NOT_FOUND // Status code 404
    }

}

//Retorna a lista de todos os alunos
const getAlunos = async function () {

    let dadosAlunosJSON = {};

    //chama a funcao do arquivo DAO que irá retornar todos os registros do Banco de dados
    let dadosAluno = await alunoDAO.selectAllAlunos();

    if (dadosAluno) {
        //Criadno um JSON com o atributo alunos,para encaminhar um array de alunos
        dadosAlunosJSON.status = message.SUCCESS_REQUEST.status
        dadosAlunosJSON.message = message.SUCCESS_REQUEST.message
        dadosAlunosJSON.quantidade = dadosAluno.length;
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return message.ERROR_NOT_FOUND
    }


}

//Retorna a lista de todos os alunos pelo ID
const getBuscarAlunoID = async function (id) {

    //Validacao do ID
    if (id == '' || id == undefined || isNaN(id)) {
        return message.ERROR_INVALID_ID

    } else {

        let dadosAlunosJSON = {};

        //chama a funcao do arquivo DAO que irá retornar todos os registros do Banco de dados
        let dadosAluno = await alunoDAO.selectByIdAluno(id);

        if (dadosAluno) {
            //Criadno um JSON com o atributo alunos,para encaminhar um array de alunos
            dadosAlunosJSON.status = message.SUCCESS_REQUEST.status
            dadosAlunosJSON.message = message.SUCCESS_REQUEST.message
            dadosAlunosJSON.alunos = dadosAluno
            return dadosAlunosJSON
        } else {
            return message.ERROR_NOT_FOUND
        }


    }
}

//Retorna o aluno filtrando pelo nome
const getBuscarAlunoNome = async function (nome) {

    let nomeAluno = nome
    console.log(nomeAluno);

    let dadosAlunosJSON = {}

    let dadosAluno = await alunoDAO.selectByNameAluno(nomeAluno)

    if (dadosAluno) {
        dadosAlunosJSON.aluno = dadosAluno
        return dadosAlunosJSON
    } else {
        return false;
    }
}

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    inserirAluno,
    getBuscarAlunoNome,
    atualizarAluno,
    deletarAluno

}