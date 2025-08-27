//  자식 컴포넌트로 사용할 Book 컴포넌트 로드
import Book from "./Book.jsx"

const Library = (props) => {

  return (
    <div>
      {/* 컴포넌트는 다른 컴포넌트를 호출하여 사용할 수 있음 */}
      {/* 자식 컴포넌트 사용 시 데이터 전달을 위해서 사용자 속성을 추가하고, 값을 대입하여 전달 */}
      {/* 자식 컴포넌트에서는 props 객체를 통해서 부모 컴포넌트가 전달한 값을 사용 */}
      {/* 동일한 컴포넌트를 3 번 사용 */}
      <Book name={"처음 만난 파이썬"} numOfPage={300} />
      <Book name={"처음 만난 AWS"} numOfPage={400} />
      <Book name={"처음 만난 리액트"} numOfPage={500} />
    </div>
  );
}

export default Library;