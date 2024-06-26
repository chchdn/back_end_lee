package main;

public class Ex4 {

	public static void main(String[] args) {
		
		//정수형 변수는 양수 or 음수 or 0 저장 가능
		short s = 10;
		byte  b = 10;
		int i = 200;
		long l = 10;
		l = 12345678900l;  
		
		//long타입에 값을 담을 때, int형 범위를 넘어가면 식별자를 붙여야함
		
		System.out.println( s + b ); 
		//short + byte -> int + int = 10 = + 10 = 20
		
	} 

}
