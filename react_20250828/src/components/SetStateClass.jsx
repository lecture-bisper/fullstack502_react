/// SetStateClass.jsx
/// Date: 25. 8. 28.
/// Time: 오후 3:04
/// User: it
/// 

import React from "react";

//  클래스 컴포넌트 사용
class SetStateClass extends React.Component {

  //  자바스크립트 클래스의 생성자 (이름은 고정되어 있음)
  constructor(props) {
    super(props); // 부모 클래스의 생성자 호출

    //  자바스크립트의 생성자 안에 this.변수명 을 사용 시 클래스 필드(멤버 변수)로 동작
    //  SetStateClass 라는 클래스의 멤버 변수로 state 를 선언, 데이터 타입은 object 타입
    //  클래스 컴포넌트를 사용하는 리액트 컴포넌트의 state 를 선언
    this.state = {
      // key = StateString, value = Click 로 초기화
      StateString: 'Click',
    }
  }

  // 버튼 클릭 이벤트 시 동작하는 메소드
  StateChange = (flag) => {
    if (flag == 'direct') {
      //  클래스 멤버 변수인 state 의 요소 StateString 의 값을 직접 대입하여 수정
      //  일반적인 프로그래밍 방식으로 변수의 데이터를 수정하고 출력
      //  리액트는 Virtual DOM 을 사용하기 때문에 state의 내용을 직접 수정 시 수정된 내용이 Virtual DOM에 적용되지 않음, render() 함수를 실행하지 않음
      //  실제 변수의 값만 수정됨, 화면 업데이트 없음
      console.log(`원본 내용 : ${this.state.StateString}`);
      this.state.StateString = '직접 수정하여 클릭';
      console.log(`수정 내용 : ${this.state.StateString}`);
    }

    if (flag == 'setState') {
      //  클래스 멤버 변수인 state의 요소 StateString의 값을 setState() 함수를 사용하여 수정
      //  setState() 를 사용하면 Virtual DOM 의 내용을 수정, render() 함수를 호출
      //  실제 변수 값도 수정됨, 화면이 업데이트 됨
      //  setState() 실행 시 state 값의 수정을 직접하지 않고 event queue 에 수정 요청함, 변경되기 전의 내용이 콘솔에 출력됨
      console.log(`원본 내용 : ${this.state.StateString}`);
      this.setState({StateString: 'setState로 수정하여 클릭'});
      console.log(`수정 내용 : ${this.state.StateString}`);
    }
  }

  render() {
    return (
      <div>
        {/* JSX 문법에서 클릭 이벤트가 onclick -> onClick 로 변경됨 */}
        <button className={'btn btn-primary me-2'} onClick={(e) => {
          this.StateChange('direct', e)
        }}>state 직접 수정</button>
        
        <button className={'btn btn-primary'} onClick={(e) => {
          this.StateChange('setState', e)
        }}>setState로 변경</button>

        <br/>
        {/* state 의 값을 화면에 출력 */}
        [state 변경하기] StateString : {this.state.StateString}
      </div>
    );
  }
}

export default SetStateClass









