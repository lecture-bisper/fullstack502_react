import NotificationList from "./components/NotificationList.jsx";
import Counter from "./components/Counter.jsx";
import Info from "./components/Info.jsx";
import VolumeControl from "./components/VolumeControl.jsx";
import HookUseMemo from "./components/HookUseMemo.jsx";
import HookUseRef from "./components/HookUseRef.jsx";
import Accommodate from "./components/Accommodate.jsx";

function App() {
  return (
    <div className={'container mt-5'}>
      <h3>클래스 생명주기 함수</h3>
      <NotificationList />

      <hr/>

      <h3>state 사용 이유</h3>
      <Counter />

      <hr/>

      <h3>useState 사용하기</h3>
      <Info />

      <hr/>

      <h3>useEffect 사용하기</h3>
      <VolumeControl />

      <hr/>

      <h3>useMemo/useCallback 사용하기</h3>
      <HookUseMemo />

      <hr/>
      <h3>useRef 사용하기</h3>
      <HookUseRef />

      <hr />

      <h3>커스텀 훅 사용하기</h3>
      <Accommodate />


      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App
