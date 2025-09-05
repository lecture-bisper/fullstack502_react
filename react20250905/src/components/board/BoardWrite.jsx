/// BoardWrite.jsx
/// Date: 25. 9. 5.
/// Time: 오후 12:09
/// User: it
/// 

import { useState } from 'react'
import { Link } from 'react-router-dom'

//  문제 1) axois 를 사용하여 console.log('통신 실패');
//       console.log(err);요
//  # BoardAPIServer 스프링 서버의 상세보기, 글쓰기, 글수정, 글삭제 기능을 완성하세요
//  # 리액트 프로그램의 글 등록, 글 수정, 글 삭제 기능을 완성하세요

function BoardWrite () {

  //  사용자 입력 데이터를 저장할 변수, state 로 관리
  const [title, setTitle] = useState('');
  const [createId, setCreateId] = useState('');
  const [contents, setContents] = useState('');

  //  이벤트 처리 함수
  const changeTitle = e => setTitle(e.target.value);
  const changeCreateId = e => setCreateId(e.target.value);
  const changeContents = e => setContents(e.target.value);

  //  제출 이벤트 처리 함수
  const submitForm = e => {

    // axios 통신
    e.preventDefault();
  }

  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        <div className={'col-sm-6 mx-auto'}>
          <form onSubmit={submitForm}>
            <div className={'mt-3'}>
              <label htmlFor="title" className={'form-label'}>제목 : </label>
              <input type="text" className={'form-control'} id={'title'} value={title} onChange={changeTitle} placeholder={'제목을 입력하세요'}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor="user-id" className={'form-label'}>사용자 ID : </label>
              <input type="text" className={'form-control'} id={'user-id'} value={createId} onChange={changeCreateId} placeholder={'사용자 ID 를 입력하세요'}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor="contents" className={'form-label'}>내용 : </label>
              <textarea id="contents" rows={5} className={'form-control'} value={contents} onChange={changeContents} placeholder={'내용을 입력하세요'}></textarea>
            </div>
            <div className={'mt-3 d-flex justify-content-end'}>
              <button type={'submit'} className={'btn btn-primary'}>등록</button>
              <Link to={'/board'} className={'btn btn-secondary ms-2'}>취소</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BoardWrite









