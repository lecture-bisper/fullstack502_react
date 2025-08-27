import UserInfo from "./UserInfo.jsx";

function formatDate(date) {
  return date.toLocaleString();
}

function OriComponent(props) {
  return (
    //  컴포넌트 추출을 하지 않은 원본 컴포넌트
    // <div className={'comment'}>
    //   <div className={'user-info'}>
    //     <img className={'avatar'} src={props.author.avatarUrl} alt={props.author.name}/>
    //     <div className={'user-info-name'}>{props.author.name}</div>
    //   </div>
    //   <div className={'comment-text'}>{props.text}</div>
    //   <div className={'comment-date'}>{formatDate(props.date)}</div>
    // </div>

    <div className={'comment'}>
      {/* 사용자 정보가 있는 class 값이 user-info 인 div 태그를 컴포넌트 추출로 분리 */}
      {/* 컴포넌트 추출을 통해서 분리된 자식 컴포넌트  UserInfo 를 호출 */}
      <UserInfo userData={props.author}/>

      <div className={'comment-text'}>{props.text}</div>
      <div className={'comment-date'}>{formatDate(props.date)}</div>
    </div>
  )
}

export default OriComponent;