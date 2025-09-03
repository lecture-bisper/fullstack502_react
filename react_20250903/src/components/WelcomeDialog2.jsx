/// WelcomeDialog2.jsx
/// Date: 25. 9. 3.
/// Time: 오전 11:12
/// User: it
/// 

import Dialog from './Dialog.jsx'

//  Specialization 이 적용된 컴포넌트
function WelcomeDialog2 () {
  return (
    <div>
      {/* 범용 컴포넌트를 호출 */}
      <Dialog title={'어서오세요'} message={'우리 사이트 방문을 환영합니다.'} color={'primary'}/>
      <Dialog title={'경고!!'} message={'오류가 발생했습니다.'} color={'danger'}/>
    </div>
  );
}

export default WelcomeDialog2









