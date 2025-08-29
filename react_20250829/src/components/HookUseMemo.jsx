/// HookUseMemo.jsx
/// Date: 25. 8. 29.
/// Time: 오후 2:02
/// User: it
/// 

import {useEffect, useMemo, useState} from "react";


//  memoization : 동일한 연산을 반복해서 진행할 경우, 이전에 연산한 결과를 메모리에 저장하고, 동일한 연산을 제거하여 프로그램의 실행 속도를 높이는 기술
//  useMemo : 리액트에서 제공하는 memoizaion 기능의 hook, 최적화 작업 시 사용
//  사용법 : 
//  const 변수명 = useMemo(memo 콜백함수, 의존성 배열);

//  메모로 지정해 놓은 변수의 데이터가 수정될 경우 전체 UI를 다시 그려줌
//  메모로 지정하지 않은 변수의 데이터가 수정될 경우 메모리 지정한 변수만 빼고 UI 를 다시 그려줌

function HookUseMemo(props) {

  // state로 관리되는 변수 number, isType 선언
  const [ number, setNumber ] = useState(0);
  const [ isType, setIsType] = useState(true);

  //  변수 food에 useMemo 를 사용하여 값 설정
  //  변수 food 는 object 타입이며, 초기값은 {type: '부먹'}
  //  useMemo 가 동작하지 않을 경우에는 이전에 실행했던 데이터를 그대로 출력
  const food = useMemo(() => {
    console.log('----- useMemo() 함수 호출 -----');
    return {type: isType ? '부먹' : '찍먹'};
  }, [ isType ]);

  //  useMemo() 를 사용하지 않을경우 UI 화면이 재랜더링된 경우 데이터를 새로 연산하여 가져옴
  // const food = {type: isType ? '부먹' : '찍먹'};

  //  useEffect 를 사용하여 의존성 배열에 지정된 변수의 값이 변경될 경우 effect 콜백함수 호출
  useEffect(() => {
    console.log('----- componentDidUpdate() 함수 기능을 하는 useEffect 호출 -----');
  }, [food, number]);

  return (
    <div>
      {/* useMemo 를 사용하지 않은 state로 관리 중인 변수를 수정 */}
      {/* useMemo 를 사용하는 isType 부분은 그대로 두고 나머지만 새로 그려줌 */}
      <h4>숫자 카운트</h4>
      <input type="number" className={'form-control'} value={number} onChange={(e) => {
        setNumber(Number(e.target.value));
      }}/>
      <br/>
      {/* useMemo 의 의존성 배열에 등록된 변수를 수정, useMemo 가 동작 */}
      {/* useMemo 가 동작되므로 전체 화면을 다시 그려줌 */}
      <h4>boolean 값 변경</h4>
      <p>부먹 VS 찍먹 : <span className={'fs-3'}>{food.type}</span></p>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        setIsType(!isType);
      }}>클릭</button>
    </div>
  );
}

export default HookUseMemo









