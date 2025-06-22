package singleton;

public class logger {
    private static logger instance;
    private logger(){
        System.out.println("Logger instance created:");
    }

    public static logger getInstance(){
        if (instance == null){
            instance = new logger();
        }
        return instance;
    }

    public void log(String message){
        System.out.println("Log message:"+message);
    }

}
