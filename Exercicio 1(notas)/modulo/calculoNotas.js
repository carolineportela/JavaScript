/*
Esse arquivo será para o "back-end"

*/

const calcularMedia = function (nota1, nota2, nota3, nota4) {

    //aluno,resultadoMedia,curso,disciplina,notaDoExame
    let aluno;
    let resultadoMedia;
    let disciplina;

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;




    //Tratamentos 
    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log('ERRO:Entrada vazia');

        //letras
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('Você digitou letras, dgite um número válido')

    } //Validação para entrada de numero maior que 100(inválida)
    else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log('Error : Nota maior que 100 não é valida,digite outra.')

        //Validação se for menor que 0
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        console.log('Error: Nota menor que 0 não é válida');


    } else {

        if (media >= 70) {
            console.log(media + '\nAprovado')
        } else if (media >= 50 && media <= 69) {
            exame() 
            console.log('Exame');
        } else if (media <= 50)
            console.log(media + '\nReprovadooooooo')
    }
}

const exame = function (calcularMedia, notaDoExame) {
    let exame = (calcularMedia + notaDoExame) / 2
    if (notaDoExame >= 60) {
        console.log('Com a nota exame Aprovado');
    } else if (notaDoExame <=59) {
        console.log( 'Com a nota exame Reprovado');
    }

}
calcularMedia(50, 60, 70, 50);
exame(58, 80)


