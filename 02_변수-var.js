//var를 사용하지 않는 이유.

// console.log(puppy);
// var는 변수를 선언하기 전에 사용할 수 있는 호이스팅 현상이 발생함.
// let puppy = "cute";
// {
// let puppy = "so cute";
// }
// console.log(puppy);
console.log(cat);
var cat = "cute";
{
  //var는 블록스코프{}를 무시하기 때문에 변수가 한 개만 선언됨.
  var cat = "so cute";
}

console.log(cat); // so cute
//결론: var 키워드는 호스팅, 유효범위 등 문제가 있어서 권장하지 않음

