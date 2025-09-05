/// About.jsx
/// Date: 25. 9. 5.
/// Time: 오전 9:28
/// User: it
/// 

import { Link, Outlet } from 'react-router-dom'

function About () {
  return (
    <div>
      <h1>소개 페이지</h1>
      <p>리액트 라우터를 사용하여 About 으로 이동한 페이지</p>

      <Link to={'/'}>Home 으로 이동</Link><br/>
      <Link to={'/about'}>about 으로 이동</Link><br/>
      <Link to={'/about/area'}>area 로 이동</Link>

      <Outlet />
    </div>
  )
}

export default About









