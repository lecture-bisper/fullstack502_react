/// AxiosTest.jsx
/// Date: 25. 9. 4.
/// Time: 오전 11:48
/// User: it
///

import axios from 'axios'

function AxiosTest () {

  const connectionTest = () => {
    axios.get("http://localhost:8080/api")
      .then(res => {
        console.log('비동기 통신 성공!!');
        console.log(res.data);
    })
      .catch(err => {
        console.log('비동기 통신 중 오류가 발생했습니다.');
        console.log(`error message : ${err}`);
    });
  }

  const connTest1 = () => {
    axios.get("http://localhost:8080/api/test1")
      .then(res => {
        console.log('test1 에 접속 성공');
        console.log(res.data);
    })
      .catch(err => {
        console.log('test1 에 접속 실패');
        console.log(err);
    });
  }

  //  프록시 서버 사용 설정 시 서버 url을 제외하고 쿼리스트링 부분만 입력
  const connTest2 = () => {
    axios.get("/api/test1")
    .then(res => {
      console.log('test2 에 접속 성공');
      console.log(res.data);
    })
    .catch(err => {
      console.log('test2 에 접속 실패');
      console.log(err);
    });
  }

  //  파라미터가 없는 GET 방식 통신
  const nonParamGet = () => {
    axios.get("/api/nonParamGet")
      .then(res => {
        console.log('GET 방식 통신 성공');
        console.log(res.data);
    })
      .catch(err => {
        console.log('GET 방식 통신 실패');
        console.log(err);
    });
  }

  //  URL 에 파라미터가 포함된 GET 방식 통신
  const urlParamGet = () => {
    axios.get('/api/urlParamGet?userId=bitc&userPw=1234')
    .then(res => {
      console.log('GET 방식 통신 성공');
      console.log(res.data);
    })
    .catch(err => {
      console.log('GET 방식 통신 실패');
      console.log(err);
    });
  }

  //  URL 에 파라미터가 포함되지 않은 GET 방식 통신
  const noUrlParamGet = () => {
    axios.get("/api/noUrlParamGet", {
      params: {
        userId: 'bitc',
        userPw: 1234
      }
    })
    .then(res => {
      console.log('GET 방식 통신 성공');
      console.log(res.data);
    })
    .catch(err => {
      console.log('GET 방식 통신 실패');
      console.log(err);
    });
  }

  //  URL 에 파라미터가 포함되지 않은 DELETE 방식 통신
  const noUrlParamDelete = () => {
    axios.delete("/api/paramDelete", {
      params: {
        userId: 'bitc'
      }
    })
    .then(res => {
      console.log('DELETE 방식 통신 성공');
      console.log(res.data);
    })
    .catch(err => {
      console.log('DELETE 방식 통신 실패');
      console.log(err);
    });
  }

  //  파라미터가 없는 POST 통신 방식
  const nonParamPost = () => {
    axios.post("/api/nonParamPost", null, null)
    .then(res => {
      console.log('POST 방식 통신 성공');
      console.log(res.data);
    })
    .catch(err => {
      console.log('POST 방식 통신 실패');
      console.log(err);
    });
  }

  //  파라미터가 있는 POST 통신 방식
  const paramPost = () => {
    axios.post("/api/paramPost", null, {
      params: {
        userId: 'bitc',
        userPw: 1234
      }
    })
    .then(res => {
      console.log('POST 방식 통신 성공');
      console.log(res.data);
    })
    .catch(err => {
      console.log('POST 방식 통신 실패');
      console.log(err);
    });
  }

  //  파라미터가 있는 PUT 통신 방식
  const paramPut = () => {
    axios.put('/api/paramPut', null, {
      params: {
        userId: 'bitc',
        userPw: 1234,
      }
    })
    .then(res => {
      console.log('PUT 방식 통신 성공');
      console.log(res.data);
    })
    .catch(err => {
      console.log('PUT 방식 통신 실패');
      console.log(err);
    });
  }

  return (
    <div>
      <button type={'button'} className={'btn btn-primary'} onClick={connectionTest}>서버 접속</button>
      <button type={'button'} className={'btn btn-primary ms-2'} onClick={connTest1}>test1</button>
      <button type={'button'} className={'btn btn-primary ms-2'} onClick={connTest2}>test2</button>

      <br/><hr/><br/>

      <div className={'border border-2 rounded-3 p-3'}>
        <button type={'button'} className={'btn btn-outline-primary'} onClick={nonParamGet}>파라미터가 없는 GET 방식</button>
        <button type={'button'} className={'btn btn-outline-primary ms-2'} onClick={urlParamGet}>파라미터가 URL에 포함된 GET 방식</button>
        <button type={'button'} className={'btn btn-outline-primary ms-2'} onClick={noUrlParamGet}>파라미터가 URL에 포함되지 않은 GET 방식</button>

        <br/><br/>

        <button type={'button'} className={'btn btn-outline-danger'} onClick={noUrlParamDelete}>파라미터가 URL에 포함되지 않은 DELETE 방식</button>

        <br/><br/>

        <button type={'button'} className={'btn btn-outline-success'} onClick={nonParamPost}>파라미터가 없는 POST 방식</button>
        <button type={'button'} className={'btn btn-outline-success ms-2'} onClick={paramPost}>파라미터가 있는 POST 방식</button>

        <br/><br/>

        <button type={'button'} className={'btn btn-outline-info'} onClick={paramPut}>파라미터가 있는 PUT 방식</button>

      </div>
    </div>
  );
}

export default AxiosTest









