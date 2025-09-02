/// Reservation.jsx
/// Date: 25. 9. 2.
/// Time: 오전 11:15
/// User: it
/// 

import {useState} from "react";

function Reservation() {

  //  form 태그에서 사용자 입력을 받는 input 태그가 2개 이므로 상태 관리를 위한 state 관리되는 변수도 2개
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const eventFormSubmit = e => {
    alert(`아침 식사 여부 : ${haveBreakfast ? '식사함' : '식사 안함'}, 방문객 수 : ${numberOfGuest}`);
    e.preventDefault();
  }

  const eventCountChange = e => setNumberOfGuest(Number(e.target.value));

  return (
    <form onSubmit={eventFormSubmit}>
      <div className={'mt-3'}>
        <label htmlFor={'chk'} className={'form-label'}>아침식사 여부 : </label>
        {/* checkbox 로 동작하기 때문에 해당 태그가 선택되었는지 확인하기 위한 checked 속성에 state 로 관리되는 변수를 설정 */}
        {/* checkbox 의 값 변경이 발생할 경우 onChange 이벤트에 직접 콜백함수를 입력하여 처리 */}
        <input type="checkbox" className={'form-check-input ms-2'} id={'chk'} checked={haveBreakfast} onChange={(e) => {
          setHaveBreakfast(e.target.checked);
        }}/>
      </div>
      <div className={'mt-3'}>
        <label htmlFor={'count'} className={'form-label'}>방문객 수 : </label>
        <input type="number" className={'form-control'} id={'count'} value={numberOfGuest} onChange={eventCountChange}/>
      </div>
      <div className={'mt-3'}>
        <button type={'submit'} className={'btn btn-primary'}>확인</button>
      </div>
    </form>
  );
}

export default Reservation









