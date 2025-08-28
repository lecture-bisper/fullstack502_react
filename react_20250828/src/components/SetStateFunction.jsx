/// SetStateFunction.jsx
/// Date: 25. 8. 28.
/// Time: 오후 3:36
/// User: it
/// 

import {useState} from "react";

//  함수 컴포넌트 사용
function SetStateFunction(props) {

  //  함수 컴포넌트의 기는 중 Hooks 의 useState 를 사용함
  //  함수 컴포넌트에서는 state 의 값을 변경하고자할 경우 반드시 useState 를 사용해야 함
  let [ stateString, setStateString ] = useState('click');

  //  버튼 클릭 시 동작할 메소드
  function StateChange(e) {
    // state 값을 직접 수정하기 때문에 화면 업데이트가 발생하지 않음
    console.log(`원본 : ${stateString}`);
    stateString = '직접 내용 수정';
    console.log(`수정 : ${stateString}`);

    e.preventDefault();
  }

  return (
    <div>
      <button className={'btn btn-primary me-2'} onClick={(e) => {
        StateChange(e)
      }}>state 직접 수정</button>
      <button className={'btn btn-primary'} onClick={(e) => {
        // useState() 를 사용하여 값을 수정, 화면 업데이트가 발생
        setStateString('클릭');
      }}>setState 로 수정</button>

      <br/>
      [state 변경하기] StateString : {stateString}
    </div>
  );
}

export default SetStateFunction









