//  person2.mjs

const name2 = '유재석';
let email2 = 'u@bitc.ac.kr';

function sum2(num1, num2) {
  console.log(`두 수의 덧셈은 ${num1 + num2}`);
}

//  person1.mjs 에서 제공하는 함수 sub 와 이름이 같은 함수
const sub = (num1, num2) => {
  console.log(`person2 에서 제공하는 함수`);
  console.log(`두 수의 뺄셈은 ${num1 - num2}`);
  return num1 - num2;
}

const multi2 = num1 => num1 * num1;

class Circle2 {
  constructor(radius) {
    this.radius = radius;
  }

  area = num1 => this.radius * num1;
}

export { name2, email2, sum2, sub, Circle2 }

//  default export 로 외부에 제공, {} 없이 이름만 입력
//  default export 는 모듈 하나당 1개만 가능
export default multi2;
// export default Circle2;

