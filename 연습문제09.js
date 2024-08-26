// Q21. 7.5를 반올림하여 정수로 출력하세요.
let number = 7.5;
let roundedNumber = Math.round(number);
console.log(roundedNumber);  // 출력: 8




// Q22. 5.9를 무조건 내림하여 정수로 출력하세요.
let number1 = 5.9;
let flooredNumber = Math.floor(number1);
console.log(flooredNumber);  // 출력: 5




// Q23. 42의 부호를 나타내는 값을 출력하세요.
//  (양수면 1, 음수면-1, 0이면 0)
let number2 = 42;
let sign = Math.sign(number2);
console.log(sign);  // 출력: 1




//  Q24. 10, 20, 30, 40, 50 중 에서 가장 작은 숫자를 구하세요.
let smallestNumber = Math.min(10, 20, 30, 40, 50);
console.log(smallestNumber);  // 출력: 10




//  Q25. 3, 6, 9, 12, 15 중에서 가장 큰 숫자를 구하세요.
let largestNumber = Math.max(3, 6, 9, 12, 15);
console.log(largestNumber);  // 출력: 15




//  Q26. 1에서 6까지의 숫자를 무작위로 생성하는 6면체 주사위가 있습니다.
// 주사위를 던지고 숫자를 출력하세요.
// 1에서 6까지의 무작위 정수 생성 함수
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


// 주사위를 던지고 숫자를 출력
let diceRoll = rollDice();
console.log(diceRoll);



// Q27. 주사위를 10번 던지고, 각 결과를 배열에 저장하세요
// 1에서 6까지의 무작위 정수 생성 함수
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// 주사위를 10번 던지고 결과를 배열에 저장하는 함수
function rollDiceTenTimes() {
  let results = [];  // 결과를 저장할 배열

  for (let i = 0; i < 10; i++) {
      results.push(rollDice());  // 주사위를 던지고 결과를 배열에 추가
  }

  return results;
}

// 주사위를 10번 던지고 결과를 출력
let diceResults = rollDiceTenTimes();
console.log(diceResults);



// Q28. 다음과 같이 주사위 게임을 만들어 주세요. 배열과 함수를 포함하여 만들어 주세요.
//  1) 각 플레이어가 주사위를 3번씩 던집니다.
//  2) 주사위 결과의 합을 계산합니다.
//  3) 두 플레이어의 합을 비교하여 승자를 결정합니다.


// 1에서 6까지의 무작위 정수 생성 함수
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// 주사위를 n번 던져서 결과를 배열로 반환하는 함수
function rollDiceMultipleTimes(n) {
  const rolls = [];
  for (let i = 0; i < n; i++) {
      rolls.push(rollDice()); // 주사위를 던지고 결과를 배열에 추가
  }
  return rolls;
}

// 배열의 합을 계산하는 함수
function calculateSum(rolls) {
  return rolls.reduce((sum, roll) => sum + roll, 0);
}

// 승자를 결정하는 함수
function determineWinner(player1Score, player2Score) {
  if (player1Score > player2Score) {
      return "플레이어 1이 승리했습니다!";
  } else if (player1Score < player2Score) {
      return "플레이어 2가 승리했습니다!";
  } else {
      return "무승부입니다!";
  }
}

// 게임 실행 함수
function playDiceGame() {
  // 플레이어 1 주사위 결과
  const player1Rolls = rollDiceMultipleTimes(3); //[2,2,5]
  const player1Score = calculateSum(player1Rolls); //[6.121[]

// reduce: 누적값을 계산하는 함수
const sm1 = redeus((summ, n =>sum,n));




  // 플레이어 2 주사위 결과
  const player2Rolls = rollDiceMultipleTimes(3);
  const player2Score = calculateSum(player2Rolls);

  // 결과 출력
  console.log(`플레이어 1의 주사위 결과: ${player1Rolls}`);
  console.log(`플레이어 1의 점수: ${player1Score}`);
  console.log(`플레이어 2의 주사위 결과: ${player2Rolls}`);
  console.log(`플레이어 2의 점수: ${player2Score}`);

  // 승자 결정
  console.log(determineWinner(player1Score, player2Score));
}

// 게임 실행
playDiceGame();
