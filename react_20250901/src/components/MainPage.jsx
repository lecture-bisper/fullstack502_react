/// MainPage.jsx
/// Date: 25. 9. 1.
/// Time: 오후 1:57
/// User: it
/// 

import {useState} from "react";
import WarningBanner from "./WarningBanner.jsx";

function MainPage(props) {

  //  state로 관리되는 변수 선언, 초기값 false
  const [ showWarning, setShowWarning ] = useState(false);

  //  이벤트 처리 함수 선언
  const clickToggle = () => {
    //  showWarning 의 현재 값을 반대로 입력
    setShowWarning(!showWarning);
  }

  return (
    <div>
      {/* 자식 컴포넌트인 WarningBanner 컴포넌트 호출 */}
      {/* 매개변수로 showWarning 값을 전달 */}
      <WarningBanner warning={showWarning} />
      <button type={'button'} className={'btn btn-primary'} onClick={clickToggle}>{showWarning ? '감추기' : '보이기'}</button>
    </div>
  );
}

export default MainPage









