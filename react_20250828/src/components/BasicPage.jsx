
const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: '#aaaaaa',
  },
}

function BasicPage() {
  return (
    <div>
      {/* Header 로 추출할 부분 */}
      <div className={'p-5 bg-primary text-white text-center'}>
        <h1>리액트와 부트스트랩으로 만든 페이지</h1>
      </div>

      {/* Navi 로 추출할 부분 */}
      <nav className={'navbar navbar-expand-sm bg-dark navbar-dark'}>
        <div className={'container-fluid'}>
          <ul className={'navbar-nav'}>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link active'}>Active</a>
            </li>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link'}>Link</a>
            </li>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link'}>Link</a>
            </li>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link disabled'}>Link</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main 으로 추출할 부분 */}
      <div className={'container mt-5'}>
        <div className={'row'}>
          <div className={'col-sm-4'}>
            <h2>About me</h2>
            <h5>Photo of me:</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3 className={'mt-4'}>Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>

            <ul className={'nav nav-pill flex-column'}>
              <li className={'nav-item'}>
                <a href="#" className={'nav-link active'}>Active</a>
              </li>
              <li className={'nav-item'}>
                <a href="#" className={'nav-link '}>Link</a>
              </li>
              <li className={'nav-item'}>
                <a href="#" className={'nav-link '}>Link</a>
              </li>
              <li className={'nav-item'}>
                <a href="#" className={'nav-link disabled'}>Disabled</a>
              </li>
            </ul>
            <hr className={'d-sm-none'}/>
          </div>

          <div className={'col-sm-8'}>
            <h2>Title Heading</h2>
            <h5>Title description, 2025-08-28</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some Text...</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

            <h2 className={'mt-5'}>Title Heading</h2>
            <h5>Title description, 2025-08-28</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
      </div>

      {/* Footer 로 추출할 부분 */}
      <div className={'mt-5 p-4 bg-dark text-white text-center'}>
        <p>Footer</p>
      </div>
    </div>
  );
}

export default BasicPage;










