package bitc.full502.boardapiserver.service;

import bitc.full502.boardapiserver.dto.BoardDTO;
import bitc.full502.boardapiserver.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService {

  private final BoardMapper boardMapper;

  @Override
  public List<BoardDTO> selectBoardList() {
    return boardMapper.selectBoardList();
  }
}














