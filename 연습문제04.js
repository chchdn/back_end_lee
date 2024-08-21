

//Q4-1. 변수 x가 10보다 크고 20보다 작을 때 x를 출력하는 조건식을 작성하세요//

let x = 15; // x의 값이 15가 됨

if (x > 10 && x < 20) { // 조건: x가 10보다 크고 20보다 작을 때
  console.log(x);
}


//Q4-2. 문자열 str의 길이가 5보다 길면 str을 출력하는 조건식을 작성하세요//
// 예시 문자열 // 조건: str의 길이가 5보다 길 때
let str = "Hello, world!"; 

if (str.length > 5) { 
  console.log(str);
}



// Q4-3. 객체 person의 나이가 20살 미만이고 성별이 남자이면, 
// "남학생입니다"를 출력하는 조건식을 작성하세요
// 예시 나이  // 예시 성별
let person = {
  age: 18, 
  gender: '남자'
};

if (person.age < 20 && person.gender === '남자') {
  console.log("남학생입니다");
}




// Q4-4. 배열에 숫자 10이 포함되어 있으면"배열에 10이 있습니다"를 출력하고,
// 없으면" 10이 배열에 없습니다"를 출력하는 조건식을 작성하세요.

let array = [1, 2, 3, 10, 5]; 
if (array.includes(10)) { 
  console.log("배열에 10이 있습니다");
} else {
  console.log("10이 배열에 없습니다");
}


// Q5-1. 반복문을 사용하여 1부터 10까지 수 중에서 짝수만 출력하세요
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) { // i가 짝수인지 확인
    console.log(i);
  }
}


// Q5-2. 반복문을 사용하여 1부터 10까지 수 중에서 홀수만 큰 수부터 출력하세요
for (let i = 10; i >= 1; i--) {
  if (i % 2 !== 0) { 
    console.log(i);
  }
}


// Q5-3. 반복문을 사용하여 1부터 10까지 수의 합을 출력하세요
let sum01 = 0;
for (let i = 1; i <= 10; i++) {
  sum01 += i; 
}

console.log("1부터 10까지 수의 합:", sum01);



// Q5-4. 반복문을 사용하여 1부터 20까지 수 중에서 3의배수 또는5의 배수의 합을 구하세요.
// 합계를 저장할 변수 초기화
let hap = 0; 

for (let i = 1; i < 20; i++) {
  if (i % 3 == 0 || i % 5 == 0) { 
    hap = hap + i;
  }
}
console.log("1부터 20까지의 수 중에서 3의 배수 또는 5의 배수의 합:", hap);





// Q6. 배열에 있는 모든 숫자를 더해서 합을 구하세요.
let numbers = [1, 1, 2, 3, 4, 5]; // 예시 배열
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; 
}
console.log("배열의 합:", sum);



// Q7-1. 5 X 3 크기의 사각형을 별(*)로 출력 하세요.
// 너비가 5이고 높이가 3입니다.

let width = 5; 
let i = height = 3; 

for (let i = 0; i < height; i++) { 
  let star = ""; 
  for (let j = 0; j < width; j++) { 
    star += "*"; 
  }
  console.log(star); 
}


// Q7-2. 5 X 5 크기의 삼각형을 별(*)로 출력 하세요.
let height = 5; 
let row = 5;


for (let i = 1; i <= height; i++) { 
  let row = ""; 
  for (let j = 1; j <= i; j++) { 
    row += "*";
  }
  console.log(row); 
}







