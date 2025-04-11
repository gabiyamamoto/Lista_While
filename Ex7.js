let moedas = 0;
let dinheiro = 0;

while (dinheiro < 12) {
    moedas++;
    dinheiro = dinheiro + 3;
    console.log (`Juntei R$${dinheiro} com ${moedas} moedas.`);
}