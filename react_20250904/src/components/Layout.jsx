/// Layout.jsx
/// Date: 25. 9. 4.
/// Time: 오전 9:27
/// User: it
/// 

import Contents from './Contents.jsx'
import { useState } from 'react'

//  사용자가 생성한 zustand Store 객체를 import
import useNumberStore from '../stores/useNumberStore.jsx'

function Layout () {

  const [num, setNum] = useState(0);

  //  zustand store 객체에서 zustand 로 관리하는 변수를 수정하는 함수 가져오기(최신 방식)
  const upNumber = useNumberStore(state => state.upNumber);
  const downNumber = useNumberStore(state => state.downNumber);
  const resetNumber = useNumberStore(state => state.resetNumber);
  const updateNumber = useNumberStore(state => state.updateNumber);
  const calNumber = useNumberStore(state => state.calNumber);

  const changeNumber = e => setNum(e.target.value);

  return (
    <div>
      <Contents />

      <hr/>

      <div className={'border border-2 border-primary-subtle rounded-3 m-3 p-3'}>
        <div className={'d-flex justify-content-center'}>
          <button type={'button'} className={'btn btn-primary'} onClick={upNumber}> + </button>
          <button type={'button'} className={'btn btn-success ms-2'} onClick={downNumber}> - </button>
          <button type={'button'} className={'btn btn-info ms-2'} onClick={() => {
            updateNumber(num);
          }}>number setup</button>
          <button type={'button'} className={'btn btn-warning ms-2'} onClick={resetNumber}>reset</button>
          <button type={'button'} className={'btn btn-secondary ms-2'} onClick={() => {
            calNumber(num);
          }}>매개변수로 받은 데이터로 연산하여 저장</button>
        </div>
        <div className={'mt-3'}>
          <label htmlFor="num" className={'form-label'}>숫자 입력 : </label>
          <input type="number" className={'form-control'} id={'num'} min={0} max={10} value={num} onChange={changeNumber}/>
        </div>
      </div>
    </div>
  );
}

export default Layout









