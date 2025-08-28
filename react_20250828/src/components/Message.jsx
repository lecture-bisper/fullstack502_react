
const styles = {
  contentContainer: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
}

function Message(props) {
  return (
    <div style={styles.contentContainer}>
      <span style={styles.nameText}>{props.name}</span>
      {/* CSS 속성을 직접 입력 시 style={{속성명: 속성값, ...}} 형태로 입력 */}
      <span style={{color: 'black', fontSize: 16}}>{props.message}</span>
    </div>
  );
}

export default Message;