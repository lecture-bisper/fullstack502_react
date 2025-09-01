/// WarningBanner.jsx
/// Date: 25. 9. 1.
/// Time: 오후 2:00
/// User: it
/// 

function WarningBanner(props) {

  //  부모 컴포넌트에서 전달받은 데이터를 사용하여 조건에 따라 반환하는 값이 변경 됨
  //  전달받은 데이터가 false 일 경우 null 을 반환, 데이터가 true 이면 if문을 실행하지 않고 아래의 return 문을 실행
  if (!props.warning) {
    return null;
  }

  return (
    <div>
      <h2 className={'text-danger'}>경고!!</h2>
    </div>
  );
}

export default WarningBanner









