/// VolumeControl.jsx
/// Date: 25. 8. 29.
/// Time: 오후 12:23
/// User: it
/// 

import {useEffect, useState} from "react";

function VolumeControl(props) {

  //  변수 volumn 을 useState 를 사용하여 state로 관리, 초기값 0
  const [ volumn, setVolumn ] = useState(0);

  //  useEffect : 리액트에서 제공하는 Hook 중 하나로 클래스 컴포넌트만 사용할 수 있었던 리액트의 생명주기 함수를 사용할 수 있도록 해주는 Hook
  //  하나의 컴포넌트에서 여러개의 useEffect 를 사용할 수 있음

  //  사용법 :
  //  useEffect(effect 콜백함수, 의존성배열);

  //  effect 콜백함수 : useEffect 사용 시 동작할 소스코드가 있는 함수
  //  의존성 배열 : 의존성 배열에 등록된 요소가 변경될 경우 useEffect 등록된 effect 콜백함수가 자동 실행
  
  // useEffect 사용
  
  //  componentDidMount() 함수의 역할
  //  useEffect 사용 시 의존성 배열을 빈 배열로 지정
  useEffect(() => {
    console.log('----- 컴포넌트 mount 시 동작 -----');
    console.log(`----- componentDidMount 함수의 역할 -----`);
  }, []);
  
  //  componentDidUpdate() 함수의 역할
  //  useEffect 사용 시 의존성 배열에 변수를 지정
  //  의존성 배열에 지정된 변수의 값을 변경 시 useEffect 가 동작
  useEffect(() => {
    console.log(`useEffect() 호출, 현재 볼륨 : ${volumn}`);
    document.title = `현재 볼륨은 ${volumn} 입니다.`;
    console.log('----- 컴포넌트 update 시 동작 -----');
    console.log(`----- componentDidUpdate 함수의 역할 -----`);
  }, [volumn]);

  // componentWillUnmount() 함수의 역할
  // useEffect 사용 시 effect 콜백 함수에 return 을 추가하고, 해당 부분에 콜백함수를 입력하면 현재 컴포넌트가 삭제될 때 return 에 등록된 콜백함수가 동작함
  useEffect(() => {
    return () => {
      console.log('----- 컴포넌트 unmount 시 동작 -----');
      console.log(`----- componentWillUnmount 함수의 역할 -----`);
    }
  }, [])


  return (
    <div className={'container mt-3'}>
      <p className={'mb-3 text-center'}>현재 볼륨은 {volumn} 입니다.</p>
      <div className={'d-flex justify-content-center'}>
        <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
          volumn + 1 <= 10 ? setVolumn(volumn + 1) : setVolumn(10);
        }}>Vol +</button>
        <button type={'button'} className={'btn btn-warning'} onClick={() => {
          volumn - 1 >= 0 ? setVolumn(volumn - 1) : setVolumn(0);
        }}>Vol -</button>
      </div>
    </div>
  );
}

export default VolumeControl









