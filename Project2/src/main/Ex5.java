package main;

public class Ex5 {

	public static void main(String[] args) {
		
		//char은 한글자 문자 저장 가능
		
		char ch1 ='a';
		System.out.println(ch1); 
		
		
		// 문자를 int형으로 변환하면 그문자에 해당하는 아스키값이 출력됨
		System.out.println((int)ch1); //65
		
		char ch2 =66;
		System.out.println(ch2);
	
	char ch3 = '\n'; //한줄띄기를 의미하는 특수문자
	char ch4 = '\t'; //탭을 의미하는 특수문자
	
	System.out.print(ch3);
	System.out.print("안녕하세요");
	System.out.print(ch4);
	System.out.print("저는둘리입니다");

	System.out.print("\n안녕하세요\t저는둘리입니다");
	}
	
}
