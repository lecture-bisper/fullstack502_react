package bitc.full502.boardapiserver.service;

import bitc.full502.boardapiserver.dto.BoardDTO;

import java.util.List;

public interface BoardService {

  List<BoardDTO> selectBoardList();
}
