
//  컴포넌트 상태를 관리하는 Hooks
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//  자바스크립트 함수 선언, 함수 컴포넌트 선언
function App() {
  const [count, setCount] = useState(0)

  // JSX 문법으로 웹 페이지 UI 를 구성하는 부분
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// default export 로 위에서 선언한 함수 컴포넌트 App 을 외부에 제공
export default App
