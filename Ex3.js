let num = 1;
let soma = 0;
let contador = 0;

while (soma <= 40) {
    soma += num;
    console.log (`Somei ${contador} que deu: ${soma}`);
    contador++;
    num++;
}

console.log (`------------------------------`)
console.log (`A soma final é de ${soma}`);
console.log (`A quantidade de números somados foi de ${contador}`);