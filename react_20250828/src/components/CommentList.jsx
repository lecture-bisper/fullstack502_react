import Comment from "./Comment.jsx";

//  더미 데이터
const comments = [
  {name: '아이유', message: '안녕하세요. 아이유입니다.'},
  {name: '박보검', message: '안녕하세요. 박보검입니다.'},
  {name: '손흥민', message: '안녕하세요. 손흥민입니다.'},
  {name: '이강인', message: '안녕하세요. 이강인입니다.'},
  {name: '김연아', message: '안녕하세요. 김연아입니다.'}
];

function CommentList(props) {
  return (
    <div>
      {/*<Comment name={comments[0].name} message={comments[0].message} />*/}
      {/*<Comment name={comments[1].name} message={comments[1].message} />*/}
      {/*<Comment name={comments[2].name} message={comments[2].message} />*/}
      {/*<Comment name={comments[3].name} message={comments[3].message} />*/}
      {/*<Comment name={comments[4].name} message={comments[4].message} />*/}

      {
        // ES6에서 제공하는 배열함수 map() 을 사용하여 배열의 크기만큼 반복해서 자식 컴포넌트인 Comment 를 호출함, 데이터도 전달
        comments.map(item => {
          return <Comment name={item.name} message={item.message} />
        })
      }
    </div>
  );
}

export default CommentList;