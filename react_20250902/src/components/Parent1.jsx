/// Parent1.jsx
/// Date: 25. 9. 2.
/// Time: 오후 12:18
/// User: it
///

import {useState} from 'react';
import Children1 from './Children1.jsx'
import Children2 from './Children2.jsx'

function Parent1 (props) {
  // state 로 관리되는 변수
  const [data2, setData2] = useState('부모에서 state로 관리되는 데이터');

  return (
    <div className={'p-3 border border-2 rounded-3'}>
      <h4 className={'text-center'}>부모 영역</h4>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        setData2('부모 컴포넌트의 state로 관리되는 변수의 데이터가 변경됨');
      }}>클릭 시 부모 데이터 변경</button>

      <h4 className={'text-decoration-underline mt-3'}>{data2}</h4>


      <div className={'mt-3 row'}>
        <div className={'col-sm'}>
          {/* 자식 컴포넌트 호출, data1 은 일반 데이터 전달, data2 는 부모 컴포넌트에서 state 로 관리되고 있는 변수를 전달 */}
          <Children1 data1={'부모 컴포넌트의 데이터'} data2={data2}/>
        </div>
        <div className={'col-sm'}>
          <Children2 data1={1000} data2={data2} />
        </div>
      </div>

    </div>
  )
}

export default Parent1









