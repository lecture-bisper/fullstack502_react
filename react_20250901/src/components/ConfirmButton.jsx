/// ConfirmButton.jsx
/// Date: 25. 9. 1.
/// Time: 오전 10:25
/// User: it
/// 

import {useState} from "react";

function ConfirmButton(props) {

  //  state로 관리되는 변수, 초기값 false
  const [isConfirmed, setIsConfirmed] = useState(false);

  //  이벤트 발생 시 동작할 이벤트 처리 함수
  //  현재 값의 반대되는 값으로 변경
  const handleConfirm = () => {
    setIsConfirmed(!isConfirmed);
  }

  return (
    <div>
      {/* 클릭 이벤트 발생 시 handleConfirm() 함수를 호출 */}
      {/* disabled 속성에 변수 isConfirmed 의 현재 값을 설정 */}
      {/* text 부분에 변수 isConfirmed 의 값을 삼항연산자로 연산하여 결과를 출력 */}
      <button type={'button'} className={'btn btn-primary'} onClick={handleConfirm} disabled={isConfirmed}>{isConfirmed ? '확인 완료' : '확인하기'}</button>
    </div>
  );
}

export default ConfirmButton









