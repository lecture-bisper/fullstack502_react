/// UserStatus.jsx
/// Date: 25. 8. 29.
/// Time: 오후 3:05
/// User: it
/// 

import {useEffect, useState} from "react";
import useUserStatus from "./useUserStatus.jsx";

// 사용자 화면
function UserStatus(props) {

  // 커스텀 훅 사용 시
  const isOnline = useUserStatus(props.user.id);

  // 커스텀 훅 미사용 시
  // const [isOnline, setIsOnline] = useState(null);
  //
  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }
  //
  //   ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
  // }, []);
  //
  // if (isOnline == null) {
  //   return "대기 중";
  // }

  return isOnline ? '온라인' : '오프라인';
}

export default UserStatus









