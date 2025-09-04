package bitc.full502.boardapiserver.controller;

import bitc.full502.boardapiserver.dto.BoardDTO;
import bitc.full502.boardapiserver.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class BoardAPIController {

  private final BoardService boardService;

//  게시판 목록
  @GetMapping("/board")
  public Object selectBoardList() {

    Map<String, Object> result = new HashMap<>();
    List<BoardDTO> boardList = boardService.selectBoardList();

    if (boardList.isEmpty()) {
      result.put("result", "error");
    }
    else {
      result.put("result", "success");
      result.put("data", boardList);
    }

    return result;
  }

//  게시판 상세보기
  @GetMapping("/board/{boardIdx}")
  public Object selectBoardDetail(@RequestParam("boardIdx") int boardIdx) {

    return null;
  }

//  게시글 등록
  @PostMapping("/board/insert")
  public Object insertBoard(
      @RequestParam("title") String title,
      @RequestParam("contents") String contents,
      @RequestParam("userId") String userId
  ) {
    return null;
  }

//  게시글 수정
  @PutMapping("/board/{boardIdx}")
  public Object updateBoard(
      @PathVariable("BoardIdx") int boardIdx,
      @RequestParam("title") String title,
      @RequestParam("contents") String contents
  ) {
    return null;
  }

//  게시글 삭제
  @DeleteMapping("/board/{boardIdx}")
  public Object deleteBoard(@PathVariable("boardIdx") int boardIdx) {
    return null;
  }
}














