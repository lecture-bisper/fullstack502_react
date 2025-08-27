
function Clock(props) {
  return (
    <div>
      <h1>안녕하세요</h1>
      {/* 리액트 엘리먼트, 자바스크립트 코드를 사용하여 현재 시간을 가져옴 */}
      <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;