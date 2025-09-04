/// ProfilePage.jsx
/// Date: 25. 9. 4.
/// Time: 오전 9:29
/// User: it
/// 

//  zustand 상태 관리 라이브러리
//  zustand 는 리액트에서 사용하는 상태 관리 라이브러리로 Context API 혹은 useContext() 훅 과 같이 데이터를 컴포넌트에 저장하고, 원하는 위치에서 호출하여 사용하는 방식
//  create() 함수를 사용하여 object 타입의 객체를 생성하고 상태 관리를 할 key 와 value 를 저장
//  상태 관리 중인 객체의 데이터를 변경하기 위한 상태 변경 함수를 사용자가 입력하여 외부에서 데이터를 수정할 수 있도록 함
//  단순히 조상 컴포넌트에서 여러 단계 아래의 자손 컴포넌트로 데이터를 전달 시에는 수정용 함수를 입력하지 않아도 됨

//  create() : zustand 에서 제공하는 함수로 zustand 상태 관리 객체를 생성
//  set() : zustand 에서 제공하는 함수로 zustand 로 상태 관리 중인 객체의 데이터를 수정

//  사용법(설치)
//  > npm install zustand

//  사용법(import)
//  import { create } from 'zustand';

//  변수명을 선언, 기본적으로 커스텀 훅이기 때문에 use 를 접두사로 사용해야 함
//  접미사로 Store 를 사용하여 상태관리 라이브러리 변수라는 것을 알려줌

//  const use변수명Store = create((set) => ({
//      저장할 데이터의 변수명 : '초기값',   // key : value 형태로 사용
//      데이터 수정용 함수명 : (수정할 값) => set(() => ({저장할 데이터 변수명 : 수정할 값})),    // 데이터 수정용 함수이므로 원하는 이름 사용 가능, 여러개를 추가하여 사용할 수 있음
//  }))

//  외부에 출력될 변수명을 default export로 설정
//  export default use변수명Store;


//  사용법(데이터 가져오기, 데이터 수정)
//  default export로 설정된 zustand 객체를 import 함
//  import use변수명Store from '경로';

//  실제로 사용하는 컴포넌트에서 zustand 객체에서 변수와 데이터 수정용 함수를 모두 가져옴
//  단순히 값만 필요 시 변수만 가져올 수 있음, 데이터 수정만 필요 시 수정용 함수만 가져올 수 있음
//  const 변수명 = use변수명Store(state => state.변수명);
//  const 데이터수정용함수명 = use변수명Store(state => state.데이터수정용함수명);


//  데이터가 수정되는 부분에서 수정되는 데이터를 계속 확인하기 위해서 useEffect()를 사용하고 의존성 배열에 포함하여 확인
//  useEffect(() => {
//    데이터 수정 함수1(수정할 값);
//    데이터 수정 함수2(수정할 값);
//  }, [zustand변수1, zustand변수2, ...]);

//  useContext() 훅을 사용하기 위해 import
import { useContext } from 'react'

//  Context 객체를 사용하기 위해 import
import ThemeContext from '../contexts/ThemeContext.jsx'
import UserContext from '../contexts/UserContext.jsx'

//  사용자가 생성한 zustand store 객체를 import
import useThemeStore from '../stores/useThemeStore.jsx'
import useUserStore from '../stores/useUserStore.jsx'
import useNumberStore from '../stores/useNumberStore.jsx'

function ProfilePage () {

  //  Context 에 저장된 데이터를 useContext() 훅으로 가져옴
  const contextTheme = useContext(ThemeContext);
  const contextUser = useContext(UserContext);

  //  zustand store 로 관리하는 변수 가져오기
  const theme = useThemeStore(state => state.theme);
  const name = useUserStore(state => state.name);
  const number = useNumberStore(state => state.number);

  return (
    <div className={'mt-3'}>
      <h4>Context API / useContext 사용</h4>
      <h5>useContext로 Context API 에서 받아온 theme : {contextTheme}</h5>
      <h5>useContext로 Context API 에서 받아온 user : {contextUser}</h5>

      <hr/>

      <h4>zustand 사용</h4>
      <h5>zustand 로 store 에서 받아온 theme : {theme}</h5>
      <h5>zustand 로 store 에서 받아온 user : {name}</h5>

      <hr/>

      <div className={'border border-2 border-success-subtle rounded-3 m-3 p-3'}>
        <h5 className={'text-center'}>zustand로 가져온 number : {number}</h5>
      </div>
    </div>
  )
}

export default ProfilePage









