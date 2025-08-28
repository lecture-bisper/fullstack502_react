
const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: '#aaaaaa',
  },
}

function MainContent(props) {
  return (
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
  );
}

export default MainContent;