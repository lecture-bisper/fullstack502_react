/// ProfilePage.jsx
/// Date: 25. 9. 3.
/// Time: 오후 2:25
/// User: it
/// 

//  useContext() 훅을 사용하기 위해서 import
import { useContext } from 'react'
//  Context 를 사용하기 위해서 파일로 분리해 놓은 Context 를 import
import ThemeContext from '../contexts/ThemeContext.jsx'
import UserContext from '../contexts/UserContext.jsx'

function ProfilePage (props) {

  //  useContext() : Context API 를 쉽게 사용하기 위해서 제공되는 Hooks
  //  Provider 를 통해서 Context 에 저장된 데이터를 useContext() 훅을 사용하여 가져옴
  //  useContext() 훅 사용 시 Consumer 는 필요없음
  //  useContext() 훅 사용 시 타켓 컴포넌트에서 직접 데이터를 가져올 수 있음
  //  사용법 : const 변수명 = useContext(데이터가 저장된 Context);

  const contextTheme = useContext(ThemeContext);
  const contextUser = useContext(UserContext);

  return (
    <div>
      <h4>props로 받아온 user : {props.user}</h4>
      <h4>props로 받아온 theme : {props.theme}</h4>
      <hr/>
      <h4>useContext 로 받아온 user : {contextUser}</h4>
      <h4>useContext 로 받아온 theme : {contextTheme}</h4>
    </div>
  )
}

export default ProfilePage









