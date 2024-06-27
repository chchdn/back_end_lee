package conditional.quiz;

//<switch문>
//학생의 점수를 저장할 변수를 선언하고 0~99 사이의 값을 저장하세요.
//
//점수가 90~99 이면 "수"
//점수가 80~89 이면 "우"
//점수가 70~79 이면 "미"
//그외는 "양"을 출력하세요.
public class quiz08 {

	public static void main(String[] args) {
		int score = 50;
		int value = score / 10;

		switch (value) {
		case 9:
			System.out.println("수");
			break;
		case 8:
			System.out.println("우");
			break;
		case 7:
			System.out.println("미");
			break;
		default:
			System.out.println("양");
			break;
		}
			//이와같이 조건이 복잡한 경우에는 shitch 문보다는 if문이 편리하다.
	}

}
