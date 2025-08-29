/// HookUseRef.jsx
/// Date: 25. 8. 29.
/// Time: 오후 2:32
/// User: it
/// 

import {useRef, useState} from "react";

//  useRef : 특정 컴포넌트에 접근할 수 있도록 해주는 Hook
//  컴포넌트에 ref 속성을 추가하고, useRef() 를 사용한 변수를 설정함
//  이벤트 발생 시 useRef() 사용한 변수에서 current 를 통해서 특정 컴포넌트의 정보를 가져올 수 있음
//  사용법 : 
//  const 변수명 = useRef(초기값); 

function HookUseRef(props) {

  //  useRef() 를 사용하여 접근하고자하는 주소를 저장할 수 있는 변수를 선언
  //  초기값으로 null 을 사용하여 빈 태그로 설정
  const inputBox = useRef(null);

  //  버튼 클릭 시 동작할 함수
  const onButtonClick = () => {
    console.log('클릭 이벤트 발생!!');
    // 지정한 태그로 포커스 이동
    inputBox.current.focus();
  }
  
  return (
    <div>
      <input type="text" className={'form-control mb-2'} placeholder={'포커스를 못받는 태그'}/>
      {/* JSX 문법을 사용하여 useRef 를 태그에 설정 */}
      <input type='text' className={'form-control mb-2'} ref={inputBox} placeholder={'아래 버튼 클릭 시 포커스를 받는 태그'} />
      <button type={'button'} className={'btn btn-primary'} onClick={onButtonClick}>클릭 시 포커스 이동</button>
    </div>
  );
}

export default HookUseRef









