/* 

Objetivo : Arquivo destinado ao processamentodo cálculo de uma tabuada
Data 09/02
Autor : Carol Portela
Versão 1.0
beck-end

*/
//calcularTabuada retorna o processamento de uma tabuada qualquer até um contador qualquer.
//tivemos que converter a váriavel tabuada e maxContador pra String,para podermos usar o replace.Porque para usar o replace precisa ser uma String.
const calcularTabuada = function (multiplicando,maxMultiplicador){
    let tabuada = Number(String(multiplicando).replace(',','.'));
    let maxContador = Number(String(maxMultiplicador).replace(',','.'));
    let resultado;
    let status = true;
    let cont = 0; //essa é a váriavel que vai ser o contator,vai ser o start.
    
    //Tratamentos 
     if (tabuada == 0 || maxContador == 0)
    status = false;
    else if (isNaN(tabuada) || isNaN (maxContador))
    status = false;
    
    else{
    //looping para ser feito a tabuada do número mínimo até o número máximo.
        // while(cont <=maxContador){
        //     resultado = tabuada * cont;
        //     console.log(tabuada + 'x' + cont + '=' + resultado);
        //    // cont = cont + 1;
        //    // cont++;
        //     cont +=1;
        // }
        for(let cont = 0; cont <= maxContador; cont++){
            resultado = tabuada * cont;
            console.log(tabuada + 'x' + cont + '=' + resultado);

        }

    }
    return status;
};
// Se quisermos ver se irá retornar true ou false,podemos fazer um console assim -> console.log(calcularTabuada(5,9));
calcularTabuada(9,9);


module.exports = {
    calcularTabuada
}