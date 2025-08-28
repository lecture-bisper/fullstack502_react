/// Answer.jsx
/// Date: 25. 8. 28.
/// Time: 오후 12:46
/// User: it
/// 

import Navi from "./Navi.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

//  사용할 이미지도 import 를 사용하여 가져와서 사용
import hamburger from '/src/assets/hamburger.jpg'
import tablesetting from '/src/assets/tablesetting.jpg'
import tablesetting2 from '/src/assets/tablesetting2.jpg'

function Answer(props) {
  return (
    <div>
      <Navi />
      <Header imgBG={hamburger}/>
      <Main imgTable1={tablesetting2} imgTable2={tablesetting}/>
      <Footer />
    </div>
  );
}

export default Answer









