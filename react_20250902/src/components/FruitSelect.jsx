/// FruitSelect.jsx
/// Date: 25. 9. 2.
/// Time: 오전 10:21
/// User: it
/// 

import {useState} from "react";

function FruitSelect() {

  //  state로 관리되고 있는 변수, select 에 multiple 미사용, 기본값 설정
  const [value, setValue] = useState('수박');

  const eventSelectChange = e => setValue(e.target.value);

  const eventFormSubmit = e => {
    alert(`첫번째 select 에서 선택한 과일 : ${value}`);
    alert(`두번째 select 에서 선택한 과일 : ${multiValue}`);
    e.preventDefault();
  }

  //  select 의 자식태그인 option 에 들어갈 과일 목록
  const fruitList = ['사과', '복숭아', '수박', '포도', '참외'];
  //  select 에 multiple 사용 시 state 로 관리되는 변수, 기본값을 배열로 설정, 빈 배열은 선택한 것 없음, 배열안에 내용이 있으면 해당 값과 동일한 option 을 여러개 선택함
  const [multiValue, setMultiValue] = useState(['사과', '포도']);

  //  select 에 multiple 사용 시 동작하는 이벤트 함수
  const eventMultiSelectChange = e => {
    //  e.target.selectedOptions : select 에서 선택된 모든 option 태그를 다 가져옴
    //  전개 연산자를 사용하여 배열에 들어있는 모든 내용을 변수 options 에 저장
    const options = [...e.target.selectedOptions];
    //  배열 options 를 map() 함수를 통해서 option 태그의 value 속성값을 하나씩 출력
    const values = options.map(item => item.value);
    //  state 로 관리되고 있는 변수 multiValue 에 option 태그의 value 속성값을 모두 저장
    setMultiValue(values);
  }

  return (
    <form onSubmit={eventFormSubmit}>
      <div className={'mt-3'}>
        <label htmlFor={'sel1'} className={'form-label'}>과일을 선택하세요 : </label>
        {/* html 의 select 는 자식 태그의 option 에 selected 속성을 추가하여 기본값을 설정 */}
        {/* 리액트의 제어컴포넌트 select 는 option 에 selected 속성을 사용하지 않고, select 태그에 value 속성을 추가하고, state 로 관리되는 변수를 입력하여 사용 */}
        <select id={'sel1'} className={'form-control'} value={value} onChange={eventSelectChange}>
          <option value={'사과'}>사과</option>
          <option value={'복숭아'}>복숭아</option>
          <option value={'수박'}>수박</option>
          <option value={'포도'}>포도</option>
          <option value={'참외'}>참외</option>
        </select>

        {/* 여러개 선택 시 select 에 multiple 속성을 true 로 설정, 기본값을 여러개 설정 시 배열로 설정 */}
        <select id={'sel2'} className={'form-control mt-3'} value={multiValue} onChange={eventMultiSelectChange} multiple={true}>
          {
            //  화면에 출력할 option 태그를 배열의 내용대로 출력
            fruitList.map((item, index) => {
              return <option value={item} key={index}>{item}</option>
            })
          }
        </select>
      </div>
      <div className={'mt-3'}>
        <button type={'submit'} className={'btn btn-primary mt-2'}>확인</button>
      </div>

    </form>
  );
}

export default FruitSelect









