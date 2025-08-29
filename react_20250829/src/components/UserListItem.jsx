/// UserListItem.jsx
/// Date: 25. 8. 29.
/// Time: 오후 3:08
/// User: it
/// 

import {useEffect, useState} from "react";
import useUserStatus from "./useUserStatus.jsx";

//  친구 목록 화면
function UserListItem(props) {

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
  //   ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
  // }, []);

  return <li style={{color: isOnline ? 'green' : 'black'}}>{props.user.name}</li>
}

export default UserListItem









