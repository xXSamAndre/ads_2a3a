/*IMC = peso / (altura * altura)
abaixo de 18.5 = Desnutrição
entre 18.5 e 25 = Peso normal
entre 25 e 30 = Sobrepeso
entre 30 e 35 = Obesidade I
entre 35 e 40 = Obesidade II
acima de 40 = Obesidade III
*/
let retornoImc
retornoImc = calcularIMC(100, 1.80)
console.log(retornoImc)
classificarIMC(retornoImc)

//classificarIMC(imc)

function calcularIMC(argPeso, argAltura){
     
    imc = argPeso / (argAltura ** 2)
    //console.log(imc)
    return imc
}

function classificarIMC(argIMC){
    if(argIMC < 18.5){
        console.log('Desnutrição')
    }
    else if(argIMC < 25){
        console.log('Peso Normal')
    }
    else if(argIMC < 30){
        console.log('Sobrepeso')
    }
    else if(argIMC < 35){
        console.log('Obesidade I')
    }
    else if(argIMC < 40){
        console.log('Obesidade II')
    }
    else
    {
        console.log('Obesidade III')
    }
}
