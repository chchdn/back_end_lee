package main;
//디버깅 모드는 실행버튼 좌측에 있음 클릭하여 실행
//단축키 f6은 디버깅후 다음으로 넘어감 
//f8은 디버깅 모드를 종료함


public class Ex2 {

	public static void main(String[] args) {
		 
//		int x = 100;
//		int y = x++;
//		int z = x--;
//		
	    // 뒤에 + - 가들어가면 증강
		
//		System.out.println(x); //100
//		System.out.println(y); //100
//		System.out.println(z); //101
		
		
		// 앞에 + - 가 들어가면 하락
		
		int x = 100;
		int y = ++x;
		int z = --x;
		
		System.out.println(x); //100
		System.out.println(y); //101
		System.out.println(z); //100
	}

}
