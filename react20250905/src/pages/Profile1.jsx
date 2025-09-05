/// Profile1.jsx
/// Date: 25. 9. 5.
/// Time: 오전 11:07
/// User: it
///

import { useLocation, useSearchParams } from 'react-router-dom';

function Profile1 () {

  //  React Route Dom 에서 제공하는 useLocation() 훅, 서버 주소 뒤에 있는 모든 값을 한번에 가져옴
  //  파라미터값은 사용자가 직접 파싱해야 함
  const profile = useLocation();
  // console.log(profile);

  const { pathname, search } = profile;
  //  서브 url 가져오기
  console.log(`pathname: ${pathname}`);
  //  쿼리스트링 정보 가져오기
  console.log(`search: ${search}`);

  const data = search.substring(1);
  console.log(`? 를 제거한 문자열 : ${data}`);

  const dataArray = data.split('&');
  console.log(`문자 & 를 기준으로 배열로 분리`);
  console.log(dataArray);

  const param1 = dataArray[0].split('=');
  const param2 = dataArray[1].split('=');
  console.log(`param1 : ${param1}`);
  console.log(param1);
  console.log(`param2 : ${param2}`);
  console.log(param2)

  //  배열 함수 map() 을 사용하여 필요한 데이터만 분리
  const locationParams = dataArray.map(item => {
    const param = item.split('=');
    return param[1];
  });
  console.log(`배열 함수로 파라미터값 파싱 : `);
  console.log(locationParams);


  //  useSearchParams() 훅을 사용 시 파라미터 값을 자동으로 파싱하여 가져옴
  //  가져온 데이터를 출력하려면 get(파라미터명) 을 사용하여 출력
  const [params] = useSearchParams();
  console.log('----- useSearchParams() 로 가져온 데이터');
  console.log(params);
  console.log(params.get('username'));
  console.log(params.get('age'));

  return (
    <div>
      <h1>쿼리스트링을 통해서 데이터를 가져오는 페이지</h1>
      <br />
      {/* 한글의 경우 URL Encoding 을 거치기 때문에 사용 시 URL Decoding 을 해야함 */}
      <h4>useLocation() 사용 파라미터 1 : {decodeURI(param1[1])}</h4>
      <h4>useLocation() 사용 파라미터 2 : {decodeURI(param2[1])}</h4>

      <br/>
      <h3>배열 함수로 한번에 출력</h3>
      {
        dataArray.map((item, index) => {
          const param = item.split('=');
          return <h4 key={index}>useLocation() 사용 파라미터 {index + 1} : {decodeURI(param[1])}</h4>
        })
      }

      <br/>
      <h3>useSearchParams() 사용 파라미터</h3>
      {/* useSearchParams() 사용 시 URL Decoding 이 자동으로 되어 있음 */}
      <h4>useSearchParams() 사용 파라미터 1 : {params.get('username')}</h4>
      <h4>useSearchParams() 사용 파라미터 2 : {params.get('age')}</h4>

    </div>
  )
}

export default Profile1









