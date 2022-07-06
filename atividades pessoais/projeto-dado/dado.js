function jogaDado(dadoNumero, classe) {
    dadoNumero = prompt("Digite um número entre 1 a 20:");
    let resultado;    
    if(dadoNumero >= 1 && dadoNumero < 4){
        resultado = "Sua classe é: Guerreiro(a)";
    } else if(dadoNumero < 8) {
        resultado = "Sua classe é: Ladino(a)";
    } else if(dadoNumero < 12){
        resultado = "Sua classe é: Curandeiro(a)";
    } else if(dadoNumero < 16){
        resultado = "Sua classe é: Arqueiro(a)";
    } else if(dadoNumero > 20 || dadoNumero < 1){
        resultado = "Valor inválido, coloque um valor de 1 a 20";
    } else {
        resultado = "Sua classe é: Feiticeira(o)";
    }
    return resultado;
}

document.write(jogaDado());