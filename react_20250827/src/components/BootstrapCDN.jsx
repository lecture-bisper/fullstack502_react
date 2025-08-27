
function BootstrapCDN() {

  return (
    <div>
      {/* index.html 파일에 web 용 부트스트랩 css, js 파일을 로드 */}
      {/* 리액트 컴포넌트에서 web 용 부트스트랩을 사용하듯이 사용 */}
      {/* className : javascript ES6의 class 와 html 의 class 속성명이 동일하기 때문에 JSX 문법에서는 html 태그의 class 속성명을 className 으로 변경함 */}
      <button className={'btn btn-primary'}>CDN으로 부트스트랩을 적용한 버튼</button>
    </div>
  );
}

export default BootstrapCDN;
