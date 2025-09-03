/// Content.jsx
/// Date: 25. 9. 3.
/// Time: 오후 2:24
/// User: it
/// 


import ProfilePage from './ProfilePage.jsx'
import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext.jsx'
import UserContext from '../contexts/UserContext.jsx'

function Content () {

  // useContext() 로 Context 에 저장된 데이터를 가져옴
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div>
      {/* 가져온 데이터를 props 를 통해서 자식 컴포넌트에 전달 */}
      <ProfilePage theme={theme} user={user}/>
    </div>
  );
}

export default Content









