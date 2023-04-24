/* *********************************************
 * Objetivo : Responsável pela manipulaçao de dados dos ALUNOS no banco de dados
 * Autor : Carol
 * Data 14/04
 * Versão : 1.0 
 ********************************************* */

//Import da biblioteca do prisma cliente,ele que permite dar alguns comandos.
let { PrismaClient } = require('@prisma/client');

//Instancia da classe PrismaClient
let prisma = new PrismaClient();


//Inserir dados do aluno no banco de dados
const insertAluno = function (dadosAluno) {

}

//Atualizar aluno existente no banco de dados
const updateAluno = function (dadosAluno) {

}

//Excluir aluno existente no banco de dados
const deleteAluno = function (id) {

}

//Retornar todos os alunos do banco de dados
const selectAllAlunos = async function () {



    //SriptSQL para buscar todos os itens no banco de dados
    let sql = 'select * from tbl_aluno';

    //$queryRawUnsafe() - Permite interpretar uma variavel como um scriptSQL
    //$queryRaw('select * from tbl_aluno') - Permite interpretar o scriptSQL direto no metodo

    let rsAluno = await prisma.$queryRawUnsafe(sql);

    //Valida se o banco de dados retornou algum regisro
    if (rsAluno.length > 0) {
        return rsAluno;
    }
    else {
        return false;
    }

}

//Retornar o aluno filtrando pelo id 
const selectByIdAluno = async function (id) {
    let idAluno = id

    let sql = `select * from tbl_aluno where id = ${idAluno}`;

    let rsAlunoId = await prisma.$queryRawUnsafe(sql);

    if (rsAlunoId.length > 0) {
        return rsAlunoId;
    }
    else {
        return false;
    }
}

// //Retornar o aluno filtrando pelo nome
// const selectByNameAluno = async function (nome) {
//     let idAluno = id

//     let sql = `select * from tbl_aluno where nome like  ${nome}`;

//     let rsAlunoNome = await prisma.$queryRawUnsafe(sql);

//     if (rsAlunoNome.length > 0) {
//         return rsAlunoNome;
//     }
//     else {
//         return false;
//     }
// }

module.exports = {
    selectAllAlunos,
    selectByIdAluno
    // selectByIdAlunoNome

}