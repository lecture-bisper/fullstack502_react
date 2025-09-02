/// Join2.jsx
/// Date: 25. 9. 2.
/// Time: 오후 3:40
/// User: it
/// 

//  문제 2) 부모 컴포넌트인 Join 과 자식 컴포넌트인 JoinForm 에 state 끌어올리기를 사용하여 회원 가입 페이지를 완성하세요
//  userId, userPw, userEmail, userName 4가지를 정보를 입력받음
//  자식 컴포넌트인 JoinForm 에 정보를 입력하면, 부모 컴포넌트인 Join 의 하단에 입력한 내용을 출력

function Join2 (props) {
  return (
    <div>
      <div className={'row'}>
        <div className={'col-sm-6 mx-auto border border-2 border-primary rounded-3 p-3 m-3'}>
          <h4 className={'text-center'}>회원 가입</h4>

          {/* 아래의 컴포넌트에 속성명을 지정하여 자식 컴포넌트에 함수 전달 */}
          <JoinForm />
        </div>
      </div>

      <hr/>

      <div className={'row'}>
        <div className={'col-sm-6 mx-auto border border-2 border-primary rounded-3 p-3 m-3 text-start'}>
          <h5>사용자 ID    :  </h5>
          <h5>사용자 PW    :  </h5>
          <h5>사용자 Name  :  </h5>
          <h5>사용자 Email :  </h5>
        </div>
      </div>
    </div>
  );
}

export default Join2;









