/*
3) Elabore um algoritimo que calcula o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabeça a seguir para ler qual a condição de pagamento escolhido e efetuar o calculo adequado.

Código condição de pagamento:
- A vista Debito, recebe 10% de Desconto;
- Á vista dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal da etiqueda sem juros;~
- Acima de duas vezesm preço normal da etiqueta mais juro de 3% por parcela.
*/

let valorEtiqueta = 100;
let CondicaoPagto = 1;
/* para Let CondicaoPagto etende-se:
    - 0 (zero) = Debito
    - 1 (um) = Dinheiro/pix
    - 2 (dois) = 2 vezes
    - 3 (três) = a partir de 3 é a quantidade de vezes para parcelamento
*/


if (CondicaoPagto === 0) {
    console.log(valorEtiqueta*(1-0.10));
} else if (CondicaoPagto === 1) {
    console.log('Valor total a pagar é R$ ' + valorEtiqueta*(1-0.15));    
}else if (CondicaoPagto === 2) {
    console.log('Valor total a pagar é R$ ' + valorEtiqueta);
}else if (CondicaoPagto >2) {
    console.log('Valor total a pagar é R$ ' + valorEtiqueta*(1+(CondicaoPagto*0.03)));
    
} else {
    console.log('converse com vendedor sobre a melhor forma de Pagamento');
    
}