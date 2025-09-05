/// BoardList.jsx
/// Date: 25. 9. 5.
/// Time: 오후 12:09
/// User: it
/// 

import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

//  임시 더미 데이터
const tempBoardList = [
  {boardIdx: 7, title: '테스트 제목 7', createId: 'test5', createDate: '2025-09-05', hitCnt: 14},
  {boardIdx: 6, title: '테스트 제목 6', createId: 'test4', createDate: '2025-09-05', hitCnt: 20},
  {boardIdx: 5, title: '테스트 제목 5', createId: 'test2', createDate: '2025-09-04', hitCnt: 5},
  {boardIdx: 4, title: '테스트 제목 4', createId: 'test2', createDate: '2025-09-03', hitCnt: 8},
  {boardIdx: 3, title: '테스트 제목 3', createId: 'test3', createDate: '2025-09-02', hitCnt: 10},
  {boardIdx: 2, title: '테스트 제목 2', createId: 'test4', createDate: '2025-09-01', hitCnt: 2},
  {boardIdx: 1, title: '테스트 제목 1', createId: 'test1', createDate: '2025-09-01', hitCnt: 5},
];

function BoardList () {

  //  useState() 훅으로 관리하는 게시물 목록 변수
  const [boardList, setBoardList] = useState([]);
  
  //  <Link> 컴포넌트 대신 사용하기 위한 훅
  const navi = useNavigate();

  //  게시물 클릭 시 동작할 이벤트 함수
  const clickPost = (boardIdx, e) => {
    navi(`/board/${boardIdx}`);
    e.preventDefault();
  }

  //  useEffect() 훅을 사용하여 componentDidMount 와 같은 역할
  useEffect(() => {
  //   Axios 를 통해서 서버와 통신 후 게시물 목록 가져오기

    axios.get('/api/board')
    .then(res => {
      console.log('통신 성공!');
      const data = res.data;

      if (data.result == 'success') {
        setBoardList(data.data);
      }

    })
    .catch(err => {
      console.log('통신 실패');
      console.log(err);
    });
  }, []);

  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        <div className={'col-sm'}>
          <table className={'table table-striped table-hover text-center'}>
            <colgroup>
              <col width={'5%'} />
              <col width={'50%'} />
              <col width={'15%'} />
              <col width={'15%'} />
              <col width={'15%'} />
            </colgroup>
            <thead>
              <tr>
                <th>글번호</th>
                <th>글제목</th>
                <th>글쓴이</th>
                <th>등록시간</th>
                <th>추천수</th>
              </tr>
            </thead>
            <tbody>
            {
              boardList.map(item => {
                return (
                  <tr key={item.boardIdx}>
                    <td>{item.boardIdx}</td>
                    <td className={'text-start'} onClick={e => clickPost(item.boardIdx, e)}>{item.title}</td>
                    <td>{item.createId}</td>
                    <td>{item.createDate}</td>
                    <td>{item.hitCnt}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
      </div>
      <div className={'mt-3 d-flex justify-content-end'}>
        <Link to={'/board/boardWrite'} className={'btn btn-primary'}>글쓰기</Link>
      </div>
    </div>
  )
}

export default BoardList









