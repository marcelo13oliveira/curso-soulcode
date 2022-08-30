function dados(soma) {
    let quant = prompt("Quantos dados dezeja lançar?");
    let dadosLancados = [];
    for (let i = 0;i < quant;i++) {
dadosLancados[i] = Math.floor(Math.random() * 6 + 1);
  soma = dadosLancados;
    }
    
    return soma;
}
console.log(dados());