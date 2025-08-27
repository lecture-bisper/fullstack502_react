//  리액트 프로젝트에서 필요한 라이브러리 로딩
import { StrictMode } from 'react'
//  리액트 가상돔 로드
import { createRoot } from 'react-dom/client'
//  css 파일 로드
import './index.css'
//  리액트 컴포넌트 로드, export default 로 출력한 모듈을 가져옴
import App from './App.jsx'
import App2 from "./App2.jsx";
import Clock from "./components/Clock.jsx";

//  document.getElementById('root') : index.html 파일의 html 태그 중 id 값이 root 인 태그를 선택
//  createRoot() : 리액트 가상돔 생성
//  render() : 리액트 가상돔을 사용하여 화면을 그리기
//  StrictMode : 자바스크립트의 문법 검사를 엄격하게 검사하는 모드
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 사용자가 생성한 컴포넌트 App 을 로드 */}
    {/*<App />*/}
    <App2 />
  </StrictMode>,
)

//  자바스크립트의 타이머 함수 setInterval() 을 사용하여 1초에 한번씩 Clock 컴포넌트를 호출
// setInterval(function() {
//   createRoot(document.getElementById('root')).render(
//     <StrictMode>
//       <Clock />
//     </StrictMode>,
//   );
// }, 1000);

//  node_modules : node.js 모듈이 설치되는 폴더, 리액트 프로젝트가 동작하는데 필요한 모듈이 설치되는 폴더
//    - build 시 필요없는 부분은 자동을 제외
//    - 일반적으로 사용자는 신경 쓸 필요가 없음
//    - github 에 업로드/다운로드 시 제외되는 폴더, 프로젝트 다운로드 시 'npm install' 로 패키지 설치

//  public : 리액트 프로젝트의 기본 파일(index.html)이 위치하는 폴더 (create-react-app 사용 시)
//    - vite 사용 시 root 폴더에 index.html 이 위치함
//  src : 리액트 프로젝트의 소스코드가 존재하는 폴더
//  index.html : 리액트는 SPA 로 동작하므로 해당 파일의 html 태그 중 id 값이 root 인 태그를 검색하여 리액트로 렌더링된 내용을 출력할 때 사용하는 파일

//  SPA : Single Page Application, 웹 사이트의 페이지가 1개인 사이트, 자바스크립트를 이용하여 컨텐트를 계속 변경하여 사용자에게 제공하는 사이트
//  MPA : Multi Page Application, 웹 사이트의 페이지가 여러개인 사이트, 전통적인 웹 사이트

//  Virtual DOM : 리액트에서 웹 페이지를 그려내기 위해 사용하는 가상 DOM
//    - 기본적으로 웹은 화면을 한번 출력하고 다시 수정된 화면을 출력 시 모든 화면을 새로 그려야 함
//    - 수정된 화면을 출력하기 위해서 모든 화면을 다시 그리면 화면 깜빡임 현상이 발생함
//    - 조금만 수정이 발생해도 모든 리소스를 다시 호출하기 때문에 성능이 느려짐
//    - 리액트에서는 Virtual DOM 이라는 것을 사용하여 원본 화면은 그대로 두고, Virtual DOM 을 사용하여 먼저 화면을 수정하고, 마지막에 원본 화면인 DOM 과 수정된 Virtual DOM 을 교체함

//  컴포넌트 : 리액트의 화면 구성 요소, 화면의 각 부분을 잘게 쪼개어 화면을 만들고, 만들어진 화면을 재사용하여 전체 화면을 구성하는 방식, 자바스크립트로 구성되어 있음
//    - 클래스 컴포넌트 : UI 를 구성하는 방식을 자바스크립트의 클래스로 이루어진 컴포넌트, 예전에는 클래스 컴포넌트를 주로 사용함, 클래스 컴포넌트의 생명주기 함수를 사용하기 위해서 클래스 컴포넌트를 사용
//    - 함수 컴포넌트 : UI 를 구성하는 방식을 자바스크립트의 함수로 이루어진 컴포넌트, 예전에는 함수 컴포넌트의 기능에 제약이 많았음, Hooks 라는 기능이 추가되면서 함수 컴포넌트도 컴포넌트 생명주기 함수를 사용할 수 있게 됨, 현재는 함수 컴포넌트를 주로 사용함

//  JSX : Javascript XML 의 줄임말, 화면을 구성하기 위한 형태를 html 태그로 사용하고 중간에 js 코드가 들어가는 형태로 구성해 놓음, JSX 태그의 속성명은 기본적으로 html 과 동일하지만 다른 속성명을 가진 것들이 존재함
//    - html 태그 사이에 {} 를 사용하면 JS 코드를 입력할 수 있음












