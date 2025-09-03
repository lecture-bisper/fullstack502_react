/// FancyBorder2.jsx
/// Date: 25. 9. 3.
/// Time: 오전 10:24
/// User: it
/// 

function FancyBorder2 (props) {
  return (
    <div className={'border border-2 border-success m-3 p-3'}>
      <h4 className={'mb-3 text-' + props.color}>자식 컴포넌트 영역</h4>
      {props.children}
    </div>
  );
}

export default FancyBorder2









