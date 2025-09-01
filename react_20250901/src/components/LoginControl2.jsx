/// LoginControl2.jsx
/// Date: 25. 9. 1.
/// Time: 오후 12:34
/// User: it
/// 

import {useState} from "react";
import Greeting from "./Greeting.jsx";

//  자식 컴포넌트, 다른 컴포넌트에서 사용하는 컴포넌트가 아닐 경우(현재 컴포넌트에서만 사용하는 자식 컴포넌트일 경우) 하나의 파일에 여라개의 컴포넌트를 선언해서 사용해도 상관없음
function LoginButton(props) {
  //  부모 컴포넌트가 전달한 데이터가 함수임, button 태그의 클릭 이벤트 처리 함수로 사용됨
  return <button type={'button'} className={'btn btn-primary'} onClick={props.eventClick}>로그인</button>
}

//  자식 컴포넌트
const LogoutButton = (props) => {
  return <button type={'button'} className={'btn btn-secondary'} onClick={props.eventClick}>로그아웃</button>
}

//  부모 컴포넌트
function LoginControl2(props) {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  //  이벤트 처리 함수 선언
  const eventLoginClick = () => setIsLoggedIn(true);
  const eventLogoutClick = () => setIsLoggedIn(false);

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {
        //  삼항 연산자를 사용하여 if ~ else 문을 구현
        //  JSX 문법에서는 자바스크립트의 전통적은 if ~ else 문을 사용할 수 없음
        //  엘리먼트 변수 없이 삼항연산자를 사용하여 조건에 따라 자식 컴포넌트를 변경하여 호출
        isLoggedIn == true
          ? <LogoutButton eventClick={eventLogoutClick} />
          : <LoginButton eventClick={eventLoginClick} />
      }
    </div>
  );
}

export default LoginControl2









