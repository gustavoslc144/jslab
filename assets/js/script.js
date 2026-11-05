//Etapas 12, 13, 14, 15//

const nome = "Gustavo";
const idade = 26;
const aprovado = true;
const endereco = undefined;
const observacao = null;

const mensagem = `Nome: ${nome} | Idade: ${idade}`;

console.log(mensagem);


//Etapa 16//

const preco = 120;
const quantidade = 3;

const subtotal = preco * quantidade;

console.log(subtotal);


const a = 10
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Etapa 17//

const preco = 120;
const quantidade = 3;
const percentualDesconto = 10;

const subtotal = preco * quantidade;
const desconto = subtotal * (percentualDesconto / 100);
const total = subtotal - desconto;