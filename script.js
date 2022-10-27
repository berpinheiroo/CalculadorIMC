// DESAFIO 1 --------------------------------------------------------------------------------------------------

/*Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e
profissão, a partir disso você deve exibir um texto com todas essas informações pra
ele
Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg profissão: Programador
altura: 1.83(Aqui precisamos coletar o número quebrado, não vale usar tipo
caractere para altura hein)
Você exibe: Olá Giovanni, você tem 21 anos, é programador, tem 1.83M de
altura e pesa 74kg.*/

/*Utilizando o algoritmo anterior verifique se o usuário é maior ou menor de idade, se
ele for maior exiba na tela “Está liberado para tomar umas geladas”, se ele for
menos exiba “Sem gelada para você”*/

/*Faça um algoritmo que utilize a idade informada pelo usuário, e nos mostre sua
idade em meses, semanas e dias. Considerar ano com 365 dias, mês com 30 dias e
semana com 7 dias.*/

/*Utilizando os algoritmos já realizados como base, calcule o IMC do seu usuário e
informe a faixa dele, segue detalhes do cálculo do IMC e suas faixas.
O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula:
IMC = peso / (altura x altura)
O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2.
Depois
de obter o resultado, é possível verificar em que faixa o IMC se encontra, podendo
indicar:
- Magreza, quando o resultado é menor que 18,5 kg/m2;
- Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
- Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
- Obesidade, quando o resultado é maior que 30 kg/m2*/

/*Utilizando o mesmo algoritmo a partir da idade informada anteriormente por seu
usuário você deve informar o ano que o seu usuário nasceu(Considere o ano atual
como 2022 e não se preocupe com mês e dia, pode fazer essa conta usando
apenas o ano)*/

/* Utilizando os últimos exercícios como base agora você deve exibir todos os anos
que o usuário já viveu até o ano atual e informar qual a idade dele no determinado
ano.
ATENÇÃO: Aqui você deve utilizar uma estrutura de repetição(para)
Ex: Nasceu em 2018 você deve exibir:
2018 - 0 anos de idade
2019 - 1 anos de idade
2020 - 2 anos de idade
2021 - 3 anos de idade
2022 - 4 anos de idade */



var nome = prompt("Digite seu nome")
var idade = prompt("Digite sua idade")
var peso = prompt("Digite seu peso")
var altura = prompt("Digite sua altura")
var profissao = prompt("Digite sua profissao")
var semanas
var meses
var dias
var imc
var anoNas
var anoAtual = 2022

console.log("Olá", nome, "você tem", idade, "anos, é", profissao, ", tem", altura, "M de altura e pesa", peso, "kg")

if (idade >= 18) {
    console.log("Está liberado para tomar umas geladas")
} else {
    console.log("Sem gelada para você")
}

meses = (idade * 365) / 30
semanas = meses * 4
dias = semanas * 7

console.log("Sua idade em meses e:", meses)
console.log("Sua idade em semanas e:", semanas)
console.log("Sua idade em dias e:", dias)

imc = peso / (altura * altura)

console.log("Seu IMC e", imc.toFixed(1), "kg/m2")

if(imc < 18.5){
    console.log("Seu IMC indica magreza")
}

if(imc > 18.5 && imc < 24.9){
    console.log("Seu IMC indica normal")
}

if(imc > 24.9 && imc < 30){
    console.log("Seu IMC indica sobrepeso")
}

if(imc > 30){
    console.log("Seu IMC indica obesidade")
}

anoNas = anoAtual - idade
console.log("Voce nasceu no ano:", anoNas)

for(i = 0; i <= idade; i++){ 
   console.log(anoNas  + "- "  + i  + " anos de idade")
   anoNas = anoNas + 1
}

