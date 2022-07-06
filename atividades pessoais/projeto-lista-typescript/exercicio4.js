var SETOR;
(function (SETOR) {
    SETOR["MARKETING"] = "marketing";
    SETOR["VENDAS"] = "vendas";
    SETOR["FINANCEIRO"] = "financeiro";
})(SETOR || (SETOR = {}));
function listaDeFuncionarios() {
    [
        { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
        { nome: "Maria", salário: 1500, setor: "vendas", presencial: false },
        { nome: "Salete", salário: 2200, setor: "financeiro", presencial: true },
        { nome: "João", salário: 2800, setor: "marketing", presencial: false },
        { nome: "Josué", salário: 5500, setor: "financeiro", presencial: true },
        { nome: "Natalia", salário: 4700, setor: "vendas", presencial: true },
        { nome: "Paola", salário: 3500, setor: "marketing", presencial: true }
    ];
    
}
function funcionarios(nome, salario, setor, presencial) {
    var funcionariosAtualizados = {
        nome: nome,
        salario: Number,
        setor: SETOR,
        presencial: Boolean
    };
    return funcionariosAtualizados;
}
console.log(listaDeFuncionarios());
