/// Greeting.jsx
/// Date: 25. 9. 1.
/// Time: 오전 11:07
/// User: it
/// 

import UserGreeting from "./UserGreeting.jsx";
import GuestGreeting from "./GuestGreeting.jsx";

function Greeting(props) {

  //  조건부 랜더링 : 어떠한 조건에 따라서 화면 랜더링이 달라지는 것
  //  자바스크립트에서 조건식으로 데이터를 구분할 경우 true/false 2가지로 구분
  //  여기서 데이터에 따라 truthy / falsy 로 구분할 수 있음
  //  간단하게 데이터가 있으면 truthy, 없으면 false 로 구분
  
  //  Truthy : true(Boolean 값 true), {}(빈 object 타입), [](빈 배열), 100, -200, 0.5(0이 아닌 숫자), "0", "false"(빈 문자열이 아닌 문자열)
  //  Falsy : false(Boolean 값 false), 0, -0, 0.0(음수, 양수, 관계없이 숫자 0), 0n(BigInt 타입의 0), '', "", ``(빈 문자열), null(데이터 없음), undefined(초기화되지 않음)
  
  //  let a;  - 변수 선언과 동시에 초기화하지 않았기 때문에 undefined 상태가 되어서 falsy 로 동작
  //  let b = [];  - 변수 선언과 동시에 빈 배열 타입으로 선언했기 때문에 변수 b 에 데이터가 있는 것으로 판단하여 truthy 로 동작
  //  let c = {};  - 변수 선언과 동시에 빈 object 타입으로 선언했기 때문에 변수 c 에 데이터가 있는 것으로 판단하여 truthy 로 동작
  
  //  부모한테서 전달받은 데이터 isLoggedIn 을 변수 isLoggedIn 에 저장
  //  부모한테서 전달받는 데이터 props 는 읽기 전용
  const isLoggedIn = props.isLoggedIn;

  //  if 문을 통해서 isLoggedIn 의 값을 확인 후 출력할 컴포넌트를 변경 (조건부 랜더링)
  if (isLoggedIn == true) {
    return <UserGreeting />
  }
  else {
    return <GuestGreeting />
  }
}

export default Greeting









