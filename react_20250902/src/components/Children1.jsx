/// Children1.jsx
/// Date: 25. 9. 2.
/// Time: 오후 12:20
/// User: it
/// 

function Children1 (props) {
  return (
    <div className={'border border-2 border-primary rounded-3 p-4 m-4'}>
      <h4 className={'text-center'}>왼쪽 자식 컴포넌트 영역</h4>
      <h5>첫번째로 전달받은 데이터 : {props.data1}</h5>
      <h5>두번째로 전달받은 데이터 : {props.data2}</h5>
    </div>
  )
}

export default Children1









