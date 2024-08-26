//Map : 키-값 쌍으로 데이터를 저장하는 객체
let userMap = new Map();

//새로운 데이터 추가
userMap.set("name" ,"홍길동");
userMap.set("email","abc@email.com");
userMap.set("phone","000-0000-0000");
console.log(userMap);

//데이터 수정
userMap.set("phone", 100);
console.log(userMap);

//특정 키의 데이터 가져오기
console.log(userMap.get("name")); // 홍길동

//특정 키가 존재하는지 확인
console.log(userMap.has("a")); // true

//특정 데이터 삭제
userMap.delete("name");
console.log(userMap);

//Map에 저장된 모든 데이터 출력
userMap.forEach(function (a,b){
console.log(a,b);
});


//구조 분해 할당으로 map의 각 키와 값을 출력
for (let [key,value] of userMap){
  console.log(key, value);
}


//저장된 모든값을 삭제
mySet.clear();
console.log(mySet); //Set {}