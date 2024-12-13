function OlaMundo() {
  console.log('Olá Mundo')
}
OlaMundo();


function OlaNome(nome) {
  console.log(`Olá, ${nome}`)
}
OlaNome('Willy');


function dobraValor(numero) {
  let valor = numero * 2
  return console.log(valor)
}
dobraValor(20)



function mediaNumeros(num1, num2, num3) {
  let soma = (num1 + num2 + num3)
  let media = soma / 3
  console.log(`A média entre os numeros ${num1}, ${num2} e ${num3} é igual a = ${media}`)
}
mediaNumeros(10, 20, 30)


function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return console.log(`O maior valor é ${num1}`)
  } else if (num1 < num2) {
    return console.log(`O maior valor é ${num2}`)
  } else {
    return console.log(`Os numeros ${num1} e ${num2} são iguais.`)
  }

}
maiorNumero(564, 998)

function multiplica(numero) {
  let multiplica = numero * numero
  return console.log(`O valor de ${numero} multiplicado por ele mesmo é = ${multiplica}`)
}
multiplica(5)


//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
//a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function IMC(peso, altura) {
  let calculoAltura = altura * altura
  let imc = (peso / calculoAltura)
  console.log(`Seu IMC é de ${imc}`)
}

IMC(75, 1.88)


//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
  let fatorial = 1;

  if (numero < 0) {
    throw new Error("O número não deve ser negativo")
  }

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  console.log(`O fatorial de ${numero} é: ${fatorial}`)
  return fatorial;

}

calcularFatorial(5)


//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
//Para isso, considere a cotação do dólar igual a R$4,80.

function converteDolar(numero) {
  let dolar = 6
  let convertido = numero * dolar
  console.log(`O valor de R$${numero} é US$${convertido}`)
}

converteDolar(6)



//Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];



//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao
//com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagemDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagemDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagemDeProgramacao)



//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let listaNome = ['Willy', 'Aline', 'Amanda'];
console.log(listaNome[0])
console.log(listaNome[1])
console.log(listaNome[2])