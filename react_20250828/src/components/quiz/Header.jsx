/// Header.jsx
/// Date: 25. 8. 28.
/// Time: 오후 12:39
/// User: it
/// 

function Header(props) {
  return (
    <header className={'container-fluid'} id={'home'}>
      <div className={'row'}>
        <div className={'col-md-10 mx-auto'}>
          <div className={'card rounded-0'}>
            <img className={'card-img-top rounded-0 w-100'} src={props.imgBG} alt={''}/>
            <div className={'card-img-overlay d-flex align-items-end'}>
              <h1 className={'card-title text-dark text-opacity-50'}>Le Catering</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header









