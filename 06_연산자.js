//대입연산자
let x =1; // x에 1을 저장

//비교연산자
console.log(1 == 2); //값이 같으면 참
console.log(1 != 2); // 값이 다르면 참
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);

console.log(1 == "1");
console.log(1 === "1");//이퀄= 이 3개면 값과 자료형이 모두 비교
//숫자만 있으면 넘버 ""가 있으면 데이터??


//산술연산자
console.log( 10 + 2 );
console.log( 10 - 2) ;
console.log( 10 * 2 );
console.log( 10 / 2 );
console.log( 10 % 2 );

console.log("좋은" + "하루되세요!");

//부호연산자
console.log(-x); // 부호를 반대로 변경하여 음수를 출력
console.log(x); // 원본데이터에는 영향이 없음

//증강연산자
console.log(++x); //0에서 ++2개라 2
console.log(x++); //0의 x값이 ++라 2
console.log(--x); // 2
console.log(x--); // x의 감소값전에 x가들어가서 2???

//논리연산자.
console.log(true && true); // true
console.log(true && false); // false 
console.log(true || true); // true 트루가 먼저면 무조건 트루다
console.log(true || false);
console.log(!true); // !이다여서 1


//상항 연산자
//점수가 90점 이상이면 pass 아니면 fail
let point = 85;
let grade = point >= 90 ? "pass" : "fall";
console.log(grade);

// type 연산자 : 값의 타입을 확인하는 연산자 / 
console.log(typeof "42"); // 'string'
console.log(typeof 42); // 'number'
console.log(typeof 1.123); // 'number'
console.log(typeof true); // 'boolean' 여기까진 기본
console.log(typeof function(){}); // 'function' 여기느 함수
console.log(typeof undefined); // 'undefined'  함수
console.log(typeof null); // 'object' 
console.log(typeof {}); // 'object' 오브젝트
console.log(typeof []); // 'object' 오브젝트















