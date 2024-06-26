package main;

public class Ex8 {

	public static void main(String[] args) {
		
		int motherAge = 70;
		int fatherAge = 65;
		
		
		String str = (motherAge > fatherAge) ? "어머니" : "아버지";
		System.out.println(str);

		char ch = (motherAge > fatherAge) ? 'm' : 'f';
		System.out.println(ch);

		int i = (motherAge > fatherAge) ? 1 : 2;
		System.out.println(i);

		boolean bool = (motherAge > fatherAge) ? true : false;
		System.out.println(bool);
		
		
 	}

}
