let x;
function porcent(preco, porcentagem) {
  x = preco * (porcentagem / 100);
  return x;
}
let preco = prompt(`Digite um preço`);
let porcentagem = prompt(`Digite a porcentagem`);
porcent(preco, porcentagem);
document.write(`${porcentagem}% de ${preco} é: ${x}`);
