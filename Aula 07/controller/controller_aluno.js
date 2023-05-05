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

    if ( dadosAluno.nome ==  ''         || dadosAluno.nome == undefined             || dadosAluno.nome.length > 100 ||
    dadosAluno.rg == ''                 || dadosAluno.rg == undefined               || dadosAluno.rg.length > 15 ||
    dadosAluno.cpf == ''                || dadosAluno.cpf == undefined              || dadosAluno.cpf.length > 15 ||
    dadosAluno.data_nascimento == ''    || dadosAluno.data_nascimento == undefined  || dadosAluno.data_nascimento.length > 10 ||
    dadosAluno.email == ''              || dadosAluno.email == undefined            || dadosAluno.email.length > 200  
    ) {
        return message.ERROR_REQUIRED_FIELDS
    }else{
        //Envia os dados para a model inserir no banco de dados
       let resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)
       
       //Valida se o banco de dados inseriu corretamente os dados
       if(resultDadosAluno)
       return message.SUCCESS_CREATED_ITEM
       else{
           return message.ERROR_INTERNAL_SERVER
       }
        
    }

}

//Atualizar um aluno existente
const atualizarAluno = async function (dadosAluno,idAluno) {

    if ( dadosAluno.nome ==  ''         || dadosAluno.nome == undefined             || dadosAluno.nome.length > 100 ||
    dadosAluno.rg == ''                 || dadosAluno.rg == undefined               || dadosAluno.rg.length > 15 ||
    dadosAluno.cpf == ''                || dadosAluno.cpf == undefined              || dadosAluno.cpf.length > 15 ||
    dadosAluno.data_nascimento == ''    || dadosAluno.data_nascimento == undefined  || dadosAluno.data_nascimento.length > 10 ||
    dadosAluno.email == ''              || dadosAluno.email == undefined            || dadosAluno.email.length > 200  
    ) {
        
        return message.ERROR_REQUIRED_FIELDS // Status code 400
        //Validação de id incorreto ou não informado
        }else if(idAluno == '' || idAluno == undefined || idAluno == isNaN(idAluno)){
        return message.ERROR_INVALID_ID
    }else{
        //Adiciona o id do aluno no JSON dos dados
        dadosAluno.id = idAluno;

        //Encaminha os dados para a model do aluno
        let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno);

        if(resultDadosAluno){
            return message.SUCCESS_UPDATED_ITEM    

        }else{
            return message.ERROR_INTERNAL_SERVER

        }
    }
}

//Excluir um aluno existente
const deletarAluno =  async function (idAluno) {
    
    let dadosAluno = await alunoDAO.deleteAluno(idAluno)

    if(dadosAluno){
        return message.SUCCESS_DELETE_ITEM   

    }else{
        return message.ERROR_INVALID_ID

    }
   
}

//Retorna a lista de todos os alunos
const getAlunos = async function () {

    let dadosAlunosJSON = {};

    //chama a funcao do arquivo DAO que irá retornar todos os registros do Banco de dados
    let dadosAluno = await alunoDAO.selectAllAlunos();

    if (dadosAluno) {
        //Criadno um JSON com o atributo alunos,para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length;
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false;
    }


}

//Retorna a lista de todos os alunos pelo ID
const getBuscarAlunoID = async function (id) {

    let idAluno = id

    let dadosAlunosIDJSON = {};

    //Import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/DAO/alunoDAO');

    let dadosAlunoId = await alunoDAO.selectByIdAluno(idAluno);

    if (dadosAlunoId) {
        dadosAlunosIDJSON.alunos = dadosAlunoId
        return dadosAlunosIDJSON
    } else {
        return false;
    }


}

//Retorna o aluno filtrando pelo nome
const getBuscarAlunoNome = async function (nome) {

    let nomeAluno = nome
    console.log(nomeAluno);

    let dadosAlunosJSON = {}

    let dadosAluno = await alunoDAO.selectByNameAluno(nomeAluno)
    
    if (dadosAluno){
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