// primeiro modo

/* let x = 0;

for (let i = 0; x < 10;i++) {
    x = i;
    console.log(`${x} X ${x} = ${(x * x)}`);
}
 */

// segundo modo

const geraTabuada = (numero) => {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${(numero * i)}`)
    }
}
geraTabuada(0)
geraTabuada(1)
geraTabuada(2)
geraTabuada(3)
geraTabuada(4)
geraTabuada(5)
geraTabuada(6)
geraTabuada(7)
geraTabuada(8)
geraTabuada(9)
geraTabuada(10)