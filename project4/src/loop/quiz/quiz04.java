package loop.quiz;

public class quiz04 {

	// 반복횟수 : 100번
	// 반복코드 : 숫자가 2의배수 인지 학인하고, 출력하기
	// 변수 i의 용도는 여러가지..
	// 1. 조건문에 사용됨
	// 2. 2의 배수를 찾는데 사용됨.
	
	public static void main(String[] args) {
		
		for (int i = 1; i <=100; i++) {
			if (i % 2 == 0) { // i가 2의 배수인지 확인 후 출력
				System.out.println(i); // 2 4 6 . . . ~~~
			}
		}
	}

}
