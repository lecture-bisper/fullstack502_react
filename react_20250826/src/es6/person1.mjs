//  person1.mjs

//  변수를 직접 export
export const name = '아이유';
export const age = 31;

//  변수 선언
let email = 'iu@bitc.ac.kr';
let tel = '01012345678';
let addr = '부산광역시 부산진구 중앙대로';

//  기존에 선언된 변수를 한번에 export
//  기존에 선언된 변수를 외부에 제공 시 as를 사용하여 이름을 변경
export { email, tel as phone, addr };

//  함수를 직접 export
export function sum(num1, num2) {
  console.log(`두 수의 덧셈은 ${num1 + num2} 입니다.`);
}

function sub(num1, num2) {
  console.log(`두 수의 뺄셈은 ${num1 - num2} 입니다.`);
}

//  화살표 함수를 직접 export
export const multi = num1 => num1 * num1;

const divide = (num1, num2) => num1 / num2;

//  여러개의 함수를 한번에 export
//  export 시 함수의 이름을 as 로 변경하여 제공
export { sub, divide as div };


// 클래스 선언
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  // 화살표 함수로 메소드 선언
  area = num1 => this.radius * this.radius * num1;
}

export { Circle };












