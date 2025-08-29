/// Notification.jsx
/// Date: 25. 8. 29.
/// Time: 오전 9:33
/// User: it
/// 

import React from "react";

class Notification extends React.Component {
  
  // 컴포넌트 호출 시 1번으로 호출
  constructor(props) {
    super(props);

    this.state = {}
    console.log('constructor() 호출');
  }

  // 3번으로 호출
  componentDidMount() {
    console.log('componentDidMount() 호출');
  }

  // 5번으로 호출(반복 호출)
  componentDidUpdate() {
    console.log('componentDidUpdate() 호출');
  }

  // 컴포넌트 삭제 시 6번으로 호출
  componentWillUnmount() {
    console.log('componentWillUnmount() 호출');
  }

  //  2번으로 호출, 업데이트 시 4번으로 호출(반복 호출)
  render() {
    return (
      <div className={'m-2 p-2 d-flex border rounded-3'}>
        <span className={'text-black fs-4'}>{this.props.message}</span>
        <p>{console.log('render() 호출')}</p>
      </div>
    );
  }
}

export default Notification









