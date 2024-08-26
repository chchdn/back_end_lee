// Q7. 배열의 요소중에서 20보다 큰 숫자를 찾고, 각요소에 2를 곱한 결과를 만드세요.

const arr = [10, 15, 20, 25, 30];
const result = arr.filter(x => x > 20).map(x => x * 2);

console.log(result);




// Q8. 주어진 문자열에서 각 단어의 첫 글자를 대문자로 변환하세요.
const str = "hello world, welcome to programming";
const result1 = str
  .split(' ') 
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' '); 

console.log(result1);





// Q9. 배열에서 문자열의 길이가 5보다 긴 요소만 찾아 대문자로 변환하세요.

const arr1 = ["apple", "banana", "cherry", "date", "fig", "grape"];

const result2 = arr1
  .filter(word => word.length > 5) // 길이가 5보다 긴 문자열만 선택
  .map(word => word.toUpperCase()); // 선택된 문자열을 대문자로 변환

console.log(result2);


// Q10. 상품을 관리하는 프로그램을 만들어 주세요.
// 1. 상품 목록 배열 생성
const products = [
  { name: "스마트폰", category: "전자제품", price: 300000 },
  { name: "마우스", category: "전자제품", price: 1200000 },
  { name: "키보드", category: "전자제품", price: 45000 },
  { name: "신발", category: "엑세서리", price: 80000 },
  { name: "플스3", category: "전자제품", price: 150000 },
  { name: "노트북", category: "전자제품", price: 400000 }
];

products.sort((a, b) => a.price - b.price);

console.log("정렬된 상품 목록:", products);

const filteredProducts = products.filter(
  product => product.price >= 50000 && product.price <= 500000 && product.category === "전자제품"
);

console.log("필터링된 상품 목록:", filteredProducts);

const formattedProducts = filteredProducts.map(product => ({
  ...product,
  price: new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(product.price)
}));

console.log("포맷된 상품 목록:", formattedProducts);





// Q11. 학생의 성적을 관리하는 프로그램을 만들어 주세요.

const students = [
  { name: "변태태훈", grade: "1학년", score: 85 },
  { name: "재깐둥이성민", grade: "1학년", score: 75 },
  { name: "무서운홍율이", grade: "2학년", score: 90 },
  { name: "가수중대", grade: "1학년", score: 83 },
  { name: "착한선생님", grade: "2학년", score: 78 },
  { name: "딜잘넣는주환이", grade: "1학년", score: 88 },
  { name: "지각바보영우", grade: "2학년", score: 88 },
  { name: "술사랑큰형님", grade: "2학년", score: 88 },
];

students.forEach(student => {
  if (student.score >= 85) {
    student.rank = "A";
  } else if (student.score >= 70) {
    student.rank = "B";
  } else {
    student.rank = "C";
  }
});

students.sort((a, b) => b.score - a.score);

console.log("Sorted Students:", students);

const totalScore = students
  .filter(student => student.grade === "1학년" && student.rank === "B")
  .reduce((sum, student) => sum + student.score, 0);

console.log("1학년 중 등급이 'B'인 학생들의 점수 총합:", totalScore);


// Q12. 상품의 재고를 관리하는 프로그램을 만들어 주세요.

const products1 = [
  { name: "감자칩", quantity: 20, price: 1300 },
  { name: "아이스크림", quantity: 5, price: 1120 },
  { name: "쿠키", quantity: 12, price: 1500 },
  { name: "탄산음료", quantity: 12, price: 1000 },
];


products1.push({ name: "바나나킥", quantity: 50, price: 1000 });

console.log("새로운 제품 추가 '바나나킥':", products1);


products1.forEach(product => {
  if (product.quantity > 0) {
    product.name += " (재고 있음)";
  }
});

console.log("재고가 있는 제품의 이름 변경:", products1);


products1.forEach(product => {
  if (product.quantity > 10) {
    product.price *= 0.9; 
  }
});

console.log("재고가 10개가 넘는 제품의 가격 할인:", products1);

const totalInventoryValue = products1.reduce(
  (total, product) => total + (product.quantity * product.price),
  0
);

console.log(
  "전체 제고의 총 가치:",
  totalInventoryValue.toLocaleString("ko-KR", { style: "currency", currency: "KRW" })
);
