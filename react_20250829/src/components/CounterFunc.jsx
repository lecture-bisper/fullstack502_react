/// CounterFunc.jsx
/// Date: 25. 8. 29.
/// Time: 오전 11:36
/// User: it
/// 

import React, {useState} from "react";

function CounterFunc(props) {

  //  React Hook : 리액트의 state와 생명주기 함수 기능에 갈고리를 걸어서 원하는 시점에 정해진 함수를 실행하도록 만든 기능

  //  필수 Hook
  //  useState : 함수 컴포넌트에서 state 상태 관리할 수 있도록 함
  //  useEffect : 함수 컴포넌트에서 생명주기 함수를 사용할 수 있도록 함
  //  useNavigate : React Router 를 사용하여 MPA 방식 웹을 만드는 것처럼 하기 위해서 사용

  //  알면 좋은 Hook
  //  useMemo : 기존에 수행한 결과값을 메모리에 저장해 두고 동일한 입력이 들어올 경우 해당 데이터를 재활용하여 랜더링 속도를 높일 때 사용
  //  useCallback : useMemo 와 동일한 기능으로 useMemo 는 결과값을 재활용하고, useCallback 은 함수를 재활용
  //  useRef : 특정 컴포넌트에 접근할 수 있도록 함

  //  useState() hook 을 사용하기 위해서 설정
  //  객체 분할 할당 방식을 사용하여 변수를 선언
  //  const 키워드를 사용하여 값을 직접 수정할 수 없도록 설정함
  //  setState() 를 호출하기 위한 함수명을 'set + 변수명' 형식으로 지정
  //  useState(초기값) 함수에 해당 변수의 초기값을 매개변수로 설정
  //  사용법 >
  //  const [변수명, set변수명] = useState(초기값);
  //  set변수명(수정할 데이터);
  const [count2, setCount2] = useState(0);
  let count1 = 0;

  return (
    <div className={'mt-3 border-top'}>
      <h4>함수 컴포넌트에서 카운트</h4>

      <p>총 {count1} 번 클릭했습니다.</p>
      <button type={'button'} className={'btn btn-outline-secondary'} onClick={() => {
        count1++;
        console.log(`function count : ${count1}`);
      }}>일반 변수 count 올리기</button>

      <p>총 {count2} 번 클릭했습니다.</p>
      <button type={'button'} className={'btn btn-outline-info'} onClick={() => {
        setCount2(count2 + 1);
        console.log(`useState count : ${count2 + 1}`);
      }}>useState로 count 올리기</button>
    </div>
  );
}

export default CounterFunc









