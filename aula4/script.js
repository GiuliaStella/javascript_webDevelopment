let nome = prompt('digite seu nome: ');

//alert('bem vindo, ' + nome);
alert(`bem vindo, ${nome}`);

console.log('rodando no console')
console.log(`nome que o usuario inseriu: ${nome}`);

let idade = parseInt(prompt('digite sua idade: '));
//da pra escrever de todas essas formas que a linha de cima da no mesmo:
//let idade2 = Number(prompt('digite sua idade: '));
//let idade = prompt('digite sua idade: ');
//let idadeInt = parseInt(idade);
//idade = parseInt(idade);
alert(`legal, voce tera ${idade + 25} daqui a 25 anos`);
