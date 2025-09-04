package bitc.full502.boardapiserver.mapper;

import bitc.full502.boardapiserver.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {

  List<BoardDTO> selectBoardList();
}














