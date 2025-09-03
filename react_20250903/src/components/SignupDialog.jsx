/// SignupDialog.jsx
/// Date: 25. 9. 3.
/// Time: 오전 11:24
/// User: it
/// 

import { useState } from 'react'
import Dialog2 from './Dialog2.jsx'

function SignupDialog (props) {

  const [nickName, setNickName] = useState('');

  const handleNickName = e => setNickName(e.target.value);
  const handleSignup = () => alert(`어서오세요, ${nickName} 님`);
  const handleCheckboxChange = () => alert('체크되었습니다.');

  return (
    <div>
      <Dialog2 title={'화성 탐사 프로그램'} message={'닉네임을 입력하세요'} color={'primary'}>
        <input type="text" className={'form-control'} value={nickName} onChange={handleNickName}/>
        <button type={'button'} className={'btn btn-primary mt-2'} onClick={handleSignup}>가입하기</button>
      </Dialog2>

      <br/>
      <br/>

      <Dialog2 title={'심해 탐사 프로그램'} message={'닉네임을 알려주세요'} color={'success'}>
        <div className={'mt-3'}>
          <label htmlFor="chk" className={'form-check-label me-3'}>18세 이상 :
            <input type="checkbox" className={'form-check-input ms-2'} id={'chk'} onChange={handleCheckboxChange}/>
          </label>
          <button type={'button'} className={'btn btn-primary'} onClick={handleSignup}>가입하기</button>
        </div>
      </Dialog2>

    </div>
  )
}

export default SignupDialog









