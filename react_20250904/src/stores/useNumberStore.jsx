/// useNumberStore.jsx
/// Date: 25. 9. 4.
/// Time: 오전 10:48
/// User: it
/// 

//  상태관리를 위한 zustand 의 store 객체 생성을 위한 create() 함수를 import
import { create } from 'zustand'

//  zustand 는 커스텀 훅 형태로 동작, 접두사로 use 필수
//  create() 를 사용하여 zustand Store 객체 생성
//  set() 를 사용하여 zustand Store 객체에 저장된 데이터를 수정
const useNumberStore = create(set => ({
  //  실제 데이터를 저장할 변수
  number: 0,
  //  데이터를 수정할 때 사용하는 함수, 여러개 선언 가능, 이름도 원하는 것으로 설정
  //  state : zustand Store 객체의 현재 상태를 의미
  //  현재 값을 이용하여 다른 값으로 수정 시 state 와 함께 사용
  upNumber: () => set(state => ({number: state.number + 1})),
  downNumber: () => set(state => ({number: state.number - 1})),
  //  단순히 값만 변경 시 object 타입으로 입력
  resetNumber: () => set({number: 0}),
  //  매개변수를 사용하여 외부 데이터를 받아서 값 변경
  updateNumber: newNumber => set({number: newNumber}),
  //  매개변수를 사용하여 외부 데이터를 받아서 현재 상태 값과 연산 후 변경
  calNumber: newNumber => set(state => ({number: state.number + Number(newNumber)})),
}));

export default useNumberStore









