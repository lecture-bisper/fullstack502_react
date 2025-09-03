import Join from './components/Join.jsx'
import WelcomeDialog from './components/WelcomeDialog.jsx'
import SplitPanel from './components/SplitPanel.jsx'
import Contacts from './components/Contacts.jsx'
import Chat from './components/Chat.jsx'
import WelcomeDialog2 from './components/WelcomeDialog2.jsx'
import SignupDialog from './components/SignupDialog.jsx'
import ProfileCard from './components/ProfileCard.jsx'

function App() {
  return (
    <div className={'container mt-5'}>
      <h3>문제 풀이</h3>
      <Join />

      <hr/>

      <h3>Containment 사용</h3>
      <WelcomeDialog />

      <br/>
      <br/>

      {/* Containment 방식으로 자식 컴포넌트의 일부 UI를 지정하여 호출 시 props.children 이라는 이름으로 고정됨 */}
      {/* children 말고 다른 이름으로 일부 UI를 지정하고자 할 경우 자식 컴포넌트 호출 시 속성명을 지정하고, 다른 컴포넌트를 전달하여 사용 */}
      <SplitPanel left={<Contacts />} right={<Chat />} />

      <hr/>

      <h3>Specialization 사용</h3>
      <WelcomeDialog2 />

      <hr/>

      <h3>Specialization, Containment 함께 사용</h3>
      <SignupDialog />

      <br/>
      <br/>

      <ProfileCard />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App
