/// NameForm.jsx
/// Date: 25. 9. 2.
/// Time: 오전 9:31
/// User: it
/// 

import {useState} from "react";

function NameForm() {

  //  useState 훅을 사용하여 state로 관리하고 있는 변수, state로 관리되는 변수의 내용 수정 시 화면 업데이트
  const [value, setValue] = useState('');

  //  input 태그의 value 속성값 변경 시 동작할 이벤트 함수
  //  event : 매개변수로 받아온 event 는 현재 페이지에서 발생한 이벤트
  //  event.target : 지정한 이벤트를 발생시킨 대상
  //  event.target.value : 현재 이벤트가 발생한 태그가 가지고 있는 value 속성값
  const eventTextChange = (event) => setValue(event.target.value);

  //  form 태그의 submit 이벤트 발생 시 동작할 이벤트 함수
  const eventFormSubmit = e => {
    alert(`입력한 이름 : ${value}`);
    //  preventDefault() : 지정한 이벤트의 동작을 정지하는 함수
    e.preventDefault();
  }

  return (
    <form onSubmit={eventFormSubmit}>
      <div className={'mt-3'}>
        <label htmlFor={"user-name"} className={'form-label'}>이름 : </label>
        {/* input 태그의 value 속성에 state로 관리되는 변수를 대입하면 저장된 값을 화면에 재랜더링할 수 있음 */}
        <input type={"text"} className={'form-control'} value={value} onChange={eventTextChange}/>
        <button type={'submit'} className={'btn btn-primary mt-2'}>확인</button>
      </div>
    </form>
  );
}

export default NameForm









