package forecast;

public class Main {
    public static void main(String[] args) {
        double initial = 1000.0;
        double growthRate = 0.07; 
        int years = 10;

        double result = Forecast.futureValue(initial, growthRate, years);
        System.out.printf("Recursive Forecast Value after %d years: Rs.%.2f\n", years, result);

        Double[] memo = new Double[years + 1];
        double resultMemo = Forecast.futureValueMemo(initial, growthRate, years, memo);
        System.out.printf("Memoized Forecast Value after %d years: Rs.%.2f\n", years, resultMemo);
    }
}
