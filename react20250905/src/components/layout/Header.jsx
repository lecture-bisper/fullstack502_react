/// Header.jsx
/// Date: 25. 9. 5.
/// Time: 오후 12:07
/// User: it
/// 

import { Link } from 'react-router-dom'

function Header () {
  return (
    <div>
      <nav className={'navbar navbar-expand-sm navbar-dark bg-dark'}>
        <div className={'container-fluid'}>
          <Link to={'/board'} className={'navbar-brand'}>Home</Link>
          <ul className={'navbar-nav'}>
            <li className={'nav-item'}><a href="#" className={'nav-link'}>링크 1</a></li>
            <li className={'nav-item'}><a href="#" className={'nav-link'}>링크 2</a></li>
            <li className={'nav-item'}><a href="#" className={'nav-link'}>링크 3</a></li>
          </ul>
          <div className={'ms-auto'}>
            <Link to={'/auth/login'} className={'btn btn-success'}>Login</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header









