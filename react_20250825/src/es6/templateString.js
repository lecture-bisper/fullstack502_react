// templateString.js

//  리액트는 Javascript ES6 버전의 문법을 사용함

//  템플릿 문자열
//  ES6 문법에서 문자열을 연산식과 함께 사용 시 조금 더 쉽게 입력하기 위한 방식
//  문자열을 표현하기 위한 ""(큰따옴표), ''(작은따옴표) 대신 ``(백틱) 으로 문자열을 감싸서 문자열을 표현
//  `` 을 사용한 문자열 안에서 ${변수명} 를 사용하여 문자열과 변수를 함께 표현
//  ${} 안에서 간단한 연산도 가능함

//  자바스크립트를 사용하는 기존 방식
console.log("----- ES5 -----")

var string1 = "안녕하세요";
var string2 = "반갑습니다.";

//  문자열과 변수를 함께 사용하기 위해서 문자열 연결 연산자 ' + ' 를 사용해야 함
var greeting = string1 + " " + string2;
var product = {name: "도서", price: "4,200원"};
//  문자열 연결 연산자를 사용하여 object 타입의 값과 문자열을 연결
var message = '제품' + product.name + "의 가격은 " + product.price + ' 입니다.';

console.log(string1);
console.log(string2);
console.log(greeting);
console.log(message);

var value1 = 1;
var value2 = 2;
var boolValue = false;
//  문자열과 연산식을 함께 사용하기 위해서 문자열 연결 연산자를 사용
var operator1 = "곱셈값은 " + value1 * value2 + " 입니다.";
var operator2 =  '불리언 값은 ' + (boolValue ? '참' : '거짓') + ' 입니다.';
//  하나의 문자열을 2개 이상의 라인으로 출력하기 위해서 이스케이프 문자를 사용
var multiline = "문자열 1\n문자열 2";

console.log(operator1);
console.log(operator2);
console.log(multiline);

console.log("\n----- ES6 -----\n");

var string1 = "안녕하세요";
var string2 = '반갑습니다.';
//  문자열 연산자 없이 `` 으로 감싼 문자열 안에 ${변수} 형태로 문자열과 함께 변수를 표현
var greeting = `${string1}  ${string2}`;
var product = {name: '도서', price: '42,000원'};
//  문자열 템플릿을 사용하여 object 타입의 값을 하나의 문자열로 만듬
var message = `제품 ${product.name} 의 가격은 ${product.price} 입니다.`;

console.log(string1);
console.log(string2);
console.log(greeting);
console.log(product);
console.log(message);

var value1 = 1;
var value2 = 2;
var boolValue = false;
//  템플릿 문자열 사용 시 문자열 안에서 간단한 연산이 가능함
var operator1 = `곱셈값은 ${value1 * value2} 입니다.`;
var operator2 = `불리언 값은 ${boolValue ? '참' : '거짓'} 입니다.`;
//  템플릿 문자열은 사용자가 입력한 형태대로 출력
var multiline = `문자열 1
문자열 2
문자열 3`;

console.log(operator1);
console.log(operator2);
console.log(multiline);










