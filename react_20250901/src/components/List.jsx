/// List.jsx
/// Date: 25. 9. 1.
/// Time: 오후 2:52
/// User: it
/// 

function List(props) {

  const numbers = [1, 2, 3, 4, 5];
  //  리스트와 map() 함수를 통해서 엘리먼트를 여러개 반환할 경우 각각의 엘리먼트를 구분하기 위한 key 속성값을 지정해야 함
  //  엘리먼트를 구분할 수 있는 고유한 값이면 상관없음
  //  리스트가 2개일 경우 key 가 같아도 상관없음 (같은 리스트 안에서 구분할 수 있으면 됨)
  //  유일한 값인 id 가 가장 좋지만 없을 경우, index 를 key로 사용해도 상관없음
  //  리스트의 값 자체를 key로 사용할 수 있음(중복되는 값이 있으면 안됨)

  //  엘리먼트 변수 listItem1 에 map()을 사용하여 출력된  <li></li> 태그의 배열을 저장함
  const listItems1 = numbers.map((item, index) => {
    return <li key={index}>{item}</li>
  });

  //  map() 함수의 두번째 매개변수인 index가 없기 때문에 첫번째 매개변수를 key로 사용
  //  중복되는 값이 있을 경우 오류 발생
  const listItems2 = numbers.map((item) => {
    return <li key={item}>{item}</li>
  });

  numbers.map((item, index, arr) => {
    console.log(`현재 index : ${index}, 값 : ${item}`);
    console.log(`전체 배열 : ${arr}`);
  });

  return (
    <div>
      <h3>목록 만들기 (직접 입력)</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <br/>
      <h3>리스트와 map() 함수로 목록 만들기</h3>
      <ul>{
        // JSX 문법 안에 자바스크립트의 map() 를 사용하여 배열의 크기만큼 li 태그를 출력
        numbers.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }</ul>
      {/* 엘리먼트 변수를 화면에 출력 */}
      <ul>{listItems1}</ul>
      <ul>{listItems2}</ul>
    </div>
  );
}

export default List









