/// Accommodate.jsx
/// Date: 25. 8. 29.
/// Time: 오후 3:29
/// User: it
/// 

import {useEffect, useState} from "react";
import useCounter from "./useCounter.jsx";

//  전역변수로 최대값 설정
const MAX_CAPACITY = 10;

function Accommodate(props) {

  const [ isFull, setIsFull ] = useState(false);
  // 커스텀 훅 사용 시
  const [ count, incrementCount, decrementCount ] = useCounter(0);

  // 커스텀 훅 미사용 시
  // const [count, setCount] = useState(0);
  //
  // //  이벤트 발생 시 동작할 함수
  // const incrementCount = () => {
  //   //  현재 count 값을 받아서 count +1 한 결과를 반환
  //   return setCount((count) => count + 1);
  // }
  //
  // const decrementCount = () => {
  //   return setCount((count) => Math.max(count - 1, 0));
  // }

  useEffect(() => {
    console.log("----------");
    console.log('useEffect() 호출');
    console.log(`isFull : ${isFull}`);
  }, []);

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`현재 count 값 : ${count}`);
  }, [count]);

  return (
    <div>
      <p>{`총 ${count} 명 수용했습니다.`}</p>
      <button type={'button'} className={'btn btn-primary me-2'} onClick={incrementCount} disabled={isFull}>입장</button>
      <button type={'button'} className={'btn btn-warning'} onClick={decrementCount}>퇴장</button>
      {isFull && <p className={'text-danger'}>정원이 가득찼습니다.</p> }
    </div>
  );
}

export default Accommodate









