/// Profile2.jsx
/// Date: 25. 9. 5.
/// Time: 오전 11:07
/// User: it
/// 

import { useNavigate, useParams } from 'react-router-dom'

function Profile2 () {

  //  리액트 라우터에서 제공하는 useParams() 훅을 사용하여 파라미터로 전달된 데이터 가져오기
  //  useParams() 훅으로 가져오는 데이터는 object 타입임
  //  '변수명.파라미터명' 으로 데이터에 접근 가능
  const profile = useParams();
  console.log('useParams() 로 가져온 데이터');
  console.log(profile);

  //  리액트 라우터에서 제공하는 useNavigate() 훅을 사용하여 이전페이지, 다음페이지로 이동가능
  //  <Route> 컴포넌트의 path 속성에 입력된 주소를 입력하여 <Link> 컴포넌트 없이 원하는 컴포넌트로 이동 가능
  const navi = useNavigate();

  //  useNavigate() 를 저장한 변수의 매개변수로 음수 사용 시 이전페이지로 이동
  //  useNavigate() 를 저장한 변수의 매개변수로 양수 사용 시 이전페이지로 이동
  //  useNavigate() 를 저장한 변수의 매개변수로 url 입력 시 지정한 페이지로 이동
  const goPrev = () => navi(-1);
  const goNext = () => navi(1);
  const goAbout = () => navi('/about');

  return (
    <div>
      <h1>Profile2 페이지</h1>
      <p>Rest 방식으로 데이터를 가져오는 페이지</p>
      <br/><br/>
      <h4>useParams() 사용 파라미터 1 : {profile.username}</h4>
      <h4>useParams() 사용 파라미터 2 : {profile.age}</h4>

      <br/><br/>

      <button type={'button'} className={'btn btn-warning'} onClick={goPrev}>뒤로 가기</button>
      <button type={'button'} className={'btn btn-info'} onClick={goNext}>앞으로 가기</button>
      <button type={'button'} className={'btn btn-primary'} onClick={goAbout}>지정한 곳으로 가기</button>
    </div>
  )
}

export default Profile2









