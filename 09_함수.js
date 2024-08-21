// 함수 선언식

//함수 선언식으로 작성한 함수는 호이스팅 현상이 있음
hello();


function hello() {
  console.log("안녕하세요");
}

// 함수 호출
hello();
hello();

// 매개변수와 반환값이 있는 함수 선언
function sum(x, y) {
  return x + y;
}

// 함수 호출
const result = sum(2, 3); // 'sum' 함수명을 제대로 수정
console.log(result); // 5 출력



//함수표현식은 순차적으로 코드를 읽기 때문에, 호출코드가 위에 있으면 오류발생.
// 함수 표현식
hi(); 

const hi = function(){
  console.log("안녕~");
}


