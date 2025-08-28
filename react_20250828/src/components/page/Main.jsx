import SideBar from "./SideBar.jsx";
import MainContent from "./MainContent.jsx";

const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: '#aaaaaa',
  },
}

function Main(props) {
  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        {/* SideBar 로 추출 */}
        <SideBar />

        {/* MainContent 로 추출*/}
        <MainContent />
      </div>
    </div>
  );
}

export default Main;