/// Events.jsx
/// Date: 25. 9. 1.
/// Time: 오전 9:30
/// User: it
/// 

import {useState} from "react";

function Events(props) {
  //  변수 isToggleOn1, isToggleOn2 을 state로 관리, 변수 내용 수정 시 화면 업데이트
  const [isToggleOn1, setIsToggleOn1] = useState(false);
  const [isToggleOn2, setIsToggleOn2] = useState(false);

  // 이벤트 처리 시 동작할 함수, 미리 선언해 놓음
  function handleClick() {
    console.log('----- 버튼 이벤트 발생(콜백함수를 미리 선언) -----');
    //  state로 관리되고 있는 변수를 수정하는 함수 호출
    setIsToggleOn1(!isToggleOn1);
  }

  //  매개변수가 있는 이벤트 처리 함수
  const handleArgs = (id, str) => {
    console.log('----- 매개변수가 있는 버튼 이벤트 발생(콜백함수를 미리 선언) -----');
    alert(`id : ${id}, str : ${str}`);
  }

  const handelEventArgs = (id, str, e) => {
    console.log('----- 이벤트 객체가 매개변수로 있는 버튼 이벤트 발생 -----');
    alert(`id : ${id}, str : ${str}, target : ${e.target.innerText}`);
  }


  return (
    <div>
      {/* 리액트의 이벤트 속성은 카멜명명법 사용 */}
      {/* 미리 선언해 놓은 이벤트 처리 함수를 이름만 등록하여 사용 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={handleClick}>{isToggleOn1 ? '켜짐' : '꺼짐'}</button>
      {/* 리액트의 이벤트 속성에 이벤트 처리 함수를 익명 함수로 직접 입력하여 사용 */}
      {/* 화살표 함수를 사용하여 익명함수로 직접 처리 */}
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        console.log('----- 버튼 이벤트 발생(콜백함수를 직접 입력) -----');
        setIsToggleOn2(!isToggleOn2);
      }}>{isToggleOn2 ? '켜짐' : '꺼짐'}</button>

      <br/>
      <br/>

      {/* 매개변수가 있는 이벤트 처리 함수를 호출 시 이벤트 속성에 화살표 함수로 익명함수를 직접 입력하고 미리 선언해 놓은 이벤트 처리함수를 매개변수와 함께 호출 */}
      {/* 이벤트 속성에 함수를 직접 실행 시 컴포넌트가 호출됨과 동시에 이벤트 처리함수도 함께 실행됨 */}
      <button type={'button'} className={'btn btn-success me-2'} onClick={() => {
        handleArgs(100, "매개변수");
      }}>매개변수가 있는 버튼 이벤트</button>
      {/* 이벤트 처리 시 이벤트 객체가 필요할 경우 */}
      {/* 이벤트 속성이 입력하는 화살표 함수에 매개변수로 이벤트 객체를 추가 */}
      {/* 익명함수 안에서 실제 이벤트를 처리할 함수를 호출 시 매개변수로 받아온 이벤트 객체를 매개변수로 전달 */}
      <button type={'button'} className={'btn btn-success'} onClick={(e) => {
        handelEventArgs(200, "매개변수", e);
      }}>이벤트 객체가 매개변수로 있는 버튼 이벤트</button>
    </div>
  );
}

export default Events









