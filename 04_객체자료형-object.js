// object 객체

// 객체는 {} 중괄호를 사용해서 작성할 것
const user = { // 'usur' 오타 수정
  name: "둘리", // 프로퍼티는 key-value 쌍 형태
  age: 10,
  get_name: function() { // 메서드 정의
    console.log(this.name);
  }
};

// 객체의 프로퍼티를 꺼내는 방법
console.log(user.name); // 'usur' -> 'user' 수정
console.log(user["age"]);
