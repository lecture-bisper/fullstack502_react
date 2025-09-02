/// TempInput.jsx
/// Date: 25. 9. 2.
/// Time: 오후 3:20
/// User: it
/// 

const scaleNames = {
  c: '섭씨',
  f: '화씨',
}

function TempInput (props) {
  //  부모한테 전달받은 setState() 함수
  //  자식 컴포넌트의 input 태그가 가지고 있는 value 속성값을 사용
  const handleChange = e => props.onTempChange(e.target.value);

  return (
    <div>
      <fieldset>
        <legend>온도를 입력해주세요(단위 : {scaleNames[props.scale]})</legend>
        <input type="text" className={'form-control'} value={props.temp} onChange={handleChange} />
      </fieldset>
    </div>
  );
}

export default TempInput;









