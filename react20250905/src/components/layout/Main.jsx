/// Main.jsx
/// Date: 25. 9. 5.
/// Time: 오후 12:07
/// User: it
/// 

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BoardList from '../board/BoardList.jsx'
import BoardDetail from '../board/BoardDetail.jsx'
import BoardWrite from '../board/BoardWrite.jsx'
import BoardErrorPage from '../board/BoardErrorPage.jsx'
import Login from '../auth/Login.jsx'
import Signup from '../auth/Signup.jsx'

function Main () {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={'/board'}>
            <Route index element={<BoardList />} />
            <Route path={':boardIdx'} element={<BoardDetail />} />
          </Route>
          <Route path={'/board/boardWrite'} element={<BoardWrite />} />
          <Route path={'/auth'}>
            <Route path={'login'} element={<Login />} />
            <Route path={'signup'} element={<Signup />} />
          </Route>
          <Route path={'*'} element={<BoardErrorPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default Main









