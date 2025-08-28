/// OurMenu.jsx
/// Date: 25. 8. 28.
/// Time: 오후 12:40
/// User: it
/// 

import Menu from "./Menu.jsx";
import BGImage from "./BGImage.jsx";

function OurMenu(props) {
  return (
    <div className={'row my-5'} id={'menu'}>

      {/* Menu 로 추출 */}
      <Menu />

      {/* 위에서 추출한 BGImage 로 사용 */}
      <BGImage imgUrl={props.tableImg}/>
    </div>
  );
}

export default OurMenu









