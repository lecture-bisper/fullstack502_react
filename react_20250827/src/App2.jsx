//  자식 컴포넌트로 사용할 컴포넌트를 로드
import Library from "./Library.jsx";
import Car from "./components/Car.jsx";
import BootstrapCDN from "./components/BootstrapCDN.jsx";
import BootstrapReact from "./components/BootstrapReact.jsx";
import Compo from "./components/Compo.jsx";
import OriComponent from "./components/OriComponent.jsx";

function App2(props) {

  return (
    <div>
      {/* 자식 컴포넌트로 Library 컴포넌트를 화면에 출력 */}
      <Library />
      <br/>

      <Car />

      <BootstrapCDN />
      <br />
      <BootstrapReact />

      <hr/>

      <Compo />

      <br/>
      <hr/>
      <br/>



      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App2;