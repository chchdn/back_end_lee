package quiz;

public class Quiz7 {

	public static void main(String[] args) {
	


		boolean result1 = (1 == 2) || (1 < 2); //풀이: false || true, 논리합은 둘중하나라도 참이면 참을 도출
		System.out.println(result1); // 정답: true
		
		boolean result2 = true && false; //풀이: 
		System.out.println(result2); // 정답: false
		
		boolean result3 = !false; //풀이: ->
		System.out.println(result3); // 정답: true
		
		int x = 1;
		int y = 5;
		boolean result4 = (x<y) || (x==y); //풀이: true || false
		System.out.println(result4); // 정답: true
	}
}  
