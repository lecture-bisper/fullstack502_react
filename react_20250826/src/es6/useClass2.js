//  useClass2.js

console.log("\n----- ES6 에서 클래스 사용 -----\n");

//  ES6 에서의 클래스 선언
//  class 키워드를 사용, 자바의 클래스와 비슷
class Shape {

  //  정적 멤버 선언
  static create(x, y) {
    return new Shape(x, y);
  }

  //  클래스의 필드 선언
  name = 'shape';

  //  클래스 생성자 선언, 생성자 이름이 constructor 로 고정
  constructor(x, y) {
    this.move(x, y);
  }

  // 메소드 선언
  move(x, y) {
    // 클래스의 필드 선언 및 데이터 저장
    this.x = x;
    this.y = y;
  }

  area() {
    return this.x * this.y;
  }
}

var s1 = new Shape(10, 20);
console.log(s1.area());
s1.move(100, 200);
console.log(`${s1.area()}, ${s1.name}`);


console.log("\n----- ES6의 클래스 상속 -----\n");

//  extends 키워드를 사용하여 클래스 상속 가능
class Circle extends Shape {
  
  //  자식 클래스인 Circle 클래스의 생성자
  constructor(x, y, radius) {
    //  자바에서의 super() 와 동일한 기능
    //  상속받은 부모 클래스인 Shape 클래스의 생성자 호출
    super(x, y);
    //  필드 radius 선언 및 데이터 저장
    this.radius = radius;
  }

  //  Circle 클래스의 메소드 선언
  //  부모 클래스인 Shape 클래스의 멤버 메소드인 area() 를 상속받아 오버라이딩하여 사용
  area() {
    if (this.radius === 0) {
      return super.area();
    }
    else {
      return this.radius * this.radius;
    }
  }
}

// 클래스의 객체 생성 시 new 키워드 사용
const c1 = new Circle(0, 0, 10);
console.log(c1.area());











