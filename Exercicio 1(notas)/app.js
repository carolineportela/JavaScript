/*
Esse arquivo será para a entrada de dados com o úsuario

*/



// Import para entrada de dados
var readline = require('readline');

var matematica = require('./modulo/calculoNotas');

//objeto para manipular as entradadas de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//nome do aluno
entradaDados.question('Nome do aluno:\n', function (nomeDoAluno) {
    let nomeAluno = nomeDoAluno;

    //nome do Professor
    entradaDados.question('Nome do Professor:\n', function (nomeDoProfessor) {
        let nomeProfessor = nomeDoProfessor;

        //sexo do aluno
        entradaDados.question('Sexo do aluno:\n', function (sexoDoAluno) {
            let sexoAluno = sexoDoAluno;

            //sexo do Professor
            entradaDados.question('Sexo do Professor:\n', function (sexoDoProfessor) {
                let sexoProfessor = sexoDoProfessor;

                //nome do curso
                entradaDados.question('Nome do curso:\n', function (nomeDoCurso) {
                    let nomeCurso = nomeDoCurso;

                    //nome da disciplina 
                    entradaDados.question('Nome da Disciplina:\n', function (nomeDaDisciplina) {
                        let nomeDisciplina = nomeDaDisciplina;

                        //nota 1
                        entradaDados.question('Digite a nota 1 : \n', function (nota1) {
                            let primeiraNota = nota1.replace(',', '.');

                            //nota 2 
                            entradaDados.question('Digite a nota 2 : \n', function (nota2) {
                                let segundaNota = nota2.replace(',', '.')

                                //nota 3
                                entradaDados.question('Digite a nota 3 : \n', function (nota3) {
                                    let terceiraNota = nota3.replace(',', '.')

                                    //nota 4
                                    entradaDados.question('Digite a nota 4 : \n', function (nota4) {
                                        let quartaNota = nota4.replace(',', '.')


                                        let sexAlu = matematica.sexAl(sexoDoAluno);
                                        let sexProf = matematica.sexProf(sexoDoProfessor);

                                        let mediaAluno = matematica.calcularMedia(nota1, nota2, nota3, nota4)
                                        console.log(mediaAluno);

                                        if (mediaAluno >= 70) {
                                            console.log(`${sexAlu} ${nomeAluno} foi APROVADO na disciplina ${nomeDisciplina}`);
                                            console.log(`Curso: ${nomeCurso}`);
                                            console.log(`${sexProf} : ${nomeProfessor}`);
                                            console.log(`Notas do aluno:${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}`);
                                            console.log(`Média final: ${mediaAluno}`);
                                        } else if (mediaAluno <= 49) {
                                            console.log(`${sexAlu} ${nomeAluno} foi REPROVADO na disciplina ${nomeDisciplina}`);
                                            console.log(`Curso: ${nomeCurso}`);
                                            console.log(`${sexProf} : ${nomeProfessor}`);
                                            console.log(`Notas do aluno:${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}`);
                                            console.log(`Média final: ${mediaAluno}`);

                                        }


                                        if (mediaAluno >= 50 && mediaAluno <= 69) {
                                            console.log('O aluno precisa fazer o exame');
                                            entradaDados.question('Digite a nota do exame: \n', function (notaDoExame) {

                                                let resultado = matematica.exame(mediaAluno, notaDoExame)

                                                if (resultado <= 59) {
                                                    console.log(`${sexAlu} ${nomeAluno} foi REPROVADO na disciplina ${nomeDisciplina}`);
                                                    console.log(`Curso: ${nomeCurso}`);
                                                    console.log(`${sexProf} : ${nomeProfessor}`);
                                                    console.log(`Notas do aluno:${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}, ${notaDoExame}`);
                                                    console.log(`Média final: ${mediaAluno}`);
                                                    console.log(`Média do exame: ${resultado}`);

                                                } else if (resultado >= 59) {
                                                    console.log(`${sexAlu} ${nomeAluno} foi APROVADO na disciplina ${nomeDisciplina}`);
                                                    console.log(`Curso: ${nomeCurso}`);
                                                    console.log(`${sexProf} : ${nomeProfessor}`);
                                                    console.log(`Notas do aluno:${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}, ${notaDoExame}`);
                                                    console.log(`Média final: ${mediaAluno}`);
                                                    console.log(`Média do exame: ${resultado}`);
                                                }

                                            });
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

     

