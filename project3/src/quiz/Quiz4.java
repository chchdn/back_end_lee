package quiz;

public class Quiz4 {

		public static void main(String[] args) {

			int mathScore = 90;
			int engSccore = 70;
			int korScore = 100;
			
			//총점
			int totalScore = mathScore + engSccore + korScore;
			System.out.println("총점: " + totalScore); //260
			
			//평균
			double avgScore1 = totalScore / 3.0;
			System.out.println("평균: " + avgScore1); //86.66666666666667

		}
	}
