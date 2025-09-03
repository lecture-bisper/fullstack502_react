/// JoinForm.jsx
/// Date: 25. 9. 3.
/// Time: 오전 9:19
/// User: it
/// 

import { useState } from 'react'

//  자식 컴포넌트
function JoinForm (props) {
  
  //  사용자가 입력한 정보를 저장할 state로 관리되는 변수, 초기값 ''
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  
  //  사용자가 input 태그에 사용자 정보를 입력 시 state 변수의 값을 변경하는 이벤트 처리 함수
  const changeUserId = e => setUserId(e.target.value);
  const changeUserPw = e => setUserPw(e.target.value);
  const changeUserName = e => setUserName(e.target.value);
  const changeUserEmail = e => setUserEmail(e.target.value);

  //  form 태그의 submit 이벤트 처리 함수
  const clickSubmit = e => {
    const msg = `User ID : ${userId}
User PW : ${userPw}
User Name : ${userName}
User Email : ${userEmail}`

    alert(msg);

    //  부모 컴포넌트로 자식 컴포넌트의 데이터를 전달
    //  부모 컴포넌트에서 전달받은 setState() 함수를 자식 컴포넌트가 대신 실행하여 부모 컴포넌트의 state 변수 내용을 자식 컴포넌트의 데이터로 수정
    props.setupId(userId);
    props.setupPw(userPw);
    props.setupName(userName);
    props.setupEmail(userEmail);

    //  서버로 전달하는 부분이 없기 때문에 submit 이벤트 중지
    e.preventDefault();
  }

  //  취소 버튼 클릭 시 state 변수의 내용을 모두 삭제
  const clickReset = () => {
    setUserId('');
    setUserPw('');
    setUserName('');
    setUserEmail('');
    
    //  부모 컴포넌트에서 전달받은 부모 컴포넌트의 state 값을 초기화하는 함수를 대신 호출
    props.reset();
  }

  return (
    <div>
      <form onSubmit={clickSubmit} onReset={clickReset}>
        <div className={'mt-3'}>
          <label htmlFor="user-id" className={'form-label'}>User ID :</label>
          <input type="text" className={'form-control'} id={'user-id'} value={userId} onChange={changeUserId} placeholder={'사용자 ID를 입력하세요'}/>
        </div>
        <div className={'mt-3'}>
          <label htmlFor="user-pw" className={'form-label'}>User PW :</label>
          <input type="password" className={'form-control'} id={'user-pw'} value={userPw} onChange={changeUserPw} placeholder={'비밀번호를 입력하세요'}/>
        </div>
        <div className={'mt-3'}>
          <label htmlFor="user-name" className={'form-label'}>User Name :</label>
          <input type="text" className={'form-control'} id={'user-name'} value={userName} onChange={changeUserName} placeholder={'이름을 입력하세요'}/>
        </div>
        <div className={'mt-3'}>
          <label htmlFor="user-email" className={'form-label'}>User Email :</label>
          <input type="email" className={'form-control'} id={'user-email'} value={userEmail} onChange={changeUserEmail} placeholder={'이메일을 입력하세요'}/>
        </div>
        <div className={'mt-3 d-grid gap-2'}>
          <button type={'submit'} className={'btn btn-primary'}>확인</button>
          <button type={'reset'} className={'btn btn-secondary'}>취소</button>
        </div>
      </form>
    </div>
  );
}

export default JoinForm









