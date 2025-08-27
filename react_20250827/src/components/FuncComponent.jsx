
//  함수 컴포넌트는 자바스크립트의 함수를 생성하고, return 부분에 JSX 코드로 UI를 입력하여 사용
//  export default 로 해당 함수를 export 하여 사용
function FuncComponent(props) {

  // UI 를 구현하는 return 부분이 1 라인만 있을 경우 () 생략 가능
  // return 부분에 사용되는 부모 태그는 1개만 가능

  // 클래스 컴포넌트의 render() 함수의 역할을 함
  return (
    <div>
      <h4>함수 컴포넌트 방식으로 컴포넌트 생성</h4>
      <p>함수 컴포넌트로 생성한 자식 컴포넌트</p>
    </div>
  );
}

export default FuncComponent;