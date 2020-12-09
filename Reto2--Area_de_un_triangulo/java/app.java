import java.util.Scanner;

public class app{
	public static void main(String[] arg){

        Scanner teclado = new Scanner(System.in);

        System.out.println("Por favor, ingresa la informacion necesaria de tu triangulo.");
        System.out.print("Valor de la base: ");
        double base = teclado.nextDouble();
        System.out.print("Valor de la altura: ");
        double altura = teclado.nextDouble();
        System.out.print("Tiene 2 lados iguales.(SI/NO): ");
        String isoseles = teclado.next();

        String  message = "El area de tu triangulo es " + areaTriangulo(base,altura) + " u^2 y es un ";

        if (esEquilatero(base, altura)) {
            message = message + "triangulo equilatero";
        } else if (isoseles.equalsIgnoreCase("SI")) {
            message = message + "triangulo isoseles";
        } else {
            message = message +  "triangulo escaleno";
        }

        System.out.println(message +".");

    }

    private static double areaTriangulo(double b,double h) {
        return (b * h) / 2;
    }

    private static boolean esEquilatero(double b,double h) {
        //pitagoras
        double h2 = Math.pow((b / 2),2) + Math.pow((h), 2);
        if (b / 22 == h2 * 4)
        return true;

        return false;
    }

}