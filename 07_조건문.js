// if문
const year = 2024;

if(year == 2024){ //이 조건값은 blooen이어야 하고 트루나 펄스여야함
  console.log("정답입니다.");
}


//조건을 만족/만족 아닐때 
if (year ==2023) {
  console.log("정답입니다.")
}else{
  console.log("오답입니다");
}


//if문

const year1 = 2025;

//if~elseif~else : 경우의 수가 여러가지일때 사용

if (year1 == 2024) {
  console.log("year1은 2024와 같습니다.");
} else if (year1 < 2024) {
  console.log("year1는 2024보다 작습니다.");
} else {
  console.log("year1는 2024보다 큽니다.");
}


//if문으로 버스 프로그램 만들기
let age = 25; //승객의 나이

if (age <= 7){
  busFare = 0;
} else if (age >= 8 && age <= 13){
  busFare = 450;
} else if (age >=14 && age <= 19){
  busFare =720;
} else if (age >= 20 && age < 70){
  busFare = 1200;
} else{
  busFare = 0;
}
console.log(busFare);

// switch문

const rank = 2;

switch (rank){
  case 1:
    console.log("금메달 입니다.");
    break;
    case 2: // rank == 2
    console.log("은메달 입니다.");
    break;
    case 3: // rank == 3
    console.log("동메달 입니다.");
    break;
    default:
    console.log("메달이 없습니다.");
    break;
}
