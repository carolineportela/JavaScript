/* *********************************************
 * Objetivo : Arquivo responsável por padronizar as mensagens de ERRO,SUCESSO,Funções e variáveis para o projeto.
 * Autor : Carol
 * Data 28/04/2023
 * Versão : 1.0 
 **********************************************/

//Letras MAIUSCULAS são instancias

/******************** MENSAGENS DE ERRO **************************/
const ERROR_REQUIRED_FIELDS = { status: 400, message: 'Campos obrigatorios não foram preenchidos' }
const ERROR_INTERNAL_SERVER = { status: 500, message: 'Devido a um erro interno no servidor,não foi possível processar a requisição.' }
const ERROR_INVALID_ID = { status: 400, message: 'O ID informado na equisição não é valido ou não foi encaminhado.' }
const ERROR_INVALID_CONTENT_TYPE = {status:415, message: 'O tipo de mídia content type da solicitação não é compativel com o servidor. Tipo aceito : [application/json]'}
const ERROR_DELETE = {status:404, message: 'ERROR : Esse ID já foi excluido'}





/******************** MENSAGENS DE SUCESSO ***********************/
const SUCCESS_CREATED_ITEM = { status: 201, message: 'Item criado com sucesso.' }
const SUCCESS_UPDATED_ITEM = { status: 200, message: 'Item atualizado com sucesso.'}
const SUCCESS_DELETE_ITEM = { status: 200, message: 'Item deletado com sucesso.'}


module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER,
    ERROR_INVALID_ID,
    SUCCESS_UPDATED_ITEM,
    ERROR_INVALID_CONTENT_TYPE,
    SUCCESS_DELETE_ITEM,
    ERROR_DELETE
}