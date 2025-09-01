/// AttendanceBook.jsx
/// Date: 25. 9. 1.
/// Time: 오후 3:12
/// User: it
/// 

//  더미 데이터
const students = [
  {id: 1, name: '아이유'},
  {id: 2, name: '유인나'},
  {id: 3, name: '유재석'},
  {id: 4, name: '유병재'}
]

function AttendanceBook(props) {
  return (
    <div>
      <ul>
        {/* JSX 문법에서는 일반 for 문을 사용할 수 없음 */}
        {/* ES6 문법의 배열함수 forEach, map 을 활용해야 함 */}
        {/* ul 태그의 자식 태그를 입력하는 부분에 map 함수를 사용하여 배열 students 가 가지고 있는 모든 내용을 출력하여 li 태그를 생성 */}
        {students.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  );
}

export default AttendanceBook









