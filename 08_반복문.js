// 숫자 1~10 출력하기 (while문)
let i = 1; // 초기화식

while (i <= 10) { // 조건식
  console.log(i);
  i++; // 증감식
}

// 동전 교환기에 지폐를 넣고 교환하기
let inputPrice = 8000;
let coinUnit = 500;
let coinCount = 0; // 동전 개수

while (inputPrice >= coinUnit) { // 입력한 금액이 동전 단위보다 크거나 같을 때만 반복
  inputPrice -= coinUnit; // inputPrice에서 coinUnit을 뺌
  coinCount++;
}

console.log("8000원을 동전 " + coinCount + "개로 변경함.");

// for문으로 1~10 출력하기
for (let i = 1; i <= 10; i++) { // 'let i = 1; <= 10;'에서 'i'를 추가하여 수정
  console.log(i);
}


let brands = ["애플", "구글", "페이스북" , "아마존" , "삼성전자"];

console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);

for (let i=0; i<5; i++){
  console.log(brands[i]);
}
  


// 음료수 자판기에서 음료 찾기

let productList = [
  {name: "솔의눈", price: 700},
  {name: "커피", price: 700},
  {name: "파워에이드", price: 1200},
  {name: "오렌지", price: 1000},
  {name: "보리차", price: 1200},
  {name: "밀키스", price: 800},
];

let inputCoin = 800;
let outputList = [];

// 800원으로 살 수 있는 음료수를 찾아내자
for (let i = 0; i < productList.length; i++) { // 'i++' 누락된 부분 수정
  if (productList[i].price <= inputCoin) {
    outputList.push(productList[i].name); // 조건에 맞는 음료를 outputList에 추가
  }
}

// 결과 출력
console.log("800원으로 살 수 있는 음료:", outputList);

//* for-in문 *//

let arr = [3,4,5];


//배열을 순회하면서 index를 꺼냄
for(let i in arr){ // 변수 in 배열
  console.log(i +", " + arr[i]);
}


//for-of문
for (let v of arr){
  console.log(v);
}

