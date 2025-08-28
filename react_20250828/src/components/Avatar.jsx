
const styles = {
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
}

function Avatar(props) {
  return (
    <div>
      <img src="https://lrl.kr/Wjdz" alt={'인물 아이콘'} style={styles.image}/>
    </div>
  );
}

export default Avatar;