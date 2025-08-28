import Avatar from "./Avatar.jsx";
import Message from "./Message.jsx";

//  리액트에서 CSS 사용하는 방법
//  리액트 파일 안에서 기존 CSS 문법을 그대로 사용할 수 없음
//  자바스크립트 object 타입의 변수를 선언하고, CSS 속성을 입력
//  기존 CSS 속성명을 카멜명명법으로 변경하여 사용
//  key : value 형식으로 key에 css 속성명을 입력, value 에 속성값을 입력
//  숫자는 숫자형으로 입력, 다른 형태는 모두 문자열로 입력
//  기존 CSS 문법을 그대로 사용할 경우 css 파일을 import 해야 함

// html 태그에 style 속성을 직접 사용 시 object 타입을 직접 선언하여 사용, {{css속성명: 값}}
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid black',
    borderRadius: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
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
  commentText: {
    color: 'black',
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      {/* 컴포넌트 추출 전 */}
      {/*<div>*/}
      {/*  <img src="https://lrl.kr/Wjdz" alt={'인물 아이콘'} style={styles.image}/>*/}
      {/*</div>*/}

      {/*<div style={styles.contentContainer}>*/}
      {/*  <span style={styles.nameText}>{props.name}</span>*/}
      {/*  <span style={{color: 'black', fontSize: 16}}>{props.message}</span>*/}
      {/*</div>*/}

      {/* 컴포넌트 추출 후 자식 컴포넌트 호출 */}
      <Avatar/>
      <Message name={props.name} message={props.message}/>
    </div>
  );
}

export default Comment;