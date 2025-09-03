/// App2.jsx
/// Date: 25. 9. 3.
/// Time: 오후 12:17
/// User: it
/// 

//  리액트에서는 타겟 컴포넌트로 데이터를 전달 시 중간에 존재하는 모든 컴포넌트를 통해서 데이터를 전달해야 함
//  중간에 존재하는 컴포넌트들은 사용하지 않는 데이터를 받아서 자식 컴포넌트에게 그대로 전달
function App2 () {
  return (
    <div className={'container mt-5'}>
      {/* 자식 컴포넌트 호출, theme 라는 속성에 데이터를 입력하여 자식 컴포넌트에 전달 */}
      <Toolbar theme={'primary'} />
    </div>
  );
}

//  첫번째 자식 컴포넌트, 부모 컴포넌트에서 전달받은 theme 데이터를 사용하지 않음, 자식 컴포넌트 호출 시 theme 라는 이름으로 전달받은 데이터를 다시 전달
function Toolbar(props) {
  return <ThemeButton theme={props.theme} />
}

//  두번째 자식 컴포넌트, 부모 컴포넌트에서 전달받은 theme 데이터를 사용하지 않음, 자식 컴포넌트 호출 시 theme 라는 이름으로 전달받은 데이터를 다시 전달
function ThemeButton(props) {
  return <MyButton theme={props.theme} />
}

//  마지막 자식 컴포넌트, 부모 컴포넌트에서 전달받은 theme 데이터를 사용함
function MyButton(props) {
  const clickButton = () => alert(`사용한 테마 : ${props.theme}`);

  return <button type={'button'} className={`btn btn-${props.theme}`} onClick={clickButton}>{props.theme} 테마 버튼</button>
}

export default App2









