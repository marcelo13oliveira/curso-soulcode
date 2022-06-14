import java.util.InputMismatchException;
import javax.swing.JOptionPane;

public class Principal {

    public static void main(String[] args) {
        int n1 =Integer.parseInt(JOptionPane.showInputDialog(null, "Digite um numero"));

        try {
            System.out.println(n1);
        
                    } catch (InputMismatchException e) {
                        JOptionPane.showMessageDialog(null, "Erro, você não digitou o numero correto.");
                    
                }
    }
}
