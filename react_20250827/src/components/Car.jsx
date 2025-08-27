import Profile from "./Profile.jsx";

//  부모 컴포넌트 선언 (함수 컴포넌트)
function Car() {
  return (
    <div>
      {/* 자식 컴포넌트 Profile 을 3번 호출 */}
      {/* 자식 컴포넌트에 데이터를 각각 4개씩 전달 */}
      {/* 데이터 전달 시 문자열은 '', "", `` 으로 감싸서 전달, {} 생략 가능 */}
      {/* 숫자형, 논리형, 변수 등은 반드시 {} 안에 데이터를 입력하여 전달 */}
      <Profile name={'EV6'} type={'SUV'} price={4660} ele={true} />
      <Profile name={'더 뉴 아이오닉 5'} type={'SUV'} price={4700} ele={true} />
      <Profile name='K5' type={'세단'} price={'2500'} ele={false} />
    </div>
  )
}

export default Car;