/// WelcomeDialog.jsx
/// Date: 25. 9. 3.
/// Time: 오전 10:14
/// User: it
/// 

import FancyBorder1 from './FancyBorder1.jsx'
import FancyBorder2 from './FancyBorder2.jsx'
import Chat from './Chat.jsx'

function WelcomeDialog () {
  return (
    <div className={'border border-2 border-primary p-3'}>
      <h4>부모 컴포넌트 영역</h4>
      <br/>

      <h4>기존 사용 방식</h4>
      {/* 단축 방식 */}
      {/*<FancyBorder1 color={'blue'} />*/}
      {/* 정규 방식 */}
      <FancyBorder1 color={'blue'}></FancyBorder1>

      <hr/>

      <h4>Containment 방식</h4>
      {/* 부모 컴포넌트가 자식 컴포넌트 호출 시 자식 컴포넌트의 자식 태그로 html 태그 및 다른 컴포넌트를 입력하여 UI를 구성 */}
      {/* 부모 컴포넌트가 자식 컴포넌트로 전달하는 props에 html 태그 및 다른 컴포넌트가 포함되어 전달됨(children 이라는 이름으로 고정되어 전달) */}
      <FancyBorder2 color={'blue'}>
        <h2>우리 사이트에 방문하신 것을 환영합니다.</h2>
        <p>안녕하세요</p>
      </FancyBorder2>
      {/* 부모 컴포넌트가 하나의 자식 컴포넌트를 여러번 호출 시 여러개의 자식 컴포넌트의 UI를 직접 변경할 수 있음 */}
      <FancyBorder2 color={'blue'}>
        <p>안녕하세요</p>
        <h2>우리 사이트에 방문하신 것을 환영합니다.</h2>
      </FancyBorder2>
    </div>
  );
}

export default WelcomeDialog









