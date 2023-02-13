
   const calcularTabuada = function (numeroInicial, numeroFinal, contadorInicial, contadorFinal) {

    //tabuadaInicial a tabuada que se inicia 
    let tabuadaInicial = Number(String(numeroInicial).replace(',', '.'));

    //tabuadaFinal a última tabuada
    let tabuadaFinal = Number(String(numeroFinal).replace(',', '.'));

    //contInicial contador inicial da tabuada Inicial
    let contInicial = Number(String(contadorInicial).replace(',', '.'));

    //contFinal contador final da tabuada Final
    let contFinal = Number(String(contadorFinal).replace(',', '.'));

    let resultado;
    let status = true;
   

    if (tabuadaInicial == 0 || contInicial == 0 || contFinal == 0) {
        status = false;
    } else if (isNaN(tabuadaInicial) || isNaN(contInicial) || isNaN(contFinal)) {
        status = false;
    } else if (tabuadaInicial <2 || tabuadaInicial >100) {
        console.log('Erro: As entradas só podem  ser entre 2 e 100, não são permitidos outros valores');

    } else if (contInicial <1 || contInicial >50) {
        console.log('ERRO: O valor até onde será calculada a tabuada deverá ser entre 1 e 50');
    }

    else {
        //cont tá recebendo o valor da tabuadaInicial; cont se for menor ou igual estará recebendo o valor da tabuadaFinal,e vai adicionar mais um e realizar as tabuadas.
        for (let cont = tabuadaInicial; cont <= tabuadaFinal; cont++) {
            console.log('\nTabuada do:' + cont);

            //contador  tá recebendo a tabuadaInicial; contador se for menor ou igual ao contFinal vai vai adicionar mais um e mudar o valor da segunda casinha kk.
            for (let contador = contInicial ; contador <= contFinal; contador++) {
                //console.log(contador);
                resultado = contador * cont
                console.log(`${cont} X ${contador} = ${resultado}`);
            }
        }

    }
    return status;
};

calcularTabuada(2, 8, 3, 12);

module.exports = {
    calcularTabuada
}