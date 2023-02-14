/*
Esse arquivo será para o "back-end"

*/

//calcularMedia irá ser uma função
const calcularMedia = function (nota1, nota2, nota3, nota4) {


    let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;


    //Tratamentos 
    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log('ERRO:Entrada vazia');

        //letras
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('Você digitou letras, digite um número válido')

    } //Validação para entrada de numero maior que 100(inválida). As notas só podem ser de 1 a 100.
    else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log('Error : Nota maior que 100 não é valida,digite outra.')

        //Validação se for menor que 0,as notas não podem ser menor que 0.
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        console.log('Error: Nota menor que 0 não é válida');


    } else {

        if (media >= 70) {

            return media
            //meio termo na linha abaixo,se a nota for maior que 50 e menor que 69
            //vai chamar a funcao exame()
        } else if (media >= 50 && media <= 69) {
            exame()
            return media
        } else if (media <= 50)
            return media
    }
}


const exame = function (calcularMedia, notaDoExame) {
    let exame = (parseFloat(calcularMedia) + parseFloat(notaDoExame)) / 2
    if (notaDoExame >= 60) {
        return exame
    } else if (notaDoExame <= 59) {
        return exame

    }
}

const sexAl = function (sexoDoAluno) {
    if (sexoDoAluno == 'feminino' || sexoDoAluno == 'FEMININO') {
        return 'A Aluna'
        }else{
            return 'O Aluno'
        }
       
}

const sexProf = function (sexoDoProfessor) {
    if (sexoDoProfessor == 'feminino'|| sexoDoProfessor == 'FEMININO') {
        return 'Professora'
        }else{
            return 'Professor'
        }
}


//deixa global
module.exports = {
    calcularMedia,
    exame,
    sexAl,
    sexProf

}


