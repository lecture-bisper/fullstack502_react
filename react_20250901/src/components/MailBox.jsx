/// MailBox.jsx
/// Date: 25. 9. 1.
/// Time: 오후 12:06
/// User: it
/// 

function MailBox(props) {

  //  부모 컴포넌트에서 전달한 데이터를 자식 컴포넌트의 변수에 저장
  const unreadMessage = props.unreadMessage;
  const count = props.count;

  return (
    <div>
      <h1>안녕하세요</h1>
      {
        // 단축평가 : && 연산시 && 연산자 왼쪽의 연산식 결과가 false 이면, && 연산자 오른쪽의 연산식은 연산하지 않는 것

        //  inline if : JSX 부분에 if문을 직접 입력하여 사용하는 것
        //  JSX 문법에서는 if 문을 사용할 수 없음, if문 대신 && 를 사용하여 inline if 를 구현
        //  inline if 사용 시 && 연산자 왼쪽의 연산식은 화면에 출력하지 않음

        //  inline if 의 전체 결과가 true 일 경우 && 연산자 왼쪽의 연산식은 화면에 출력하지 않고, && 연산자 오른쪽의 내용을 화면에 출력함
        //  inline if 의 && 연산자 왼쪽의 연산식 결과가 false 일 경우 && 연산자 왼쪽, 오른쪽 모두 화면에 출력하지 않음
        unreadMessage > 0 && <h2>현재 {unreadMessage} 개의 읽지 않은 메시지가 있습니다.</h2>
      }
      {
        //  inline if 문에서 && 연산자 왼쪽의 연산식 결과가 falsy 일 경우 값은 출력
        //  연산식은 출력 X, 값은 출력 O
        //  변수 count 가 Truthy 일 경우 && 연산자 오른쪽의 내용을 출력
        //  변수 count 가 Falsy 일 경우 && 연산식이 아닌 값이면 화면에 출력, && 연산자 오른쪽의 내용은 단축평가로 인하여 출력하지 않음
        count && <h2>현재 카운트 : {count}</h2>
      }
    </div>
  );
}

export default MailBox









