
public class Biblioteca {

    public static void main(String[] args) {
    LivroFisico l1 = new LivroFisico("Star Wars", 2);

    System.out.println(l1.verificarDisponibilidade());
    l1.emprestarLivro();
    l1.emprestarLivro();
    System.out.println(l1.verificarDisponibilidade());

    Ebook e1 = new Ebook("Arte da guerra.");

    System.out.println(e1.verificarDisponibilidade());
    e1.emprestarLivro();
    e1.emprestarLivro();
    System.out.println(e1.verificarDisponibilidade());
    }

}
