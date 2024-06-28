package loop;

public class ex07 {

	public static void main(String[] args) {
		int sum = 0;
		for (int i = 1; i <= 10; i++) { 
			sum = sum + i;
		}
		System.out.println("1부터 10까지의 합은 " + sum + "입니다.");
			
			int i = 1; // 초기화식
			int sum2 = 0;
			while (i <= 10) { //조건식
				sum2 = sum2 + i;
				i++; //증감식
			}
			System.out.println("1부터 10까지의 합은" + sum  + "입니다");
		}
	}

