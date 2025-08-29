/// NotificationList.jsx
/// Date: 25. 8. 29.
/// Time: 오전 9:31
/// User: it

import React from "react";
import Notification from "./Notification.jsx";

//  화면에 출력할 더미 데이터, 전역변수
const reservedNotifications = [
  { message: '안녕하세요. 메시지 테스트 입니다.', id: 1},
  { message: '두번째 메시지 테스트 입니다.', id: 2},
  { message: '세번째 메시지 테스트 입니다.', id: 3},
  { message: '네번째 메시지 테스트 입니다.', id: 4},
  { message: '다섯번째 메시지 테스트 입니다.', id: 5},
  { message: '여섯번째 메시지 테스트 입니다.', id: 6},
];

//  자바스크립트 타이머 객체의 값을 저장하기 위한 변수
let timer;

//  생명주기 함수를 확인하기 위해서 클래스 컴포넌트 사용
class NotificationList extends React.Component {

  //  클래스 컴포넌트의 생성자
  constructor(props) {
    super(props);

    //  클래스 컴포넌트의 state 객체
    this.state = {
      //  notifications 라는 key 명으로 빈 배열을 선언, state의 요소를 선언
      notifications: [],
    };
  }

  //  현재 컴포넌트의 UI 화면을 구성하고, 부모 컴포넌트에 출력된 후 동작하는 생명주기 함수
  componentDidMount() {
    
    // componentDidMount의 지역 변수
    // state로 관리되고 있는 요소를 객체 분할 할당 방식을 사용하여 변수에 대입 (처음에는 빈배열)
    const { notifications } = this.state;

    //  setInterval() : 자바스크립트에서 제공하는 타이머 함수, 지정한 시간이 지난 후 반복 동작
    timer = setInterval(() => {
      //  지역변수 notifications의 크기와 전역변수 reservedNotifications 의 크기 비교
      if (notifications.length < reservedNotifications.length) {
        //  지역변수인 notifications 의 현재 길이를 index 번호로 지정
        const index = notifications.length;
        //  지역변수인 notifications 에 전역변수의 데이터를 1개 추가
        notifications.push(reservedNotifications[index]);
        //  setState() 함수를 사용하여 state에서 관리하는 notifications 의 데이터를 수정
        //  state로 관리하고 있는 notifications 의 값을 지역변수인 notifications의 값으로 수정
        //  render() 함수를 호출하여 화면을 업데이트
        this.setState({notifications});
      }
      else {
        //  타이머 삭제
        clearInterval(timer);
      }
    //   2초 후 타이머 동작
    }, 2000);
  }

  //  컴포넌트 호출 시 constructor 실행 후 Virtual DOM 에 그릴 UI 를 구성 후 DOM과 교체
  render() {
    return (
      <div>
        {
          //  state 객체에 저장된 배열의 크기만큼 반복 실행 후 출력
          //  처음 컴포넌트 생성 시에는 state에 있는 notifications 가 빈배열이기 때문에 map() 함수가 동작하지 않음
          //  setState() 함수 실행 후 state 에 있는 notifications 에 값이 존재하기 때문에 map() 함수가 동작되어 자식 컴포넌트인 Notification 컴포넌트가 출력됨
          this.state.notifications.map((item, index) => {
            //  key : 자식 컴포넌트를 반복 (map, forEach 등)하여 호출할 경우 리액트는 호출한 자식 컴포넌트를 구분할 수 없음
            //  반복 호출한 컴포넌트를 구분하기 위해서 사용하는 속성이 key 임
            //  자식 컴포넌트를 구분하기 위해서 key 는 중복되지 않는 값을 사용해야 함

            //  key 로 사용할 적당한 값이 없을 경우 배열의 index를 key로 사용할 수 있음(권장하지않음)
            // return <Notification message={item.message} key={index} />
            return <Notification message={item.message} key={item.id} />
          })
        }
      </div>
    );
  }
}

export default NotificationList









