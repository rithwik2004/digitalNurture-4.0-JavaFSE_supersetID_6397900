package singleton;

public class Main {
    public static void main(String[] args) {
        logger logger1 = logger.getInstance();
        logger1.log("This is first log");
        logger logger2 = logger.getInstance();
        logger2.log("This is second log");

        if(logger1==logger2){
            System.out.println("Both logger instances are same");

        }else{
            System.out.println("Differenrt logger instances exist");
        }
    }
}
