// function saudacao(){
//     console.log('ola, oi')
// }
// aula sobre funcao, em uma funcao entra uma serie de comandos como o professor precisa de varias coisas para dar aula
 
//   function verificarPar (){
    // let entrada = prompt('digite um numero: ');
    // let numero = parseInt(entrada);
//     let numero = parseInt(prompt('digite um numero: '));
 
//     if(isNaN(numero)){
//     alert('por favor digite um numero valido');
//     return;
//  }
//     if (numero % 2 === 0){
//     alert(numero + "e par");
//     } else{
//     alert(numero + 'e impar');
//  }
//  }
//  verificarPar();
 
// var  resultado = 0;
 
// function somar(primeiroNumero, segundoNumero){
//     resultado = primeiroNumero + segundoNumero
// }
// function mostrar(mensagem){
//     console.log(mensagem)
// }
// somar (6, 3);
// mostrar(resultado);
 
 
//calculadora
// let n1 = parseInt(prompt('digite o primeiro numero'));
// let n2 = parseInt(prompt('digite o segundo numero'));
// let op = prompt('digite qual operacao deseja fazer: \n + \n - \n * \n /\n');
 
 
// function calculadora(primeiroNumero, segundoNumero, operacao){
//      if (operacao == '+'){
//         return primeiroNumero + segundoNumero
//      }
//     else if (operacao == '-'){
//         return primeiroNumero - segundoNumero
//     }
//     else if (operacao == '*'){
//         return primeiroNumero * segundoNumero
//     }
//      else if (operacao == '/'){
//         return primeiroNumero / segundoNumero
//     }
//     else{
//         return 0;
//     }
   
// }
// alert(calculadora(n1,n2,op));
 
//exercicio
 
// let primeiroNumero = parseInt(prompt('digite o primeiro numero'));
// let segundoNumero = parseInt(prompt('digite o segundo numero'));
// function calculadora(primeiroNumero, segundoNumero, operacao){
//      if (primeiroNum < segundoNumero){
//      return primeiroNumero - segundoNumero
//      }
//      else if (segundoNumero< primeiroNumero){
//      return primeiroNumero - segundoNumero
//      }else{
//         return 0;
//      }
//     }
 
// const somar = (a, b) => a+b
// const subtrair = (a, b)=> a-b
// const calcularICMS = x  => x * 0.21
 
// let precoProduto = 500
// let desconto = 50
 
// const icms = calcularICMS(precoProduto)
// const soma = somar(precoProduto, icms)
// const novoPreco = subtrair(soma, desconto)
// console.log(novoPreco)


// aula 06
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let numero = parseInt(prompt("inserir numero"));

// for (let i = 1; i <= 10; i++){
//     let resultado = numero * i;
//     console.log(numero + "X" + i + "=" + resultado)
// }


// for (let i = 1; i <= 5; i++){
//     if (i == 3){
//         break;
//     }
//     console.log(i);
// }
// let entrada = prompt("inserir um dado");
// while(entrada != "sair") {
//     alert("o usuario inseriu" + entrada);
//     entrada = prompt (" inserir o dado");
// }

let numero = 0;
do{
    numero = prompt("inserir numero");
    console.log(numero);

}while (parseInt(numero));