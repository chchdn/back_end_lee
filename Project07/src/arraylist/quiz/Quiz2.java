package arraylist.quiz;

import java.util.*;


public class Quiz2 {

	public static void main(String[] args) {
		ArrayList<Boolean> list = new ArrayList<Boolean>();
		list.add(true);
		list.add(true);
		list.add(false);
		
		System.out.println("=== 일반 for문 사용 ===");
		for(int i=0; i<list.size(); i++){
			boolean bool = list.get(i);
			System.out.print(bool + " ");
		}
		System.out.println();
		System.out.println("=== 람다식 for문 사용 ===");
		for(boolean bool : list){
			System.out.print(bool + " ");
		}
		
		int lastIndex = list.size()-1;
		
		System.out.println();
		System.out.println();
		System.out.println("첫번째 요소: " + list.get(0));
		System.out.println("마지막 요소: " + list.get(lastIndex));

	}
}
