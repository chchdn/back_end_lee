package main;

public class Ex6 {

	public static void main(String[] args) {
		
		int x = 5;
		int y = 10;
		
		boolean result1 = (5 > 0) && (10 > 0);
		boolean result2 = (5 > 0) && (10 < 0);
		boolean result3 = (5 > 0) || (10 > 0);
		boolean result4 = (5 > 0) || (10 < 0);
		boolean result5 = !(5 < 0);
		
		System.out.println(result1);
		System.out.println(result2);
		System.out.println(result3);
		System.out.println(result4);
		System.out.println(result5);
	}

}
