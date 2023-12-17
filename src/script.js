let resultado = rankeadas(100, 32);
function rankeadas(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  if (saldo < 10) {
    console.log("O Heroi tem o saldo de " + saldo + " e está no nivel Ferro!");
  } else if (saldo >= 11 && saldo <= 20) {
    console.log("O Heroi tem o saldo de " + saldo + " e está no nivel Bronze!");
  } else if (saldo >= 21 && saldo <= 50) {
    console.log("O Heroi tem o saldo de " + saldo + " e está no nivel Prata!");
  } else if (saldo >= 51 && saldo <= 80) {
    console.log("O Heroi tem o saldo de " + saldo + " e está no nivel Ouro!");
  } else if (saldo >= 81 && saldo <= 90) {
    console.log("O Heroi tem o saldo de " + saldo + " e está no nivel Diamante!");
  } else if (saldo >= 91 && saldo <= 100) {
    console.log("O Heroi tem o saldo de " + saldo + " e está no nivel Lendario!");
  } else if (saldo >= 101) {
    console.log("O Heroi tem o saldo de " + saldo + " e está no nivel Imortal!");
  }
  return saldo;
}
