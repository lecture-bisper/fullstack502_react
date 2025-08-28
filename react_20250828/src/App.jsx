import './App.css'
import CommentList from "./components/CommentList.jsx";
import {Button} from "react-bootstrap";

function App() {
  return (
    <div>
      <CommentList />

      <hr/>
      <br/>
      <h3>부트스트랩 적용하기</h3>
      <button style={{marginRight: 8}}>기본 버튼</button>
      <button className={'btn btn-primary me-2'}>web 부트스트랩 버튼</button>
      <Button variant={'primary'}>react-bootstrap 버튼</Button>
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default App
