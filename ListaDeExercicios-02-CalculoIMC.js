/* 
    2) O IMC - Indice de Massa Corporal é um critério da OMS - Organização Mundia de Saúde, para dar a indicação sobre a condição de peso de uma pessoa adulta.
    
    Formula do IMC
    IMC = Peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura do adulto mostre sua condição de acordo com a tabela abaixo:

    IMC em adultos condições
    - Abaixo de 18.5 = Abaixo do Peso;
    - Entre 18.5 e 25 Peso Normal;
    - Entre 25 e 30 Acima do Peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 = Obesidade Grave
    
    */

    let peso = 70;
    let altura = 1.72;

    const CalculoIMC = peso / (altura*altura);
        console.log(CalculoIMC.toFixed(1));

    if (CalculoIMC <18.5) {
        console.log('Seu IMC é de '+ (CalculoIMC.toFixed(1)) + ' Você está abaixo do peso');
    } else if (CalculoIMC >=18.5 && CalculoIMC <25) {
        console.log('Seu IMC é de '+ (CalculoIMC.toFixed(1)) + ' Parabéns você está no peso Ideal');    
    } else if (CalculoIMC >=25 && CalculoIMC <30) {
        console.log('Seu IMC é de '+ (CalculoIMC.toFixed(1)) + ' Você está Acima do peso');    
    } else if (CalculoIMC >=30 && CalculoIMC <40) {
        console.log('Seu IMC é de '+ (CalculoIMC.toFixed(1)) + ' Você está Obeso');    
    } else if (CalculoIMC >40) {
        console.log('Seu IMC é de '+ (CalculoIMC.toFixed(1)) + ' Você está com Obesidade Grave');    
    }else { 
        console.log('Você existe mesmo?');
    }