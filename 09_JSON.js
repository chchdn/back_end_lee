// 자바스크립트의 객체
//json과 자바스크립트 객체의 차이점: 객체의 키는""를 꼭 안써도됨.
var data = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Anna", lastName: "Smith" },
  { firstName: "Peter", lastName: "Jones" }
];

console.log(data);
console.log(typeof data); // object

// 자바스크립트 객체를 JSON 형식의 문자열로 변환 (object -> string)
var stringValue = JSON.stringify(data);
console.log(stringValue);
console.log(typeof stringValue); // string

// JSON 문자열
var text = 
'{"employees": [' +
'{"firstName": "John", "lastName": "Doe"},' +
'{"firstName": "Anna", "lastName": "Smith"},' +
'{"firstName": "Peter", "lastName": "Jones"}]}';

// JSON 문자열을 자바스크립트 객체로 변환 (string -> object)
var obj = JSON.parse(text);

console.log(obj); // object 출력
console.log(typeof obj); // object

console.log(obj.employees[0].lastName);

//json을 변환해야하는 이유
//외부와 통신할 때 (예:api 요청) 데이터를 주고받기 위해 json형식의 문자열을 사용함
//하지만 문자열은 자바스크립트에서 바로 사용하기 어려움
//json 문자열을 자바스크립트 객체로 변환하여 프로퍼티를 꺼내 쓸 수 있음.




