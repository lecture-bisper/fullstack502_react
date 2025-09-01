/// LandingPage.jsx
/// Date: 25. 9. 1.
/// Time: 오후 2:16
/// User: it
/// 

import {useState} from "react";
import Toolbar from "./Toolbar.jsx";

function LandingPage(props) {

  //  로그인 여부를 확인하기 위한 변수, state로 관리되고 있음
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  //  클릭 이벤트 발생 시 호출할 이벤트 함수
  const onClickLogin = () => {
    setIsLoggedIn(true);
  }
  
  //  이벤트 처리 함수
  const onClickLogout = () => setIsLoggedIn(false);
  
  return (
    <div>
      {/* 자식 컴포넌트인 Toolbar 컴포넌트 호출 */}
      {/* isLoggedIn, onClickLogin, onClickLogout 3개의 데이터를 전달 */}
      <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
      <div className={'p-3'}>로그인 여부 확인하기</div>
    </div>
  );
}

export default LandingPage









