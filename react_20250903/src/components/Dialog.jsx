/// Dialog.jsx
/// Date: 25. 9. 3.
/// Time: 오전 11:13
/// User: it
/// 

//  범용 컴포넌트로 사용되는 컴포넌트
import FancyBorder2 from './FancyBorder2.jsx'

function Dialog (props) {
  return (
    <div>
      <FancyBorder2 color={props.color}>
        <h4>{props.title}</h4>
        <p>{props.message}</p>
      </FancyBorder2>
    </div>
  )
}

export default Dialog









