import Events from "./components/Events.jsx";
import ConfirmButton from "./components/ConfirmButton.jsx";
import TextBox from "./components/TextBox.jsx";
import Greeting from "./components/Greeting.jsx";
import LoginControl from "./components/LoginControl.jsx";
import MailBox from "./components/MailBox.jsx";
import LoginControl2 from "./components/LoginControl2.jsx";
import MainPage from "./components/MainPage.jsx";
import LandingPage from "./components/LandingPage.jsx";
import List from "./components/List.jsx";
import AttendanceBook from "./components/AttendanceBook.jsx";

function App() {
  return (
    <div className={'container mt-5'}>
      <h3>이벤트 사용하기</h3>
      <Events />
      <br/>
      <ConfirmButton />
      <br/>
      <TextBox />

      <br/>
      <hr/>
      <br/>
      <h3>조건부 랜더링</h3>
      <Greeting isLoggedIn={false}/>

      <hr/>

      <h3>엘리먼트 변수 사용하기</h3>
      <LoginControl />

      <hr/>

      <h3>인라인 if 사용하기</h3>
      <MailBox unreadMessage={0} count={0}/>
      <br/><br/>
      <MailBox unreadMessage={10} count={10}/>

      <hr/>

      <h3>인라인 if ~ else 사용하기</h3>
      <LoginControl2 />

      <hr/>

      <h3>랜더링 막기</h3>
      <MainPage />

      <hr/>

      <LandingPage />

      <hr/>

      <h3>리스트와 키</h3>
      <List />
      <br/>
      <AttendanceBook />


      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App
