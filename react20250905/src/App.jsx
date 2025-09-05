
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Signup from './pages/Signup.jsx'
import Logout from './pages/Logout.jsx'
import Area from './pages/Area.jsx'
import Profile1 from './pages/Profile1.jsx'
import Profile2 from './pages/Profile2.jsx'

//  react-router-dom : 리액트 프로젝트를 MPA 방식으로 사용할 수 있도록 해주는 라이브러리

//  설치 : npm install react-router-dom

//  자주 사용하는 react router 컴포넌트
//  <BrowserRouter> : SPA 페이지를 MPA 페이지로 만들어주는 컴포넌트, 리액트 라우터 기본 컴포넌트
//  <Routes> : 페이지 컴포넌트를 여러개 가질 수 있는 컴포넌트, <Route> 컴포넌트를 여러개 가짐
//  <Route> : 화면에 그려지는 페이지 객체, <Route> 컴포넌트에 자식 컴포넌트로 <Route> 컴포넌트를 사용할 경우 부모 <Route> 컴포넌트의 주소를 기본 주소로 사용
//      path : 웹 브라우저에 표시되는 url 주소를 설정, 절대/상대 경로 다 사용 가능, * 사용 시 모든 페이지를 의미 (* 은 주로 error 페이지를 설정 시 사용)
//      element : path 속성으로 지정한 url과 매칭되는 실제 컴포넌트
//  <Link> : 리액트 라우터에서 사용되는 링크 전용 컴포넌트, html 의 <a> 태그와 같은 역할
//      to : 이동할 url 주소를 설정, <Route> 컴포넌트의 path 속성에 입력한 url 을 입력
//  <Outlet> : 현재 선택된 경로의 컴포넌트를 화면에 표시, 컴포넌트 중복 시 사용


//  쿼리스트링 : 기존의 GET 방식으로 웹 브라우저의 주소창에 파라미터를 함께 전달하는 방식
//  <Route> 컴포넌트의 path 속성값에 변경이 없음
//  element 속성에서 지정한 컴포넌트에서 몇가지 옵션 사항을 사용할 수 있음
//  옵션 :
//      pathname : 쿼리스트링을 제외한 현재 주소의 경로
//      search : 맨앞의 '?' 문자를 포함한 쿼리스트링 값 전체
//      hash : 주소의 '#' 문자열 뒤의 값 (구형 브라우저에서만 동작)
//      state : 페이지 이동 시 임의로 추가할 상태 값
//      key : location 객체의 고유한 값

//  useLocation(), useSearchParams() 훅을 사용하여 데이터를 가져올 수 있음
//  useLocation() 훅을 사용하여 데이터를 가져오면 원하는 파라미터 값을 가져오기 위해 직접 파싱해야 함
//  useSearchParams() 훅을 사용하여 데이터를 가져오면 파라미터 데이터만 가져올 수 있음
//  사용법 :
//    기존URL?파라미터1=값1&파라미터2=값2
//    const 변수명 = useLocation()


//  URL 파라미터 : REST api 방식의 주소형태로 구성되는 파라미터
//  <Route> 컴포넌트의 path 속성값 뒤에 '/' 와 ':파라미터명' 을 사용하여 데이터를 전달하는 방식
//  rest 방식으로 구성되어 있을 경우 사용
//  연결된 컴포넌트에서 useParams() 훅을 사용해야 함
//  사용법 :
//    기존URL/:파라미터1:/파라미터2 ...
//    <Route path={url/:test1/:test2} element={<URL />} />


//  useNavigate()  <Link> 컴포넌트를 사용하지 않고 다른 페이지로 이동할 수 있도록 하는 훅
//  사용법 :
//      const navi = useNavigate()
//      navi(-1);   // History 를 사용하여 이전 페이지로 이동, 숫자를 음수로 사용 시 이전 페이지로 이동, 양수로 사용 시 다음 페이지로 이동
//      navi(url);    // 지정한 URL 로 이동

function App() {
  return (
    <div className={'container mt-5'}>
      <BrowserRouter>
        <Routes>
          {/* path 속성의 url 은 절대/상대 경로 모두 사용 가능 */}
          {/* 상대 경로 형식 사용 시 부모 컴포넌트(Route) 의 주소가 존재해야 함 */}
          {/* 웹 브라우저 주소창에 '서버주소/' 입력 시 Home 컴포넌트가 표시됨 */}
          <Route path={'/'} element={<Home />} />
          {/* url을 '/about' 입력 시 About 컴포넌트가 표시됨 */}
          <Route path={'/about'} element={<About />} >
            {/* Outlet 사용 시 부모 컴포넌트의 내용과 자식 컴포넌트의 내용이 모두 표시됨 */}
            {/* Outlet 사용 시 url을 '부모 url + 자식 url' 로 해야 둘다 표시 됨 */}
            {/* Outlet 사용 시 자식 컴포넌트에 index 속성 사용 시 부모 컴포넌트의 url 만 입력해도 자식 컴포넌트의 내용까지 모두 출력됨 */}
            <Route path={'area'} element={<Area />} />
          </Route>
          {/* Route 컴포넌트의 path 속성에 없는 url 을 입력 시 접속하는 페이지로 설정 */}
          <Route path={'*'} element={<ErrorPage />} />

          {/* 절대 경로 방식을 사용하여 path 를 설정 */}
          <Route path={'/pages/login'} element={<Login />} />
          {/* Route 를 중첩하여 사용할 수 있음 (상대 경로 방식) */}
          {/* 부모 Route 는 element 속성이 존재하지 않음 */}
          <Route path={'/pages'}>
            {/* 자식 Route 중 index 속성을 사용한 Route 가 부모 Route 의 페이지로 동작 */}
            {/* index : 부모 Route 의 URL 을 자신의 URL로 사용한다는 의미 */}
            <Route index element={<Signup />} />
            {/* 자식 Route 의 URL 은 '부모 Route 의 URL + 자식 Route 의 URL' 형태로 사용 */}
            {/* 자식 Route 의 path 속성의 시작부분에 '/' 를 사용하지 않음 */}
            <Route path={'logout'} element={<Logout />} />

            <Route path={'profile2/:username/:age'} element={<Profile2 />} />
          </Route>

          <Route path={'/profile1'} element={<Profile1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App











