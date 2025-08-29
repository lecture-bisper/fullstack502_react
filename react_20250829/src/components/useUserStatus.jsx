/// useUserStatus.jsx
/// Date: 25. 8. 29.
/// Time: 오후 3:18
/// User: it
/// 

import {useEffect, useState} from "react";

function useUserStatus(props) {

  const [isOnline, setIsOnline] = useState(null);

  //  화면에 출력되면 온라인 여부 확인
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
  }, []);

  return isOnline;
}

export default useUserStatus









