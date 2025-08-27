import FuncComponent from "./FuncComponent.jsx";
import ClassComponent from "./ClassComponent.jsx";

function Compo(props) {

  return (
    <div>
      <h3>함수 컴포넌트 사용하기</h3>
      <FuncComponent />
      
      <hr/>
      <br/>
      
      <h3>클래스 컴포넌트 사용하기</h3>
      <ClassComponent />

    </div>
  );
}

export default Compo;