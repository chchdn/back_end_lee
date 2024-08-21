

// Q8. 두 개의 정수를 입력받아, 첫번째 수에서 두번째 수를 빼는 함수를 만드세요
// 입력: 5, 3 
// 반환: 2

function subtract(x, y) {
  return x - y;
}

const result = subtract(5, 3);
console.log(result); 




// Q9. 두 개의 정수를 입력받아, 그사이의 모든 숫자의 합을 반환하는 함수를 만드세요. 
// 입력: 3, 5 
// 반환: 12 (3 + 4 + 5)

function sumBetween(x, y) {
  let sum = 0;
  

  for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
    sum += i;
  }
  
  return sum;
}

const result2 = sumBetween(3, 5);
console.log(result2);




// Q10. 숫자 배열을 입력받아, 배열에서 가장 큰숫자를 반환하는 함수를 만드세요.
// 입력: [ -1, 5, 10, -3 ] 
// 반환: 10

function findMax(arr) {
  return Math.max(...arr); 
}

const result3 = findMax([-1, 5, 10, -3]);
console.log(result3); 




// Q11. 배열을 입력받아, 모두 같은 자료형으로 이루어져 있는지 확인하는 함수를 만드세요.
// 입력: [“a", “b", “c"] 
// 반환: true

function isUniformType(arr) {
  if (arr.length === 0) return true; 

  const firstType = typeof arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== firstType) {
      return false; 
    }
  }

  return true;
}


function printUniformType(arr) {
  if (isUniformType(arr)) {
    console.log(true); 
  }
}

printUniformType(["a", "b", "c"]); 
printUniformType([1, 2, "3"]);   



// Q12. 문자열 배열과 특정 문자열을 입력받아, 특정값이 있는지 확인하고 있으면 true 없으면 false를
// 반환하는 함수를만 드세요.
// 입력: ["apple", "banana", "cherry"], "banana" 
// 반환: true

function contains(arr, value) {
  return arr.includes(value);
}

console.log(contains(["apple", "banana", "cherry"], "banana")); 
console.log(contains(["apple", "banana", "cherry"], "grape"));  


// Q13. 정수를 입력받아, 그 숫자의 구구단을 출력하는 함수를 만드세요
// 입력: 2
// 출력: 2단 구구단 출력됨

function printMultiplicationTable(n) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

printMultiplicationTable(2);





// Q14. 다양한 값으로 구성된 배열을 입력받아,그중에서 문자열만 골라서 새로운 배열로 반환하는 함수를 만드세요
// 입력: [1, "apple", true, "banana", 42, "cherry"] 
// 반환: ["apple", "banana", "cherry"]

function filterStrings(arr) {
  return arr.filter(item => typeof item === 'string'); // 
}

const result4 = filterStrings([1, "apple", true, "banana", 42, "cherry"]);
console.log(result4);



// Q15. 숫자를 입력받아,팩토리얼을 계산하여 반환하는 함수를 만드세요
// 입력: 5 
// 반환: 120 (1*2*3*4*5)

function factorial(n) {
  if (n < 0) {
    return "Error: Factorial is not defined for negative numbers."; 
  }
  let result5 = 1;
  for (let i = 1; i <= n; i++) {
    result5 *= i;
  }
  return result5;
}

const result5 = factorial(5);
console.log(result5); 

//5!
// let result8 = factorial(5);
// console.log(result8);

//함수 호출 순서
// factorial(5)
// 5*factorial(4)
// factorial(3)
// factorial(2)
// factorial(1)

//함수 완료 순서

// factorial(1)
// factorial(2)
// factorial(3)
// factorial(4)
// factorial(5)


// Q16. 학생 객체 배열을 입력받아,특정 과목의 평균 점수를 반환하는 함수를 만드세요
// 입력: students, ‘math’ 
// 반환: 80

function averageScore(students, subject) {

  const scores = students
    .map(student => student.scores[subject]) 
    .filter(score => score !== undefined); 

  if (scores.length === 0) {
    return 0; 
  }


  const total = scores.reduce((acc, score) => acc + score, 0);
  return total / scores.length;
}

const students = [
  { name: '길동이', scores: { math: 90, english: 85 } },
  { name: '개동이', scores: { math: 70, english: 80 } },
  { name: '구공탄', scores: { math: 80, english: 70 } }
];

const result6 = averageScore(students, 'math');
console.log(result6); 

function factorial(n){
  if(n == 1){
    return 1;
  }
  return n * factorial(n -1);
}


// Q17. 직원 객체 배열을 입력 받아,특정 직급의 평균 월급을 반환하는 함수를 만드세요
// 입력: employees, ‘사원’ 
// 반환: 240
function averageSalary(employees, position) {
 
  const salaries = employees
    .filter(employee => employee.position === position) 
    .map(employee => employee.salary); 

  if (salaries.length === 0) {
    return 0;
  }

  const total = salaries.reduce((acc, salary) => acc + salary, 0);
  return total / salaries.length;
}

const employees = [
  { name: 'Alice', position: '사원', salary: 250 },
  { name: 'Bob', position: '대리', salary: 300 },
  { name: 'Charlie', position: '사원', salary: 230 },
  { name: 'David', position: '팀장', salary: 400 },
  { name: 'Eve', position: '사원', salary: 220 }
];

const result7 = averageSalary(employees, '사원');
console.log(result7); 



