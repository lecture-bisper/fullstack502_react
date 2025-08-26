// values.js

//  가변 변수, 불변 변수
//  ES5까지는 변수를 선언하기 위해서 키워드 var 만 사용
//  ES6에서 변수를 선언 시 사용하는 키워드로 let, const 가 추가 됨

//  var : 예전부터 사용하던 변수를 선언하기 위한 키워드
//    변수가 메모리 상에 존재하는 범위가 함수를 기준으로 함
//    변수 선언 후 값을 계속 수정할 수 있음
//    동일한 변수명으로 변수를 재 선언할 수 있음

//  let : ES6부터 추가된 변수를 선언하기 위한 키워드
//    변수가 메모리 상에 존재하는 범위가 코드 블럭을 기준으로 함
//    변수 선언 후 값을 계속 수정할 수 있음
//    동일한 변수명으로 변수를 재 선언할 수 없음

//  const : ES6 부터 추가된 상수를 선언하기 위한 키워드
//    상수가 메모리 상에 존재하는 범위가 코드 블록을 기준으로 함
//    상수이기 때문에 상수 선언 후 값을 수정할 수 없음 (선언과 동시에 값 지정)
//      - const 는 상수이지만 저장된 값이 배열 혹은 object 타입일 경우 배열 및 object 타입의 요소는 수정할 수 있음
//      - const 로 선언된 상수에 저장된 배열 혹은 object 타입은 값 자체가 저장되는 것이 아니라 메모리 주소가 저장되는 것 이므로 해당 주소 자체는 변경이 불가능함
//    동일한 상수명으로 상수를 재 선언할 수 없음

console.log("----- var, let, const -----\n");

var varA = 10;
let letA = 10;
const constA = 10;

console.log(`var 로 선언한 변수 varA 의 값 : ${varA}`);
console.log(`let 으로 선언한 변수 letA 의 값 : ${letA}`);
console.log(`const 로 선언한 상수 constA 의 값 : ${constA}`);

//  var 키워드로 생성한 변수이므로 수정 가능
varA = 100;
console.log(`var 로 선언한 변수 값 수정 : ${varA}`);

//  let 키워드로 생성한 변수이므로 수정 가능
letA = 100;
console.log(`let 으로 선언한 변수 값 수정 : ${letA}`);

//  const 키워드로 생성한 상수이므로 수정 불가능
// constA = 100;
// console.log(`const 로 선언한 상수 값 수정 : ${constA}`);

console.log();

var varA = 1000;
console.log(`var 로 선언한 변수를 재선언 : ${varA}`);

//  let 으로 선언한 변수를 재선언 불가능
// let letA = 1000;
// console.log(`let 으로 선언한 변수를 재선언 : ${letA}`);

//  const 로 선언한 상수를 재선언한 불가능
// const constA = 1000;
// console.log(`const 로 선언한 상수를 재선언 : ${constA}`);


console.log("\n---- 변수의 사용 범위 -----\n");

if (true) {
  var varB = 20;
  let letB = 20;
  console.log(`if 문의 코드블록 안에서 선언된 변수 varB : ${varB}`);
  console.log(`if 문의 코드블록 안에서 선언된 변수 letB : ${letB}`);
}

//  var 로 선언한 변수는 변수의 사용 범위가 함수를 기준으로 하기 때문에 if 문 안에서 선언한 변수도 if 문 밖에서 사용할 수 있음
console.log(`if 문 밖에서 호출한 변수 varB : ${varB}`);
//  let 으로 선언한 변수는 변수의 사용 범위가 코드 블록을 기준으로 하기 때문에 if 안에서 선언한 변수를 if 문 밖에서 사용할 수 없음
// console.log(`if 문 밖에서 호출한 변수 letB : ${letB}`);

console.log("\n");

function funcA() {
  var varC = 30;
  let letC = 30;
  console.log(`함수 funcA 안에서 선언한 변수 varC : ${varC}`);
  console.log(`함수 funcA 안에서 선언한 변수 letC : ${letC}`);
}

funcA();

//  var 로 선언한 변수의 사용 범위가 함수를 기준으로 하기 때문에 함수를 벗어나면 메모리에서 삭제 됨
// console.log(`함수 funcA 밖에서 호출한 변수 varC : ${varC}`);
//  let 으로 선언 변수의 사용 범위가 코드 블록을 기준으로 하기 때문에 코드 블록을 벗어나면 메모리에서 삭제 됨
// console.log(`함수 funcA 밖에서 호출한 변수 letC : ${letC}`);


console.log("\n ----- const 의 특징 -----\n");

const info = {name: "홍길동", age: 25};
console.log(info);

//  const 로 선언한 상수의 값을 수정 시 오류 발생
// info = {name: "아이유", age: 31};

//  상수 info의 요소인 name 의 값을 수정
//  상수 info 에 저장된 데이터가 object 타입이므로 object 타입의 메모리 주소가 저장되어 있음, object 타입의 주소가 변경된 것이 아니므로 상관없음
info.name = "아이유";
console.log(info);


console.log("\n----- 무결성 내장 함수 -----\n");
//  ES6 에서는 원본 배열을 직접 수정하는 것을 권장하지 않음
//  ES6 에서는 배열의 요소를 수정(추가, 삭제) 시 원본 배열은 그대로 두고, 원본 배열의 내용을 복사하여 새로운 배열을 생성하고, 새로운 배열을 수정하여 사용하는 것을 권장

const arr1 = [10, 20, 30];
const arr2 = [10, 20, 30];

//  기존 방식
console.log("\n----- 배열의 가변 내장 함수를 사용하는 방식 -----\n");

console.log("원본 배열 arr1 : ");
console.log(arr1);

arr1.push(40);
arr1.push(50);

console.log("수정된 배열 arr1 : ");
console.log(arr1);

console.log("\n----- 배열의 무결성 내장 함수를 사용하는 방식 -----\n");

console.log("원본 배열 arr2 : ");
console.log(arr2);

const arr3 = arr2.concat(40);
const arr4 = arr3.concat(50);

console.log("무결성 내장 함수로 수정된 배열 : ");
console.log(arr4);

console.log("원본 배열 arr2 : ");
console.log(arr2);

console.log("\n----- 가변 내장함수로 내용 삭제 -----\n");

console.log("원본 배열 arr1 : ");
console.log(arr1);

arr1.pop();
arr1.pop();

console.log("수정된 배열 arr1 : ");
console.log(arr1);

console.log("\n----- 무결성 내장함수로 내용 삭제 -----\n");

console.log("원본 배열 arr4 : ");
console.log(arr4);

const arr5 = arr4.slice(0, arr4.length -1);
const arr6 = arr5.slice(0, arr5.length -1);

console.log("무결성 내장함수로 수정된 배열 arr6 : ");
console.log(arr6);

console.log("원본 배열 arr4 : ");
console.log(arr4);






