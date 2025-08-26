// objects2.js

//  ES5 의 구조 분해 할당
console.log("----- ES5 -----")

//  배열 선언
var list = [0, 1];
//  변수에 배열의 요소 대입
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1; // 기본값 설정
console.log(list);
console.log(item1);
console.log(item2);
console.log(item3);

console.log();

console.log(`원본 item1 출력 : ${item1}`);
console.log(`원본 item2 출력 : ${item2}`);

//  ES5 방식으로 각각의 변수에 입력된 데이터를 swap
//  서로의 데이터를 교환할 경우 반드시 임시 변수가 필요함
var temp = item2;
item2 = item1;
item1 = temp;

console.log(`바꾼 후 item1 출력 : ${item1}`);
console.log(`바꾼 후 item2 출력 : ${item2}`);

console.log();

//  es5 에서 object 타입 변수 선언
var obj = {
  key1: 'one',
  key2: 'two',
};

//  일반 변수에 object 타입의 요소를 대입
var key1 = obj.key1;
var key2 = obj.key2;
//  변수 key3에 object 타입의 요소 key3 을 대입, 없으면 null 이 대입, 기본값 사용가능
var key3 = obj.key3 || 'key3 에 설정된 기본값';
// 새로운 변수에 object 타입의 요소 key1의 값을 대입
var newKey = obj.key1;

console.log('원본 object 타입의 obj 값');
console.log(obj);
console.log(`key1 의 값 : ${key1}`);
console.log(`key2 의 값 : ${key2}`);
console.log(`key3 의 값 : ${key3}`);
console.log(`newKey 의 값 : ${newKey}`);


console.log("\n\n ----- ES6 -----")

//  일반적인 배열 선언
var list = [0, 1];
//  구조분해할당을 사용하여 변수에 배열의 요소를 한번에 대입
var [item1, item2, item3 = -1] = list;
console.log(list);
console.log(item1);
console.log(item2);
console.log(item3);

console.log();

console.log(`원본 item1 출력 : ${item1}`);
console.log(`원본 itme2 출력 : ${item2}`);

//  ES6 에서의 데이터 swap 하기
//  ES6 의 구조 분해 할당을 사용하여 임시 변수 없이 두 변수의 값을 교환할 수 있음
[item2, item1] = [item1, item2];

console.log(`바꾼 후 item1 출력 : ${item1}`);
console.log(`바꾼 후 item2 출력 : ${item2}`);

console.log();

var obj = {
  key1: 'one',
  key2: 'two',
};

console.log('원본 obj 의 값 ');
console.log(obj);

//  object 타입의 구조 분해 할당
//  object 타입은 변수와 key 명이 같을 경으 해당 key 의 value를 변수에 저장
//  key 명과 동일한 변수명에 :새변수명  사용 시 새 변수명에 지정한 key의 값이 저장됨
var {key2, key1: newKey, key3 = 'key3에 설정된 기본값'} = obj;

console.log(`변수 key1 의 값 : ${key1}`);
console.log(`변수 key2 의 값 : ${key2}`);
console.log(`변수 key3 의 값 : ${key3}`);
console.log(`변수 newKey 의 값 : ${newKey}`);













