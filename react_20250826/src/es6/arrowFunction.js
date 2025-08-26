//  arrowFunction.js

//  ES6의 함수 (화살표 함수)
//  ES6에서는 람다식을 사용하여 함수를 선언하는 화살표 함수를 제공함
//  화살표 함수는 ES5에서 함수를 변수에 저장하는 방식과 비슷한 방식으로 사용
//  'function' 키워드를 생략, 매개변수를 입력 후 화살표 => 기호를 사용
//  화살표 => 기호 다음에 코드 블록 {} 을 사용하여 소스 코드를 입력
//  함수의 내용이 return 한 줄만 존재하는 경우 코드 블록을 생략 가능
//  매개변수가 1개일 경우 괄호 () 생략 가능
//  매개변수가 없을 경우는 괄호 () 가 필수
//  반환타입이 object 타입일 경우 반드시 괄호로 감싸야 함


console.log("\n----- ES5에서의 함수 선언 -----\n");

//  ES5 의 함수 선언 방식 1번
function add1(num1, num2) {
  return num1 + num2;
}

//  ES5 의 함수 선언 방식 2번
var add2 = function (num1, num2) {
  return num1 + num2;
}

console.log(`함수 add1 호출 : ${add1(10, 20)}`);
console.log(`함수 add2 호출 : ${add2(10, 20)}`);

console.log(`함수 add1 의 타입 : ${typeof add1}`);
console.log(`함수 add2 의 타입 : ${typeof add2}`);


console.log("\n ----- ES6의 화살표 함수 -----\n");

//  es6 에서는 람다식을 사용하는 화살표 함수가 추가 됨
//  화살표 함수의 기본 선언 방식
const sum1 = (num1, num2) => {
  return num1 + num2;
}

console.log(`화살표 함수 sum1 호출 : ${sum1(10, 20)}`);
console.log(`화살표 함수 sum1 의 타입 : ${typeof sum1}`);

//  화살표 함수 선언 시 코드 블록의 소스가 1 라인만 있을 경우 return 및 {} 생략 가능
const sum2 = (num1, num2) => num1 + num2;

console.log(`화살표 함수 sum2 호출 : ${sum2(10, 20)}`);
console.log(`화살표 함수 sum2 의 타입 : ${typeof sum2}`);

//  매개변수가 1개 인 화살표 함수
const sum3 = (num1) => num1 + num1;

console.log(`화살표 함수 sum3 호출 : ${sum3(10)}`);
console.log(`화살표 함수 sum3 의 타입 : ${typeof sum3}`);

//  매개변수가 1개일 경우 매개변수의 괄호 생략 가능
const sum4 = num1 => num1 + num1;

console.log(`화살표 함수 sum4 호출 : ${sum4(10)}`);

//  매개변수가 없을 경우는 반드시 () 를 사용해야 함
const sum5 = () => {
  console.log('매개변수가 없는 화살표 함수 sum5()');
}
//  매개변수가 없고, 소스코드가 1 라인일 경우
const sum6 = () => console.log('매개변수가 없는 화살표 함수 sum6()');

sum5();
sum6();

//  반환값이 object 일 경우
const sumAndMulti1 = (num1, num2) => {
  return {sum: num1 + num2, multi: num1 * num2};
}

console.log(sumAndMulti1(10, 20));

//  반환값이 object 이고, 소스코드가 1라인일 경우 반환값에 반드시 () 가 필요
//  소스코드가 1라인일 경우 {} 생략이 가능한 상태에서 object 타입을 반환하게 되면, object 타입을 나타내는 {} 가 함수의 코드 블럭을 나타내는 {} 인 것으로 인식하게 됨
const sumAndMulti2 = (num1, num2) => ({sum: num1 + num2, multi: num1 * num2});

console.log(sumAndMulti2(10, 20));

//  배열은 상관없음
const sumAndMulti3 = (num1, num2) => [num1 + num2, num1 * num2];
console.log(sumAndMulti3(10, 20));


//  함수의 반환 타입이 함수일 경우
console.log("\n ----- 함수가 함수를 반환할 때 ES5 방식 -----\n");

function func1(num) {
  let value = num;

  return function(value) {
    return num + value;
  }
}

//  함수를 반환
console.log(func1(10));

//  func1() 을 변수 result 에 저장, 변수 result 로 대신 실행이 가능함
let result = func1(10);
console.log(result(10));


console.log("\n----- 함수가 함수를 반환할 때 ES6 방식 ----- \n");

//  화살표 함수의 반환 값이 익명함수인 것을 화살표 함수로 표현
const func2 = num => value => num + value;

//  위의 함수를 풀어 쓴 방식
// const func2 = (num) => {
//   return value => {
//     return num + value;
//   }
// }

console.log(func2(10));

result = func2(10);
console.log(result(10));

//  위의 내용을 한번에 표현하는 다른 방식
console.log(func2(10)(10));
















