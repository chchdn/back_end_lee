package loop.quiz;

public class quiz02 {

	public static void main(String[] args) {
		
		int num =11;
		int sum =0;
		
		while(num <= 20) {
			sum = sum + num;
			num++;
		}
		System.out.println("11에서 20까지의 합은" + sum + "입니다.");
	}

}
