package quiz;

/*
 * <비교연산자>
 * 1.본인의 나이가 40세 이하라면 true를 출력하세요
 * 2.본인의 나이가 40세가 맞다면 true를 출력하세요
 * 3.본인의 나이가 40세가 아니라면 true를 출력하세요
 * */


public class Quiz5 {

	public static void main(String[] args) {
		
		int myage = 38;
		
		boolean age1 = (myage <= 40); //이하
		boolean age2 = (myage == 40); //이상
		boolean age3 = (myage != 40); //다르면

		System.out.println(age1);
		System.out.println(age2);
		System.out.println(age3);
		
	}

}
