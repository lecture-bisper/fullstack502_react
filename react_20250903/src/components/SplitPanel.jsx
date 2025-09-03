/// SplitPanel.jsx
/// Date: 25. 9. 3.
/// Time: 오전 10:41
/// User: it
/// 

function SplitPanel (props) {
  return (
    <div className={'row'}>
      <div className={'col-sm border border-2 border-primary rounded-3'}>
        {props.left}
      </div>
      <div className={'col-sm border border-2 border-success rounded-3'}>
        {/* 자식 컴포넌트에서 또 다른 컴포넌트를 자식 컴포넌트로 포함하여 UI를 구성하는 것이 기본 */}
        {/* 부모 컴포넌트에서 props를 통해서 전달받은 다른 컴포넌트를 출력하여 UI 를 구성할 수 있음 */}
        {props.right}
        {/*<Chat />*/}
      </div>
    </div>
  )
}

export default SplitPanel









