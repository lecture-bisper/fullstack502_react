/// Navi.jsx
/// Date: 25. 8. 28.
/// Time: 오후 12:39
/// User: it
/// 

function Navi(props) {
  return (
    <nav className={'navbar navbar-expand-md shadow bg-white fixed-top'}>
      <div className={'container-fluid px-4'}>
        <a href={'#home'} className={'navbar-brand p-2'}>Gourmet au Catering</a>
        <ul className={'navbar-nav'}>
          <li className={'nav-item mx-2'}><a href={'#about'} className={'nav-link p-2'}>About</a></li>
          <li className={'nav-item mx-2'}><a href={'#menu'} className={'nav-link p-2'}>Menu</a></li>
          <li className={'nav-item mx-2'}><a href={'#contact'} className={'nav-link p-2'}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navi









