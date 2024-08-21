// 기초 자료형

// string (문자열)
// 문자열은 "" 또는 ''로 표기해야 함
const myName = "둘리";
const email = 'user@naver.com';

// 문자열 안에 변수를 포함할 때는 백틱(`)과 ${변수}를 사용할 것
const hello = `hello ${myName}`; // 백틱 사용
console.log(hello);

// NUMBER (숫자)
const number = 123; // 정수
const opacity = 0.57; // 실수

// Boolean (~여부, 논리형)
let checked = true; // 'chacked' 오타 수정
let isShow = false; // 'inShow' 의미를 더 명확하게 변경

// undefined (아무것도 정의되지 않은 상태)
// 값을 대입하지 않으면 undefined가 자동으로 할당됨
let undef; // 'undeef' 오타 수정
console.log(undef);

// null 값이 비어있음을 의미
// undefined와 달리 개발자가 직접 값을 대입해야 함
let name = null;
console.log(name);
