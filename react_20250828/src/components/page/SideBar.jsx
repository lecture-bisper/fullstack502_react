
const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: '#aaaaaa',
  },
}

function SideBar(props) {
  return (
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
  );
}

export default SideBar;