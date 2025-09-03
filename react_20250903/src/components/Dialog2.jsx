/// Dialog2.jsx
/// Date: 25. 9. 3.
/// Time: 오전 11:24
/// User: it
/// 

import FancyBorder2 from './FancyBorder2.jsx'

function Dialog2 (props) {
  return (
    <div>
      <FancyBorder2 color={props.color}>
        {/* Specialization 형태로 사용 */}
        <h4>{props.title}</h4>
        <p>{props.message}</p>
        {/* Containment 형태로 사용, 부모가 전달한 UI 의 일부를 자식 컴포넌트에서 출력 */}
        {props.children}
      </FancyBorder2>
    </div>
  )
}

export default Dialog2









