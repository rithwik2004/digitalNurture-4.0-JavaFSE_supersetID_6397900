package search;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(001, "Shoes", "Footwear"),
            new Product(002, "Laptop", "Electronics"),
            new Product(003, "Smartphone", "Electronics"),
            new Product(004, "Watch", "Accessories"),
            new Product(005, "Backpack", "Bags")
        };

        Product found = searchAlgo.linearSearch(products, 007);
        System.out.println("Linear Search Result:"+(found != null ? found:"Not Found"));

        Arrays.sort(products,(a,b)->Integer.compare(a.productId, b.productId));

        Product foundBinary = searchAlgo.binarySearch(products, 004);
        System.out.println("Binary Search Result:"+(foundBinary != null ? foundBinary :"Not FOund"));
    }

}
