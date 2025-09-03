/// ProfileCard.jsx
/// Date: 25. 9. 3.
/// Time: 오전 11:43
/// User: it
/// 

import Card from './Card.jsx'

function ProfileCard () {
  return (
    <div>
      {/* 자식 컴포넌트 호출 시 title, backgroundColor 속성을 추가하여 호출 */}
      {/* 컴포넌트 합성 중 Containment 기법을 사용하여 html 태그를 자식 컴포넌트로 전달 */}
      <Card title={'아이유'} backgroundColor={'#1E90FF'}>
        <p>안녕하세요</p>
        <p>리액트는 처음입니다.</p>
      </Card>

      <Card title={'아이유'} backgroundColor={'DeepPink'}>
        <p>안녕하세요</p>
        <p>리액트는 처음입니다.</p>
      </Card>

      {/* 자식 컴포너트 호출 시 backgroundColor 속성 생략 */}
      <Card title={'아이유'}>
        <p>안녕하세요</p>
        <p>리액트는 처음입니다.</p>
      </Card>

      {/* 자식 컴포너트 호출 시 title 속성 생략 */}
      <Card backgroundColor={'#1E90FF'}>
        <p>안녕하세요</p>
        <p>리액트는 처음입니다.</p>
      </Card>
    </div>
  )
}

export default ProfileCard









