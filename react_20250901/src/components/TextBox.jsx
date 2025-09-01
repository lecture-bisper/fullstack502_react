/// TextBox.jsx
/// Date: 25. 9. 1.
/// Time: 오전 10:36
/// User: it
/// 

import {useState} from "react";

function TextBox(props) {

  const [ userName, setUserName ] = useState('홍길동');
  const [ userAge, setUserAge ] = useState(20);

  const btnClick = () => {
    alert(`이름 : ${userName}, 나이 : ${userAge}`);
  }

  const changeUserName = (e) => {
    const name = e.target.value;
    console.log(`name : ${name}`);
    setUserName(name);
  }

  const changeUserAge = (e) => {
    const age = e.target.value;
    console.log(`age : ${age}`);
    setUserAge(age);
  }

  return (
    <div>
      <div>
        <label htmlFor="{'user-name'}" className={'form-label'}>이름 : </label>
        {/* 이벤트 객체 사용 시 이벤트 처리 함수를 호출하는 콜백함수를 사용 */}
        <input type={'text'} className={'form-control'} id={'user-name'} value={userName} onChange={(e) => {
          changeUserName(e);
        }}/>
      </div>
      <div className={'mt-3'}>
        <label htmlFor="user-age">나이 : </label>
        {/* 이벤트 객체 사용 시 이벤트 처리 함수의 이름만 입력 */}
        <input type="text" className={'form-control'} id={'user-age'} value={userAge} onChange={changeUserAge}/>
      </div>
      <button type={'button'} className={'btn btn-primary mt-3'} onClick={btnClick}>클릭 시 input 태그에 입력한 내용 출력</button>
    </div>
  );
}

export default TextBox









