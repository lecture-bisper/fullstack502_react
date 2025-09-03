/// Join.jsx
/// Date: 25. 9. 3.
/// Time: 오전 9:17
/// User: it
///

//  문제 2) 부모 컴포넌트인 Join 과 자식 컴포넌트인 JoinForm 에 state 끌어올리기를 사용하여 회원 가입 페이지를 완성하세요
//  userId, userPw, userEmail, userName 4가지를 정보를 입력받음
//  자식 컴포넌트인 JoinForm 에 정보를 입력하면, 부모 컴포넌트인 Join 의 하단에 입력한 내용을 출력

import { useState } from 'react'
import JoinForm from './JoinForm.jsx'

//  부모 컴포넌트
function Join () {

  // 부모 컴포넌트에서 state로 관리되는 변수, 초기값은 '', 자식 컴포넌트에 setState()를 전달하여 자식 컴포넌트의 데이터를 가져올 예정
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const reset = () => {
    setId('');
    setPw('');
    setEmail('');
    setName('');
  }

  return (
    <div>
      <div className={'row'}>
        <div className={'col-sm-6 mx-auto border border-2 border-primary rounded-3 p-3 m-3'}>
          <h4 className={'text-center'}>회원 가입</h4>

          {/* 아래의 컴포넌트에 속성명을 지정하여 자식 컴포넌트에 함수 전달 */}
          <JoinForm setupId={setId} setupPw={setPw} setupName={setName} setupEmail={setEmail} reset={reset}/>
        </div>
      </div>

      <hr/>

      <div className={'row'}>
        <div className={'col-sm-6 mx-auto border border-2 border-primary rounded-3 p-3 m-3 text-start'}>
          {/* 자식 컴포넌트에서 입력된 내용을 state 끌어올리기를 통해서 부모 컴포넌트로 전달받은 데이터를 출력 */}
          <h5>사용자 ID    : {id}</h5>
          <h5>사용자 PW    : {pw}</h5>
          <h5>사용자 Name  : {name}</h5>
          <h5>사용자 Email : {email}</h5>
        </div>
      </div>
    </div>
  )
}

export default Join









