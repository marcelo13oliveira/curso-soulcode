

enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}
 
type NomeDosColaboradores = {
    nome: string,
}

 function listaDeFuncionarios() {
    [
        { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
        { nome: "Maria", salário: 1500, setor: "vendas", presencial: false },
        { nome: "Salete", salário: 2200, setor: "financeiro", presencial: true },
        { nome: "João", salário: 2800, setor: "marketing", presencial: false },
        { nome: "Josué", salário: 5500, setor: "financeiro", presencial: true },
        { nome: "Natalia", salário: 4700, setor: "vendas", presencial: true },
        { nome: "Paola", salário: 3500, setor: "marketing", presencial: true }
    ]
    return listaDeFuncionarios()
}


function funcionarios(nome: NomeDosColaboradores, salario: number, setor: SETOR, presencial: boolean) {
    const funcionariosAtualizados = {
        nome: nome,
        salario: Number,
        setor: SETOR,
        presencial: Boolean
    }

    return funcionariosAtualizados
}


console.log(listaDeFuncionarios())