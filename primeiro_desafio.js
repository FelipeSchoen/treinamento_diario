/* exercicio 1 - Faça um programa para calcular o valor de uma viagem

Voce terá 3 variaveis, sendo elas:
1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro por KM
3 - Distancia em KM da Viagem

*/

const combustivel = 5.49;//constante o vaor não irá mudar 
let consumoEmLitros = 10;
let distancia = 350;

let custoDaViagem = ((distancia/consumoEmLitros)*combustivel);

console.log(custoDaViagem.toFixed(2));
