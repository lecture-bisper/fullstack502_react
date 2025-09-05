/// BoardDetail.jsx
/// Date: 25. 9. 5.
/// Time: 오후 12:09
/// User: it
/// 


import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const tempBoard = {boardIdx: 7, title: '테스트 제목 7', contents: '테스트 내용 7',createId: 'test5', createDate: '2025-09-05', hitCnt: 14};

function BoardDetail () {

  //  서버에서 전달받은 게시물 정보를 저장하는 변수
  const [board, setBoard] = useState({});

  //  사용자가 입력하는 데이터를 저장하는 변수
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  //  현재 컴포넌트에 접속 시 파라미터 값을 가져오기 위한 useParams() 훅
  const params = useParams();

  //  사용자가 데이터 입력 시 동작하는 이벤트 함수
  const changeTitle = e => setTitle(e.target.value);
  const changeContents = e => setContents(e.target.value);


  //  수정 버튼 클릭 시 동작할 이벤트 (axios 로 서버와 통신)

  //  삭제 버튼 클릭 시 동작할 이벤트 (axios 로 서버와 통신)


  //  화면 첫 로딩 시 서버와 통신하여 게시물 정보를 가져오기 위한 useEffect() 훅
  useEffect(() => {

  //   axios 를 통해서 서버에서 게시물 정보를 가져옴
    axios.get('/api/board', {
      params: {
        boardIdx: params.boardIdx
      }
    })
    .then(res => {
      console.log('통신 성공!');
      const data = res.data;

      setBoard(data.data);
      setTitle(data.data.title);
      setContents(data.data.contents);
    })
    .catch(err => {
      console.log('통신 실패');
      console.log(err);
    });
  }, [])

  return (
    <div className={'container mt-5'}>
      <div>
        <div className={'row mt-3'}>
          <div className={'col-sm-2'}>
            <div className={'form-floating'}>
              <input type="text" className={'form-control'} id={'board-idx'} placeholder={'글번호'} value={board.boardIdx} readOnly={true}/>
              <label htmlFor={'board-idx'}>글번호</label>
            </div>
          </div>
          <div className={'col-sm'}>
            <div className={'form-floating'}>
              <input type="text" className={'form-control'} id={'title'} placeholder={'글제목'} value={title} onChange={changeTitle}/>
              <label htmlFor="title">글제목</label>
            </div>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-sm'}>
            <div className={'form-floating'}>
              <input type="text" className={'form-control'} id={'user-id'} placeholder={'글쓴이'} value={board.createId} readOnly={true}/>
              <label htmlFor="user-id">글쓴이</label>
            </div>
          </div>
          <div className={'col-sm'}>
            <div className={'form-floating'}>
              <input type="text" className={'form-control'} id={'create-date'} placeholder={'작성시간'} value={board.createDate} readOnly={true}/>
              <label htmlFor="create-date">작성시간</label>
            </div>
          </div>
          <div className={'col-sm'}>
            <div className={'form-floating'}>
              <input type="text" className={'form-control'} id={'hit-cnt'} placeholder={'추천수'} value={board.hitCnt} readOnly={true}/>
              <label htmlFor="hit-cnt">추천수</label>
            </div>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-sm'}>
            <div className={'form-floating'}>
              <textarea id="contents" rows="10" placeholder={'내용'} className={'form-control'} value={contents} onChange={changeContents} style={{minHeight: '200px'}}></textarea>
              <label htmlFor="contents">내용</label>
            </div>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-sm'}>
            <Link to={'/board'} className={'btn btn-secondary'}>목록</Link>
          </div>
          <div className={'col-sm d-flex justify-content-end'}>
            <button type={'button'} className={'btn btn-warning'}>수정</button>
            <button type={'button'} className={'btn btn-danger ms-2'}>삭제</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardDetail









