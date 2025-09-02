/// RequestForm.jsx
/// Date: 25. 9. 2.
/// Time: 오전 10:11
/// User: it
/// 

import {useState} from "react";

function RequestForm() {
  const [value, setValue] = useState('');

  // textarea 의 value 를 가져오면 textarea 태그의 시작 태그와 끝 태그 사이의 text를 가져옴
  const eventTextareaChange = e => setValue(e.target.value);

  const eventFormSubmit = e => {
    alert(`입력한 요청사항 : ${value}`);
    e.preventDefault();
  }

  return (<form onSubmit={eventFormSubmit}>
    <div className={'mt-3'}>
      <label htmlFor="comments" className={'form-label'}>요청사항 : </label>
      {/* html 의 textarea 는 value 속성이 없으나 jsx 의 textarea 에서는 사용 편의성을 위해서 input 태그와 같이 value 속성에 데이터를 입력함 */}
      <textarea id={'comments'} rows="5" className={'form-control'} value={value}
                onChange={eventTextareaChange}></textarea>
      <button type={'submit'} className={'btn btn-primary mt-2'}>확인</button>
    </div>
  </form>);
}

export default RequestForm









