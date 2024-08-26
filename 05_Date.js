//date : 날짜와 시간을 다루는 객체

// 현재 날짜와 시간을 기준으로 Date 객체 생성
var now = new Date();
console.log(now);; // 현재 시간


//특정 날짜와 시간을 지정해서 Date 객체 생성
//(연도,월,일,시,분,밀리초)



// 현재 시간을 표시
var now = new Date();
console.log("현재 시간:", now); // 현재 시간을 출력
console.log("로컬 시간대:", now.toLocaleString()); // 로컬 시간대 형식으로 출력

// 특정 날짜와 시간 설정
var date1 = new Date(2024, 1, 1, 10, 10, 10, 0); // 2024년 2월 1일 10:10:10
console.log("Date1:", date1.toLocaleString()); // 설정된 날짜와 시간 출력

// 잘못된 오타 수정 ("Octrober" -> "October")
var date2 = new Date("October 13, 2024 11:11:11");
console.log("Date2:", date2.toLocaleDateString()); // 설정된 날짜만 출력

// ISO 형식 오류 수정 ("2024-10013T11:11:11" -> "2024-10-13T11:11:11")
var date3 = new Date("2024-10-13T11:11:11");
console.log("Date3:", date3.toLocaleDateString()); // 설정된 날짜만 출력

// 일과 시간 변경
date3.setDate(15);
date3.setHours(15);
console.log(date3.toLocaleDateString());


// 현재 시간(밀리초 단위) 출력
console.log(Date.now()); // 현재 시간을 밀리초 단위로 출력

// 현재 시간으로 Date 객체 생성 후 연도, 월, 일 등을 가져오기
var date4 = new Date();

var year = date4.getFullYear(); // 연도
console.log("year:", year); // "year: 2024"와 같은 출력이 예상됩니다

var month = date4.getMonth(); // 월 (0부터 시작하므로 0은 1월, 11은 12월)
console.log("month:", month + 1); // 실제 월은 1을 더해줘야 함

var day = date4.getDate(); // 일
console.log("day:", day); // 일 출력

var dayOfWeek = date4.getDay(); // 요일 (0부터 시작, 0은 일요일, 6은 토요일)
console.log("day of week:", dayOfWeek); // 요일 출력

var hours = date4.getHours(); // 시
console.log("hours:", hours); // 시 출력

var minutes = date4.getMinutes(); // 분
console.log("minutes:", minutes); // 분 출력

var seconds = date4.getSeconds(); // 초
console.log("seconds:", seconds); // 초 출력








