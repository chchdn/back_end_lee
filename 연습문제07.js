// Q13. 현재 날짜와 시간를 다음과 같이 출력하세요. 현재시간으로.

// 현재 날짜와 시간 :2024-8-22 1:4:55

var now = new Date();

var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();

var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();


function addLeadingZero(num) {
  return num < 10 ? "0" + num : num;
}


var formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
console.log("현재 날짜와 시간:", formattedDateTime);




// Q14. 2024월 1월 1일 부터 10일 후의 날짜를 출력하세요.
// 10일 후 날짜 : 2024. 1. 11. 오전 9:00:00
// 2024년 1월 1일의 날짜 생성
var startDate = new Date(2024, 0, 1, 9, 0, 0); 

startDate.setDate(startDate.getDate() + 10);


var year = startDate.getFullYear();
var month = startDate.getMonth() + 1; 
var day = startDate.getDate();
var hours = startDate.getHours();
var minutes = startDate.getMinutes();
var seconds = startDate.getSeconds();
var period = hours >= 12 ? "오후" : "오전";


hours = hours % 12 || 12;

var formattedDate = `${year}. ${month}. ${day}. ${period} ${hours}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
console.log("10일 후 날짜:", formattedDate);


function addLeadingZero(num) {
  return num < 10 ? "0" + num : num;
}






// Q15. 현재 시간에서 1시간 30분 후의 시간을 출력하세요.현재 시간으로.

// 1시간 30분 후의 시간 : 2024. 8.22. 오전 2:34:55

// 현재 시간 가져오기
var now = new Date();


now.setHours(now.getHours() + 1);
now.setMinutes(now.getMinutes() + 30);


var year = now.getFullYear();
var month = now.getMonth() + 1; 
var day = now.getDate();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var period = hours >= 12 ? "오후" : "오전";


hours = hours % 12 || 12;


var formattedTime = `${year}. ${month}.${day}. ${period} ${hours}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
console.log("1시간 30분 후의 시간:", formattedTime);


function addLeadingZero(num) {
  return num < 10 ? "0" + num : num;
}



// Q16. 방문 기록을 관리하는 프로그램을 만들어 주세요.


const visitRecords = [
  { name: "김철수", date: "2024-08-20", purpose: "회의" },
  { name: "이영희", date: "2024-08-18", purpose: "상담" },
  { name: "박지훈", date: "2024-08-21", purpose: "회의" },
  { name: "최유리", date: "2024-08-19", purpose: "교육" },
  { name: "정민호", date: "2024-08-17", purpose: "상담" }
];


visitRecords.sort((a, b) => new Date(a.date) - new Date(b.date));

console.log("오름차순 정렬된 방문 기록:", visitRecords);


const meetingRecords = visitRecords.filter(record => record.purpose === "회의");

console.log("목적이 '회의'인 기록:", meetingRecords);


const formattedMeetingRecords = meetingRecords.map(record => {
  const date = new Date(record.date);
  return {
    name: record.name,
    year: date.getFullYear(),
    month: date.getMonth() + 1, 
    day: date.getDate(),
    purpose: record.purpose
  };
});

console.log("필터링된 기록의 날짜를 연도, 월, 일로 변환한 객체:", formattedMeetingRecords);
