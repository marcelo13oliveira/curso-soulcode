import javax.swing.*;

public class Empresa {

    public static void main(String[] args) {
        double pagamento;
Funcionarios funcionario1 = new Funcionarios("Marcelo", 28, "Desenvolvedor JR", "Empregado");
Funcionarios funcionario2 = new Funcionarios("Augusto", 26, "Desenvolvedor Pleno", "Empregado");
Funcionarios funcionario3 = new Funcionarios("Oliveira", 25, "Desenvolvedor FullStack", "Empregado");
Funcionarios funcionario4 = new Funcionarios("André", 18, "Jovem aprendis", "Empregado");

    
funcionario1.setCituacao(funcionario1.demitir());
System.out.println("Atualmente nosso colaborador: " + funcionario1.getNome() + ", se encontra " +
funcionario1.getCituacao() + " da nossa empresa.");

funcionario2.setCargo(funcionario2.trocarCargo(funcionario2.getCargo()));
System.out.println("Meus parabéns " + funcionario2.getNome() + ", devido ao seus esforços e dedicação você foi promovido a, " + funcionario2.getCargo());

funcionario3.setIdade(funcionario3.aniversario());
System.out.println("Viva seu dia " + funcionario3.getNome() + ", hoje você faz " + funcionario3.getIdade() + " anos!");

pagamento = Double.parseDouble(JOptionPane.showInputDialog(null, "Digite quanto será pago: "));
System.out.println("Olá, " + funcionario4.getNome() + ", só passando para te avisar que seu " + funcionario4.salario() + " e seu salario do mês foi de: R$" + pagamento);
    
}

}
