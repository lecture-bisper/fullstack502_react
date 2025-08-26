// useClass1.js

//  클래스
//  ES5에서는 클래스를 정의하기 위한 문법이 없었기 때문에 클래스를 표현하기 위해서 prototype 을 사용하여 클래스처럼 표현하여 사용함
//  ES6에서는 클래스를 정의하기 위한 class 키워드가 추가됨
//  기본적으로 java의 클래스와 비슷
//  ES6의 클래스 생성자는 'constructor' 라는 메소드로 지정되어 있음
//  클래스의 필드는 선언 방식 2가지 임
//    - 자바의 클래스 필드를 선언하는 방식과 동일함
//    - 메소드 안에 'this.필드명' 형태로 선언
//  'static' 키워드를 사용하여 정적 멤버를 사용할 수 있음
//  'extends' 키워드를 사용하여 클래스 상속이 가능함

console.log("\n----- ES5 에서의 클래스 사용 방식 -----\n");

//  클래스인 것 처럼 하는 하는 함수 선언
function Shape(x, y) {
  //  필드 선언
  this.name = 'shape';
  //  메소드 등록
  this.move(x, y);
}

//  정적 멤버
Shape.create = function(x, y) {
  return new Shape(x, y);
}

//  메소드 구현 1
Shape.prototype.move = function(x, y) {
  this.x = x;
  this.y = y;
}

//  메소드 구현 2
Shape.prototype.area = function() {
  return 0;
}

//  메소드 선언의 다른 방식
// Shape.prototype = {
//   move: function(x, y) {
//     this.x = x;
//     this.y = y;
//   },
//   area: function() {
//     return 0;
//   }
// }


var s1 = Shape.create(0, 0);
console.log(s1.area());

var s2 = Shape.create(0, 0);
console.log(s2.area());








