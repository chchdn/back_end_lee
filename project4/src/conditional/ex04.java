package conditional;

public class ex04 {

	public static void main(String[] args) {
		int rank = 6; // 순위

		switch (rank) {
		case 1: // rank 값이 1이면
			System.out.println("홍길동님은 금메달 입니다");
			break;
		case 2: // rank 값이 2이면
			System.out.println("홍길동님은 은메달 입니다");
			break; // break문을 만나고 switch문을 완전히 빠져나간다
		case 3: // if(rank==3) 조건식과 의미가 같지만 더 간결하게 표현된다
			System.out.println("홍길동님은 동메달 입니다");
			break;
		default: // 변수와 일치하는 값이 없으면
			System.out.println("아쉽게도 탈락하셨습니다.");
		}

	}
}
