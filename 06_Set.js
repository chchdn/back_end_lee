// Set: 중복되지 않는 값들을 저장하는 객체
const mySet = new Set();

// 새로운 값 추가
mySet.add(1);
mySet.add(2);
mySet.add(3);

// 중복된 값 추가해보기
mySet.add(1); // 이미 1이 저장되어 있어서 추가 안됨
console.log(mySet); // 출력: Set { 1, 2, 3 }

// set의 크기
console.log(mySet.size); // 출력: 3

// 값이 있는지 확인
console.log(mySet.has(1)); // 출력: true

// 특정 값을 삭제
mySet.delete(2);
console.log(mySet); // 출력: Set { 1, 3 }

// set에 저장된 모든 값 출력
// forEach: set의 모든 요소를 순회하며 함수 실행
mySet.forEach((item) => {
  console.log(item);
});


//fot of 반복문을 사용하여 Set 순회
for (let value of mySet){
  console.log(value);
}

//저장된 모든 값을 삭제
mySet.clear();
console.log(mySet); //Set {}

