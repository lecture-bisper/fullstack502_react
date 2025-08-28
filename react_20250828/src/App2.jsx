import BasicPage from "./components/BasicPage.jsx";
import BasicPage2 from "./components/BasicPage2.jsx";
import Quiz2 from "./components/quiz/Quiz2.jsx";
import Answer from "./components/quiz/Answer.jsx";
import SetStateClass from "./components/SetStateClass.jsx";
import SetStateFunction from "./components/SetStateFunction.jsx";

//  문제1) BasicPage2 컴포넌트를 생성하고, BasicPage 컴포넌트의 내용을 컴포넌트 추출을 통해서 재사용할 수 있는 작은 컴포넌트를 만들고, BasicPage 컴포넌트의 화면과 동일한 화면을 출력하세요
//  부모 컴포넌트 (components 폴더) : BasicPage2
//  컴포넌트 추출로 생성할 컴포넌트 (page 폴더) : Header, Footer, Navi, Main
//  추가 컴포넌트 추출 컴포넌트 : SideBar, MainContent

//  문제2) https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm 사이트를 리액트로 클론 코딩 하세요 (컴포넌트 추출 필수)

function App2() {
  return (
    <div>
      {/*<BasicPage />*/}
      {/*<BasicPage2 />*/}
      {/*<Quiz2 />*/}
      {/*<Answer />*/}
      <SetStateClass />
      <hr />
      <SetStateFunction />
    </div>
  );
}

export default App2;