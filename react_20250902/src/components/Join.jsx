/// Join.jsx
/// Date: 25. 9. 2.
/// Time: 오전 11:31
/// User: it
///

//  문제 1) 회원 가입 페이지를 작성하세요
//  id, 비밀번호, 이름, email, 휴대전화, 성별 정보를 입력받고 확인 버튼 클릭 시 console이나 alert 으로 결과를 출력(submit 버튼 클릭 시 출력)
//  변수명 - id : userId, 비밀번호 : userPw, 이름 : userName, email : userEmail, 휴대전화 : userPhone, 성별 : userGender
import { useState } from 'react'

function Join () {

  //  사용자 입력을 저장하기 위한 변수, state로 관리
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userGender, setUserGender] = useState('남성')

  //  submit 버튼 클릭 시 동작할 이벤트 함수
  const eventFormSubmit = e => {
    let msg = `User ID : ${userId}
User PW : ${userPw}
User Name : ${userName}
User Email : ${userEmail}
User Phone : ${userPhone}
User Gender : ${userGender}`
    console.log(msg)
    alert(msg)
    e.preventDefault()
  }

  //  각각의 input 태그에 대한 이벤트 처리 함수
  const changeUserId = e => setUserId(e.target.value)
  const changeUserPw = e => setUserPw(e.target.value)
  const changeUserName = e => setUserName(e.target.value)
  const changeUserEmail = e => setUserEmail(e.target.value)
  const changeUserPhone = e => setUserPhone(e.target.value)
  const changeUserGender = e => setUserGender(e.target.value)

  return (
    <form onSubmit={eventFormSubmit}>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto'}>
          <div className={'mt-3'}>
            <label htmlFor="user-id" className={'form-label'}>USER ID : </label>
            <input type="text" className={'form-control'} id={'user-id'}
                   value={userId}
                   onChange={changeUserId}/>
          </div>
          <div className={'mt-3'}>
            <label htmlFor="user-pw" className={'form-label'}>USER PW : </label>
            <input type="text" className={'form-control'} id={'user-pw'}
                   value={userPw}
                   onChange={changeUserPw}/>
          </div>
          <div className={'mt-3'}>
            <label htmlFor="user-name" className={'form-label'}>USER NAME
              : </label>
            <input type="text" className={'form-control'} id={'user-name'}
                   value={userName}
                   onChange={changeUserName}/>
          </div>
          <div className={'mt-3'}>
            <label htmlFor="user-email" className={'form-label'}>USER EMAIL
              : </label>
            <input type="email" className={'form-control'} id={'user-email'}
                   value={userEmail}
                   onChange={changeUserEmail}/>
          </div>
          <div className={'mt-3'}>
            <label htmlFor="user-phone" className={'form-label'}>USER PHONE
              : </label>
            <input type="text" className={'form-control'} id={'user-phone'}
                   value={userPhone}
                   onChange={changeUserPhone}/>
          </div>
          <div className={'mt-3'}>
            <label htmlFor="user-gender" className={'form-label'}>USER GENDER
              : </label>
            <select className={'form-control'} id={'user-gender'}
                    value={userGender}
                    onChange={changeUserGender}>
              <option value="남성">남성</option>
              <option value="여성">여성</option>
            </select>
          </div>
          <div className={'d-grid gap-2 mt-3'}>
            <button type={'submit'} className={'btn btn-primary'}>회원가입</button>
            <button type={'reset'} className={'btn btn-secondary'}>취소</button>
          </div>
        </div>
      </div>
    </form>)
}

export default Join









