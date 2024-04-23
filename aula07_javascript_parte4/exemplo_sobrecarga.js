class Operacoes{
    constructor(){

    }

    Somar(valorA, valorB){
        console.log("Resultado: " + (valorA + valorB));
    }

    Somar(valorA, valorB, valorC){
        console.log("Resultado: " + (valorA+valorB+valorC));
    }
}

var objeto = new Operacoes();
objeto.Somar(10,20);