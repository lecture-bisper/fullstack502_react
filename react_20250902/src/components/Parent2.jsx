/// Parent2.jsx
/// Date: 25. 9. 2.
/// Time: 오후 1:59
/// User: it
/// 

import {useState} from 'react';
import Children3 from './Children3.jsx';

function Parent2 (props) {

  let parentValue1 = 100; // 일반 변수
  const [parentValue2, setParentValue2] = useState(200); // state 로 관리하는 변수

  //  매개변수를 받아서 부모 컴포넌트의 일반 변수 값을 수정하는 함수
  const parentValue1Change = (editValue) => {
    parentValue1 = parentValue1 + editValue;
    console.log(`부모 컴포넌트의 함수로 데이터 수정 : ${parentValue1}`);
  }

  //  매개변수를 받아서 부모 컴포넌트의 state 변수를 수정하는 함수
  const parentValue2Change = (editValue) => {
    setParentValue2(parentValue2 + editValue);
    console.log(`부모 컴포넌트의 setState 로 데이터 수정 : ${parentValue2 + 1}`);
  }

  return (
    <div className={'border border-2 border-info rounded-3 p-3'}>
      <h4 className={'text-center'}>부모 컴포넌트 영역</h4>
      <h5>부모 컴포넌트가 가지고 있는 일반 변수 : {parentValue1}</h5>
      <h5>부모 컴포넌트가 가지고 있는 state 변수 : {parentValue2}</h5>

      <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
        parentValue1Change(10);
      }}>부모의 첫번째 데이터 수정</button>
      <button type={'button'} className={'btn btn-success'} onClick={() => {
        parentValue2Change(20);
      }}>부모의 두번째 데이터 수정</button>

      <br/>
      <br/>

      {/* 자식 컴포넌트 호출, 데이터 2개를 전달, 해당 데이터를 수정하는 함수 2개 전달 */}
      {/* data2Func 라는 이름으로 parentValue2 의 값을 수정하는 setState() 를 전달 */}
      <Children3 data1={parentValue1} data1Func={parentValue1Change} data2={parentValue2} data2Func={setParentValue2}/>
    </div>
  );
}

export default Parent2;









