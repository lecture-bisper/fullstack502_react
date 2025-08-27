import { Button } from 'react-bootstrap';

//  React-Bootstrap 설치
//  1. 현재 프로젝트 폴더에서 npm install react-bootstrap bootstrap  실행
//  2. React-Bootstrap 을 사용할 컴포넌트에서 React-Bootstrap 에서 제공하는 태그 컴포넌트를 import
//  3. React-Bootstrap 에서 제공하는 태그 컴포넌트를 입력하고 속성을 지정
function BootstrapReact() {

  return (
    <div>
      <Button variant={'primary'}>React-Bootstrap 을 적용한 버튼</Button>
    </div>
  );
}

export default BootstrapReact;