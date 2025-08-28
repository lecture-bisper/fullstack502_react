/// Main.jsx
/// Date: 25. 8. 28.
/// Time: 오후 12:40
/// User: it
/// 

import AboutCatering from "./AboutCatering.jsx";
import Contact from "./Contact.jsx";
import OurMenu from "./OurMenu.jsx";

function Main(props) {
  return (
    <main className={'container'}>
      {/* AboutCetering 으로 추출 */}
      <AboutCatering tableImg={props.imgTable1}/>
      <hr/>

      {/* OurMenu 로 추출 */}
      <OurMenu tableImg={props.imgTable2}/>
      <hr/>

      {/* Contact 로 추출 */}
      <Contact />
    </main>
  );
}

export default Main









