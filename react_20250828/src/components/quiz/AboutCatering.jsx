/// AboutCatering.jsx
/// Date: 25. 8. 28.
/// Time: 오후 12:42
/// User: it
/// 

import BGImage from "./BGImage.jsx";
import About from "./About.jsx";

function AboutCatering(props) {
  return (
    <div className={'row my-5'} id={'about'}>

      {/* BGImage 로 추출 */}
      <BGImage imgUrl={props.tableImg}/>

      {/* About 로 추출 */}
      <About />
    </div>
  );
}

export default AboutCatering









