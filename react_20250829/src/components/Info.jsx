/// Info.jsx
/// Date: 25. 8. 29.
/// Time: 오후 12:09
/// User: it
/// 

import {useState} from "react";

function Info(props) {

  //  useState 여러개 사용하기
  //  useState 로 관리되는 변수를 여러개 선언
  const [ userName, setUserName ] = useState('홍길동');
  const [ userAge, setUserAge ] = useState(1);

  return (
    <div>
      <div className={'mt-3'}>
        <label htmlFor="user-name" className={'form-label'}>사용자 이름 : </label>
        <input type="text" className={'form-control'} value={userName} onChange={(e) => {
          setUserName(e.target.value);
          e.preventDefault();
        }} placeholder={'이름을 입력하세요'}/>
      </div>
      <div className={'mt-3'}>
        <label htmlFor="user-age" className={'form-label'}>사용자 나이 : </label>
        <input type="number" className={'form-control'} value={userAge} onChange={(e) => {
          setUserAge(Number(e.target.value));
          e.preventDefault();
        }} min={1} max={100}/>
      </div>
      <br/>
      <div>
        <p>사용자 이름 : {userName}</p>
        <p>사용자 나이 : {userAge}</p>
      </div>
    </div>
  );
}

export default Info









