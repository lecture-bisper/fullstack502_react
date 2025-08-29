/// Counter.jsx
/// Date: 25. 8. 29.
/// Time: 오전 11:11
/// User: it
/// 

import CounterClass from "./CounterClass.jsx";
import CounterFunc from "./CounterFunc.jsx";

function Counter(props) {

  //  지역변수 선언, 초기값으로 0 을 설정
  let count = 0;

  return (
    <div>
      <h4>state 없이 카운트</h4>
      <div>
        <p>총 {count} 번 클릭했습니다.</p>
        <button type={'button'} className={'btn btn-outline-primary'} onClick={() => {
          //  변수의 값을 수정 시 데이터는 수정되지만 render() 함수가 호출되지 않기 때문에 화면에 표시되지 않음
          count++;
          console.log(`count : ${count}`);
        }}>클릭 시 count 올리기</button>

        <br/>

        <CounterClass />

        <br/>

        <CounterFunc />
      </div>
    </div>
  );
}

export default Counter









