/// Card.jsx
/// Date: 25. 9. 3.
/// Time: 오전 11:44
/// User: it
/// 

//  컴포넌트의 매개변수인 props 에 포함된 데이터를 컴포넌트의 매개변수에서 바로 객체 분할 할당 방식으로 변수에 저장하여 사용이 가능
// function Card ({title, backgroundColor, children}) {
function Card (props) {
  
  //  ES6의 객체 분할 할당 방식을 사용하여 props 의 내용을 title, backgroundColor, children 이라는 변수에 각각 저장
  //  children 은 모든 컴포넌트가 가지고 있는 데이터, 부모 컴포넌트가 지정한 UI 를 children 을 통해서 사용할 수 있음
  const {title, backgroundColor, children} = props;

  return (
    //  리액트에서 css 스타일을 직접 사용 시 object 타입으로 사용해야 함
    <div style={{
      margin: 8,
      padding: 8,
      borderRadius: 8,
      // || 를 사용하여 기본값 설정
      backgroundColor: backgroundColor || 'white',
    }}>
      {/* && 를 사용하여 inline if 를 구현 */}
      {title && <h1>{title}</h1>}
      {children}
    </div>
  )
}

export default Card









