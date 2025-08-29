/// CounterClass.jsx
/// Date: 25. 8. 29.
/// Time: 오전 11:19
/// User: it
/// 

import React from "react";

class CounterClass extends React.Component {

  constructor(props) {
    super(props);

    //  클래스 필드로 선언한 변수
    this.count = 0;
    //  클래스 컴포넌트의 state로 관리하는 변수
    this.state = { stateCount: 0 };
  }

  //  화면의 UI 업데이트가 발생하는 조건은 3가지
  //  부모가 전달한 데이터인 props 가 변경될 경우
  //  setState() 함수를 호출했을 경우
  //  forceUpdate() 함수를 호출했을 경우
  render() {
    return (
      <div className={'mt-3 border-top'}>
        <h4>class 컴포넌트에서 카운트</h4>
        <p>총 {this.count} 번 클릭했습니다.</p>
        <button type={'button'} className={'btn btn-outline-success'} onClick={() => {
          this.count++;
          console.log(`class count(forceUpdate) : ${this.count}`);
          this.forceUpdate();
        }}>forceUpdate()로 count 올리기</button>

        <p>총 {this.state.stateCount} 번 클릭했습니다.</p>
        <button type={'button'} className={'btn btn-outline-warning'} onClick={() => {
          console.log(`class count(setState) : ${this.state.stateCount + 1}`);
          this.setState({ stateCount: this.state.stateCount + 1 });
        }}>setState()로 count 올리기</button>
      </div>
    );
  }
}

export default CounterClass









