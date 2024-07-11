/*faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcula e imprima sua média e a sua classificação conforme a tabela abaixo.

media = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
media menor que 5, reprovado
média entre 5 e 7, recuperação
média maior que 7, passou de semestre; */

let nota1 = 7;
let nota2 = 7;
let nota3 = 7;

const media = (nota1+nota2+nota3)/3;


if (media < 5) {
    console.log('Sua nota foi '+media+', Você está Reprovado!');
    
} else if (media >=5 & media <=7) {
    console.log('Sua nota foi '+media+', Você esta de recuperação!');
} else if(media>7) {
    console.log('Sua nota foi '+media+', Parabéns você passou de semestre')
}
else{
    console.log('Você não preencheu nenhuma nota')
}
