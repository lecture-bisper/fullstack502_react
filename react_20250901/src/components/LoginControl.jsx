/// LoginControl.jsx
/// Date: 25. 9. 1.
/// Time: 오전 11:33
/// User: it
/// 

import {useState} from "react";
import LogoutButton from "./LogoutButton.jsx";
import LoginButton from "./LoginButton.jsx";
import Greeting from "./Greeting.jsx";

function LoginControl(props) {

  //  state로 관리되는 변수, 초기값 false
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  //  이벤트 처리 함수 선언
  const eventLoginClick = () => {
    setIsLoggedIn(true);
  }

  const eventLogoutClick = () => {
    setIsLoggedIn(false);
  }

  //  엘리먼트 변수 : 일반 자바스크립트 변수에 저장된 내용이 JSX 문법으로 만들어진 컴포넌트 인 변수
  //  엘리먼트 변수로 사용할 변수 선언, 일반 자바스크립트 변수임(자바스크립트의 변수는 모든 데이터 타입을 저장할 수 있으므로, 리액트 컴포넌트도 저장할 수 있음)
  let button; // 현재는 빈 변수

  //  변수 isLoggedIn 의 값에 따라 조건부 랜더링 연산
  if (isLoggedIn == true) {
    //  변수에 LogoutButton 컴포넌트 저장
    button = <LogoutButton onClick={eventLogoutClick} />
  }
  else {
    //  변수에 LoginButton 컴포넌트 저장
    button = <LoginButton onClick={eventLoginClick} />
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {/* 엘리먼트 변수를 화면에 출력, 엘리먼트 변수를 활용한 조건부 랜더링 */}
      {/* 엘리먼트 변수 사용 시 불필요한 화면 구성을 하지 않아도 됨 */}
      {button}
    </div>
  );

  //  엘리먼트 변수를 사용하지 않을 경우, 결과에 따라 출력될 화면 자체를 모두 구현해야 함
  // if (isLoggedIn == true) {
  //   return (
  //     <div>
  //       <Greeting isLoggedIn={isLoggedIn} />
  //       <LogoutButton onClick={eventLogoutClick} />
  //     </div>
  //   )
  // }
  // else {
  //   return (
  //     <div>
  //       <Greeting isLoggedIn={isLoggedIn} />
  //       <LoginButton onClick={eventLoginClick} />
  //     </div>
  //   )
  // }
}

export default LoginControl









