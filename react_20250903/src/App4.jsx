/// App4.jsx
/// Date: 25. 9. 3.
/// Time: 오후 2:19
/// User: it
/// 

//  Context 에 데이터를 저장하기 위해서 파일로 분리된 Context 를 import 함
import ThemeContext from './contexts/ThemeContext.jsx';
import UserContext from './contexts/UserContext.jsx';
import Layout from './components/Layout.jsx';
import AxiosTest from './components/AxiosTest.jsx'

//  Context 사용 순서
//  1. Context 에 저장할 데이터가 있는 컴포넌트에서 파일로 분리된 Context 를 import
//  2. Context.Provider 를 사용하여 데이터를 저장
//  3. Context 에서 데이터를 가져올 컴포넌트에서 파일로 분리된 Context 를 import
//  4. useContext() 를 사용하여 데이터가 저장된 Context를 호출

function App4 () {

  const theme = 'primary';
  const signedInUser = '아이유';

  return (
    <div className={'container mt-5'}>
      {/* 데이터 저장 시는 동일하게 Provider 를 사용하여 저장 */}
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>

      <br/>
      <hr/>
      <br/>

      <h3>Axios 사용하기</h3>
      <AxiosTest />
    </div>
  );
}

export default App4









