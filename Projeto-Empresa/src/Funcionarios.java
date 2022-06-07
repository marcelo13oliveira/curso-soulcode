
public class Funcionarios {

    private String nome;
    private int idade;
    private String cargo;
    private String cituacao;
    
    public Funcionarios(String nome, int idade, String cargo, String cituacao) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.cituacao = cituacao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getCituacao() {
        return cituacao;
    }

    public void setCituacao(String cituacao) {
        this.cituacao = cituacao;
    }

    public String demitir() {
return this.cituacao = "Inativo";
    }

    public int aniversario() {
        return this.idade = idade+1;
    }

    public String salario() {
        return "Seu salario já foi pago.";
    }

public String trocarCargo(String cargo) {
if (cargo == "Desenvolvedor Pleno") {
return this.cargo = "Desenvolvedor Senior";
} else {
    return this.cargo = "Analista de acessibilidade";
}
}


}
