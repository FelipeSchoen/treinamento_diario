/* Exercecio 2 - Faça um programa para calcular o valor de uma viagem.
você terá 5 variavels, sendo elas?
1 - preço do etanol
2 - Preço Gasolina
3 - Otipo de Combustivel que esta no seu carro;
4 - Gasto médio de combustivel do carro por KM;
5 - distancia em km da viagem

Imprima no console o valor que sera gasto para realizar a viagem
*/

let PrecoEtanol = 3.35;
let PrecoGasolina = 5.69;
let TipoCombustivel = 'Gasolina';
let ConsumoCombustivelGasolina = 11;
let ConsumoCombustivelEtanol = 7.5;
let kmViagem = 350;

if (TipoCombustivel === 'Etanol') {
    const CalculoEtanol = ((((kmViagem / ConsumoCombustivelEtanol) * PrecoEtanol)).toFixed(2));
    console.log('Você irá Gastar ' + CalculoEtanol + ' de ' + TipoCombustivel);

} else{

    const CalculoGasolina = (((kmViagem/ConsumoCombustivelGasolina)*PrecoGasolina).toFixed(2));
    console.log('Você irá Gastar ' + CalculoGasolina + ' de ' + TipoCombustivel);;
} 
