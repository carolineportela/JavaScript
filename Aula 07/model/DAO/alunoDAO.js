/* *********************************************
 * Objetivo : Responsável pela manipulaçao de dados dos ALUNOS no banco de dados
 * Autor : Carol
 * Data 14/04
 * Versão : 1.0 
 ********************************************* */

//Import da biblioteca do prisma cliente,ele que permite dar alguns comandos.
var { PrismaClient } = require('@prisma/client');

//Instancia da classe PrismaClient
var prisma = new PrismaClient();


//Inserir dados do aluno no banco de dados
const insertAluno = async function (dadosAluno) {

    //scriptSQL para inserir dados
    let sql = `insert into tbl_aluno (
                nome,
                rg,
                cpf,
                data_nascimento,
                email
                ) values (
                '${dadosAluno.nome}',
                '${dadosAluno.rg}',
                '${dadosAluno.cpf}',
                '${dadosAluno.data_nascimento}',
                '${dadosAluno.email}'

            )`;

    //Executa o scrip sql no banco de dados        
    let resultStatus = await prisma.$executeRawUnsafe(sql);
    if (resultStatus) {
        return true;
    } else {
        return false;
    }

}

//Atualizar aluno existente no banco de dados
const updateAluno = async function (dadosAluno) {
    //ScriptSQL para atualizar os dados no banco de dados

    let sql = `update tbl_aluno set
                        nome = '${dadosAluno.nome}',
                        rg = '${dadosAluno.rg}',
                        cpf = '${dadosAluno.cpf}',
                        data_nascimento = '${dadosAluno.data_nascimento}',
                        email = '${dadosAluno.email}'
                where id = ${dadosAluno.id}`;
    console.log(sql);

    //Executa o scrip sql no banco de dados        
    let resultStatus = await prisma.$executeRawUnsafe(sql);
    if (resultStatus) {
        return true;
    } else {
        return false;
    }


};

//Excluir aluno existente no banco de dados
const deleteAluno = async function (id) {

    let idAluno = id;

    //Script para deletar o aluno
    let sql = `delete from tbl_aluno where id = ${idAluno}`
    
    let resultStatus = await prisma.$executeRawUnsafe(sql);

    if (resultStatus) {
        return true;
    } else {
        return false;
    }

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

//Retorna o aluno filtrando pelo nome
const selectByNameAluno = async function (name) {

    let nameAluno = name
    console.log(nameAluno);

    //Script para buscar um aluno filtrando pelo nome
    let sql = `select * from tbl_aluno where nome like '%${nameAluno}%'`;

    console.log(sql);
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida de o Banco de Dados retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false;
    }
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    insertAluno,
    selectByNameAluno,
    updateAluno,
    deleteAluno

}