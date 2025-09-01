/// Toolbar.jsx
/// Date: 25. 9. 1.
/// Time: 오후 2:12
/// User: it
/// 

//  자식 컴포넌트
function Toolbar(props) {

  //  부모가 전달한 데이터를 객체 분할 할당 방식을 한번에 각각의 변수에 입력함
  const {isLoggedIn, onClickLogin, onClickLogout} = props;

  return (
    <div className={'container d-flex border rounded rounded-3 p-4'}>
      {/* inline if 방식을 사용하여 화면에 출력 */}
      {isLoggedIn && <span className={'me-3'}>환영합니다.</span> }

      {
        isLoggedIn
          ? (<button type={'button'} className={'btn btn-secondary'} onClick={onClickLogout}>로그아웃</button>)
          : (<button type={'button'} className={'btn btn-success'} onClick={onClickLogin}>로그인</button>)
      }
    </div>
  );
}

export default Toolbar









