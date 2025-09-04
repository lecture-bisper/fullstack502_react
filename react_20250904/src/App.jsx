import Layout from './components/Layout.jsx'
import UserContext from './contexts/UserContext.jsx'
import useThemeStore from './stores/useThemeStore.jsx'
import AxiosTest from './components/AxiosTest.jsx'

function App() {

  //  zustand 로 상태관리하는 변수 가져오기
  const theme = useThemeStore(state => state.theme);
  //  zustand 로 상태관리하는 변수 수정용 함수 가져오기
  const changeTheme = useThemeStore(state => state.changeTheme);

  console.log(`현재 zustand로 관리하는 theme : ${theme}`);
  //  변수 수정용 함수로 내용 수정
  changeTheme('success');

  return (
    <div className={'container mt-5'}>
      {/*<h3>상태 관리 라이브러리 zustand</h3>*/}
      {/*<UserContext value={'아이유'}>*/}
      {/*  <Layout />*/}
      {/*</UserContext>*/}

      {/*<hr/>*/}

      {/*<h3>Axios 테스트</h3>*/}
      {/*<AxiosTest />*/}

      {/* Axios를 사용하여 게시판 만들기 */}



      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App
