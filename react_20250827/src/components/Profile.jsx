
//  자식 컴포넌트 선언 (함수 컴포넌트)
//  부모 컴포넌트에서 전달한 데이터를 받아오는 props 객체를 매개변수로 사용
//  props : 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 객체
//    - props 라는 이름으로 지정되어 있기 때문에 변경 불가능
//    - 읽기 전용, props의 내용을 수정하고 싶을 경우 props 를 직접 수정하는 것이 아니라, 자식 컴포넌트에서 변수를 선언하고, 해당 변수에 props 를 대입한 후 수정하여 사용
function Profile(props) {
  //  자바스크립트 소스코드 입력 부분 (각종 연산을 진행)

  console.log("원본 데이터 : ");
  console.log(props);
  console.log(props.name);
  console.log(props.type);
  console.log(props.price);
  console.log(props.ele);
  console.log("---------------------");
  
  // props 는 부모컴포넌트에게서 전달받은 데이터이기 때문에 수정할 수 없음
  // 부모컴포넌트에게서 전달받은 데이터는 부모 컴포넌트의 데이터이기 때문에 자식 컴포넌트에서 수정할 수 없음
  // props.name = "그렌저";
  // props.type = "세단";
  // props.ele = false;

  console.log("---- props 의 데이터의 변수에 저장 ----");
  let copyName = props.name;
  let copyType = props.type;
  let copyPrice = props.price;
  let copyEle = props.ele;
  console.log(copyName);
  console.log(copyType);
  console.log(copyPrice);
  console.log(copyEle);
  console.log("=============================");

  console.log("===== 변수의 데이터 수정 =====");
  copyName = "그렌저";
  copyType = "세단";
  copyEle = false;

  console.log(copyName);
  console.log(copyType);
  console.log(copyPrice);
  console.log(copyEle);
  console.log("=============================");

  // 객체 분할 할당 방식을 사용하여 props의 내용을 한번에 변수에 저장
  let {name, type, price, ele} = props;
  console.log(name);
  console.log(type);
  console.log(price);
  console.log(ele);

  // if 문은 함수 안에서만 사용 가능
  if (props.ele) {
    console.log('전기차');
  }
  else {
    console.log('내연기관차');
  }
  
  return (
    <div>
      {/* 부모 컴포넌트에서 전달받은 props 객체에는 부모 컴포넌트에서 데이터 전달 시 사용한 속성명과 값이 포함되어 있음 */}
      <p>이름 : {props.name}</p>
      <p>타입 : {props.type}</p>
      <p>가격 : {props.price}</p>
      {/* JSX 문법에서 간단한 연산이 가능, 삼항연산자를 사용하여 연산 */}
      <p>전기차 : {props.ele ? '전기차' : '내연기관차'}</p>

      {/* JSX 문법에서는 if 문 사용 불가, if 문 대신 삼항연산자를 사용 */}
      {/*<p>*/}
      {/*  {*/}
      {/*    if (props.ele) {*/}
      {/*      consoloe.log(`ele 값이 true 입니다.`);*/}
      {/*    }*/}
      {/*    else {*/}
      {/*      console.log("ele 값이 false 입니다.");*/}
      {/*    }*/}
      {/*  }*/}
      {/*</p>*/}
    </div>
  )
}

export default Profile;