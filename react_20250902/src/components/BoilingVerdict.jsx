/// BoilingVerdict.jsx
/// Date: 25. 9. 2.
/// Time: 오후 3:19
/// User: it
/// 

function BoilingVerdict (props) {

  if (props.cel >= 100) {
    return <p>물이 끓습니다.</p>
  }
  else {
    return <p>물이 끓지 않습니다.</p>
  }
}

export default BoilingVerdict;









