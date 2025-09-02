import NameForm from "./components/NameForm.jsx";
import RequestForm from "./components/RequestForm.jsx";
import FruitSelect from "./components/FruitSelect.jsx";
import Reservation from "./components/Reservation.jsx";
import Join from "./components/Join.jsx";
import Parent1 from './components/Parent1.jsx';
import Parent2 from './components/Parent2.jsx';
import Calculator from './components/Calculator.jsx';

function App() {
  return (
    <div className={'container mt-5'}>
      <h3>리액트 form 사용하기</h3>
      <NameForm />

      <hr />

      <h3>Textarea 사용하기</h3>
      <RequestForm />

      <hr/>

      <h3>Select 사용하기</h3>
      <FruitSelect />

      <hr/>

      <h3>Checkbox 사용하기</h3>
      <Reservation />

      <hr />

      <h3>form 사용하기 문제</h3>
      <Join />

      <hr/>

      <h3>state 공유하기</h3>
      <Parent1 />

      <hr/>

      <h3>state 끌어 올리기</h3>
      <Parent2 />
      <br/>
      <Calculator />



      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App
