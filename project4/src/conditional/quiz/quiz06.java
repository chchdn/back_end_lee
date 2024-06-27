package conditional.quiz;

public class quiz06 {

	public static void main(String[] args) {
	
		int score = 75; //점수
		
		if(score >= 90 && score<=99) { //학생의 점수가 90점 이상이면
			System.out.println("수 훌륭합니다");
		}else if(score >= 80) { //점수가 80이상
			System.out.println("우 잘하고 있습니다");
		}else if(score >= 70) { //점수가 70이상
			System.out.println("미 조금더 분발하세요");
		}else if(score >= 40) { //점수가 40이상
			System.out.println("양 이대로는 위험합니다");			
		}else { //모두 아니면
			System.out.println("가 다른진로를 찾으렴");
		}

	}
}

