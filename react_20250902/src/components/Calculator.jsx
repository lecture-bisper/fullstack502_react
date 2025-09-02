/// Calculator.jsx
/// Date: 25. 9. 2.
/// Time: 오후 3:09
/// User: it
/// 

import {useState} from 'react';
import BoilingVerdict from './BoilingVerdict.jsx';
import TempInput from './TempInput.jsx';

//  섭씨 온도로 변경하는 공식
function toCel(fa) {
  return ((fa - 32) * 5) / 9;
}

//  화씨 온도로 변경하는 공식
function toFa(cel) {
  return (cel * 9) / 5 + 32;
}

//  단위 변환
function tryConvert(temp, convert) {
  //  실수 타입으로 변경
  const input = parseFloat(temp);

  //  숫자 타입이 맞는지 확인
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  //  반올림 함수를 사용하여 소수점 아래 3번째 자리까지만 출력
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}

function Calculator (props) {

  //  state로 관리하는 변수, 
  const [temp, setTemp] = useState(''); // 온도
  const [scale, setScale] = useState('c'); // 단위

  //  state 의 값을 변경하는 이벤트 함수, 섭씨용
  const handleCelChange = (temp) => {
    setTemp(temp);
    setScale('c');
  }

  //  화씨용
  const handleFaChange = (temp) => {
    setTemp(temp);
    setScale('f');
  }

  const cel = scale === 'f' ? tryConvert(temp, toCel) : temp;
  const fa = scale === 'c' ? tryConvert(temp, toFa) : temp;

  return (
    <div className={'mt-3'}>
      <TempInput scale={'c'} temp={cel} onTempChange={handleCelChange} />
      <TempInput scale={'f'} temp={fa} onTempChange={handleFaChange} />
      <BoilingVerdict cel={parseFloat(cel)} />
    </div>
  );
}

export default Calculator;









