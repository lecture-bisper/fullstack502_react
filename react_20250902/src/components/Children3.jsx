/// Children3.jsx
/// Date: 25. 9. 2.
/// Time: 오후 2:07
/// User: it
/// 

//  상태 끌어 올리기
//  자식 컴포넌트의 데이터를 부모 컴포넌트로 전달하는 방법
//  부모 컴포넌트가 자식 컴포넌트를 호출 시 props를 통해서 부모 컴포넌트의 함수를 전달하면, 자식 컴포넌트에서 부모 컴포넌트의 함수를 대신 실행할 수 있음
//  1. 자식 컴포넌트에서 전달할 데이터를 받을 수 있는 변수를 부모 컴포넌트에 선언
//  2. 자식 컴포넌트에서 데이터는 전달 받을 변수를 state 로 관리
//  3. 부모 컴포넌트에서 state로 관리되는 변수를 수정하는 setState() 함수를 자식 컴포넌트로 전달
//  4. 부모 컴포넌트에서 전달받은 setState() 함수를 자식 컴포넌트가 대신 실행
//  5. 자식 컴포넌트가 가지고 있는 데이터가 부모 컴포넌트의 state 변수에 저장됨

function Children3 (props) {

  let childValue = 1000; // 자식 컴포넌트의 일반 변수

  // const clickButton1 = () => props.data1Func();
  // const clickButton2 = () => props.data2Func(childValue);

  return (
    <div className={'border border-3 border-warning rounded-3 p-4 m-4'}>
      <h4 className={'text-center'}>자식 컴포넌트 영역</h4>
      <h5>부모 컴포넌트가 전달한 데이터1 : {props.data1}</h5>
      <h5>부모 컴포넌트가 전달한 데이터2 : {props.data2}</h5>
      <h5>자식 컴포넌트가 가지고 있는 데이터 : {childValue}</h5>

      <br/><br/>

      <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
        props.data1Func(100);
      }}>부모가 전달한 data1Func()함수 실행</button>

      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        props.data2Func(props.data2 + childValue);
      }}>부모가 전달한 setState() 함수를 대신 실행</button>
    </div>
  );
}

export default Children3;









