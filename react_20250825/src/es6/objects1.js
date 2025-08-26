// objects1.js

//  객체 확장 표현식 / 구조 분해 할당

//  ES6 에서 object 타입을 쉽게 사용할 수 있도록 개선됨
//  object 타입의 변수를 선언 시 선언과 동시에 값을 설정할 경우 value 부분에 이미 선언되어 있는 변수를 사용하면 key 명을 생략할 수 있음
//    value 로 사용되는 변수명이 key 명으로 사용되고, 변수에 저장된 값이 value로 인식
//    object 타입에 함수를 선언하여 사용 시 key명을 생략하고 함수명을 key명으로 사용함
//  ES6 에서는 구조 분해 할당 방식을 제공하여 배열이나 object 타입의 데이터를 변수에 쉽게 대입할 수 있도록 하고 있음
//  배열의 요소를 변수에 대입할 경우 대입 연산자 ( = ) 왼쪽에 배열처럼 ( [] ) 를 사용하여 [] 안에 변수명을 입력 후 대입 연산자 ( = ) 오른쪽에 배열을 대입함
//  대입 연산자 ( = ) 왼쪽에 있는 변수에 값을 지정하면 기본값으로 사용 가능
//  object 타입의 요소를 변수에 대입할 경우 대입 연산자 ( = ) 왼쪽에 {} 를 사용하여 {} 안에 변수명을 입력, 대입 연산자 ( = ) 오른쪽에 object 타입을 대입함
//  왼쪽에 입력할 변수명은 오른쪽 object 타입의 key명과 동일해야 함
//    왼쪽의 변수명과 오른쪽 object 타입의 key 명이 다를 경우 null 을 대입
//  object 타입에 대한 구조 분해 할당 사용 시 왼쪽에 있는 변수에 기본값을 설정할 수 있음
//  왼쪽에 있는 변수에 새 변수명을 사용하고 :변수명 추가로 사용 시 오른쪽 object 타입에 있는 key와 매칭되는 데이터를 가져와서 :변수명 으로 지정한 새로운 변수명으로 변수를 생성하여 데이터를 대입함

console.log("----- ES5 -----");

//  변수 선언
var x = 10;
var y = 20;
//  ES5 에서 일반적으로 사용하는 object 타입 생성
var obj = {x: x, y: y};
console.log(obj);

var randomKeyString = 'other';
//  빈 object 타입 변수 선언
var combined = {};
console.log(combined);
//  기존 object 타입에 key 와 value 를 설정하여 저장
combined['one' + randomKeyString] = 'some value';
console.log(combined);

//  ES5 에서 사용하는 object 타입 생성, object 타입의 요소로 값과 함수를 사용
var obj2 = {
  x: x,
  methodA: function() {
    console.log("methodA");
  },
  methodB: function() {
    return 0;
  },
};

console.log(obj2);
console.log(obj2.x);
obj2.methodA();
console.log(obj2.methodB());


console.log("\n ----- ES6 -----");

//  변수 선언
var x = 10;
var y = 20;
//  ES6 에서 object 타입의 변수를 선언하고, 동시에 데이터를 입력 시 value 로 사용할 데이터를 이미 선언해 놓은 변수를 사용할 경우, key 명을 생략할 수 있음
//  변수명이 key 명이 되고, 변수에 저장된 값이 value 가 됨
var obj = {x, y};
console.log(obj);

var randomKeyString = 'other';
//  ES6 의 obejct 타입에 key 와 value 를 한번에 설정
var combined = {['one' + randomKeyString]: 'some value'};
console.log(combined);

//  ES6 의 object 타입의 요소로 함수를 저장할 경우 함수를 그대로 입력 시 key 명을 생략할 수 있음
var obj2 = {
  x,
  methodA() {
    console.log("methodA");
  },
  methodB() {
    return 0;
  }
}

console.log(obj2);
console.log(obj2.x);
obj2.methodA();
console.log(obj2.methodB());










