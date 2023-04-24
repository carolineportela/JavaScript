/* *********************************************
 * Objetivo : Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Autor : Carol
 * Data 14/04
 * Versão : 1.0 
 * Tem que ter uma controller pra cada tabela,essa controller é pra tbl_alunos
 ********************************************* */

//Inserir um novo aluno
const inserirAluno = function (dadosAluno) {


}

//Atualizar um aluno existente
const atualizarAluno = function (dadosAluno) {


}

//Excluir um aluno existente
const deletarAluno = function (id) {


}

//Retorna a lista de todos os alunos
const getAlunos = async function () {

    let dadosAlunosJSON = {};

    //Import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/DAO/alunoDAO.js');

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

//Retorna a lista de todos os alunos
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

module.exports = {
    getAlunos,
    getBuscarAlunoID
}