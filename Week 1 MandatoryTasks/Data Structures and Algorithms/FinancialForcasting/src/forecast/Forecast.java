package forecast;

public class Forecast {

     public static double futureValue(double initialValue, double growthRate, int years) {
        
        if (years == 0) {
            return initialValue;
        }
        double previousValue = futureValue(initialValue, growthRate, years - 1);
        return previousValue * (1 + growthRate);
    }

    public static double futureValueMemo(double initialValue, double growthRate, int years, Double[] memo) {
        if (years == 0) {
            return initialValue;
        }

        if (memo[years] != null) {
            return memo[years];
        }

        memo[years] = futureValueMemo(initialValue, growthRate, years - 1, memo) * (1 + growthRate);
        return memo[years];
    }
}

